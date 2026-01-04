/**
 * Converts degrees to radians
 */
function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}

/**
 * Calculates the distance between two GPS coordinates using the Haversine formula
 * @param lat1 - Latitude of first point
 * @param lon1 - Longitude of first point
 * @param lat2 - Latitude of second point
 * @param lon2 - Longitude of second point
 * @returns Distance in kilometers
 */
export function getDistanceFromLatLonInKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
}

/**
 * Processes a GPX file and cuts it to a specified distance
 * @param xmlDoc - Parsed GPX XML document
 * @param maxDistanceKM - Maximum distance in kilometers
 * @returns Object containing the new GPX blob and metadata
 */
export function processGPX(xmlDoc: Document, maxDistanceKM: number) {
  const trk = xmlDoc.getElementsByTagName('trk')[0];
  const trkseg = xmlDoc.getElementsByTagName('trkseg')[0];

  if (!trk || !trkseg) {
    throw new Error('No valid GPX track found');
  }

  const points = Array.from(trkseg.getElementsByTagName('trkpt'));
  const originalName =
    xmlDoc.getElementsByTagName('name')[0]?.textContent || 'Route';

  const newPoints: Element[] = [];
  let currentDist = 0;

  // Loop through points until we reach the target distance
  for (let i = 0; i < points.length; i++) {
    const pt = points[i];

    if (newPoints.length > 0) {
      const prevPt = newPoints[newPoints.length - 1];
      const lat1 = parseFloat(prevPt.getAttribute('lat') || '0');
      const lon1 = parseFloat(prevPt.getAttribute('lon') || '0');
      const lat2 = parseFloat(pt.getAttribute('lat') || '0');
      const lon2 = parseFloat(pt.getAttribute('lon') || '0');

      const dist = getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2);
      currentDist += dist;
    }

    newPoints.push(pt);

    // Stop once we reach the target distance
    if (currentDist >= maxDistanceKM) {
      break;
    }
  }

  // Generate new GPX document
  const newDoc = document.implementation.createDocument(null, 'gpx', null);
  const gpxRoot = newDoc.documentElement;

  // Copy attributes
  for (const attr of xmlDoc.documentElement.attributes) {
    gpxRoot.setAttribute(attr.name, attr.value);
  }

  const newTrk = newDoc.createElement('trk');
  const newName = newDoc.createElement('name');
  newName.textContent = `${originalName} (${Math.round(currentDist)}km)`;
  newTrk.appendChild(newName);

  const newTrkSeg = newDoc.createElement('trkseg');

  newPoints.forEach((pt) => {
    newTrkSeg.appendChild(pt.cloneNode(true));
  });

  newTrk.appendChild(newTrkSeg);
  gpxRoot.appendChild(newTrk);

  // Create blob
  const serializer = new XMLSerializer();
  const str = serializer.serializeToString(newDoc);
  const blob = new Blob([str], { type: 'application/octet-stream' });

  const safeName = originalName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  const fileName = `${safeName}_${Math.round(currentDist)}km.gpx`;

  return {
    blob,
    fileName,
    distance: currentDist,
    pointCount: newPoints.length,
  };
}
