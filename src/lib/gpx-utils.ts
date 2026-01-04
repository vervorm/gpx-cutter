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

export interface RoutePoint {
  lat: number;
  lon: number;
}

export interface GPXPreview {
  originalName: string;
  totalDistance: number;
  totalPoints: number;
  startLat: number;
  startLon: number;
  endLat: number;
  endLon: number;
  allPoints: RoutePoint[];
}

export interface GPXProcessOptions {
  startFromKM?: number;
  distanceKM: number;
}

export interface GPXProcessResult {
  blob: Blob;
  fileName: string;
  distance: number;
  pointCount: number;
  startKm: number;
  endKm: number;
  selectedPoints: RoutePoint[];
}

/**
 * Analyzes a GPX file and returns preview information
 * @param xmlDoc - Parsed GPX XML document
 * @returns Preview information about the route
 */
export function analyzeGPX(xmlDoc: Document): GPXPreview {
  const trk = xmlDoc.getElementsByTagName('trk')[0];
  const trkseg = xmlDoc.getElementsByTagName('trkseg')[0];

  if (!trk || !trkseg) {
    throw new Error('No valid GPX track found');
  }

  const points = Array.from(trkseg.getElementsByTagName('trkpt'));
  const originalName =
    xmlDoc.getElementsByTagName('name')[0]?.textContent || 'Route';

  let totalDistance = 0;

  for (let i = 1; i < points.length; i++) {
    const prevPt = points[i - 1];
    const pt = points[i];

    const lat1 = parseFloat(prevPt.getAttribute('lat') || '0');
    const lon1 = parseFloat(prevPt.getAttribute('lon') || '0');
    const lat2 = parseFloat(pt.getAttribute('lat') || '0');
    const lon2 = parseFloat(pt.getAttribute('lon') || '0');

    totalDistance += getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2);
  }

  const firstPoint = points[0];
  const lastPoint = points[points.length - 1];

  // Extract all points for map display
  const allPoints: RoutePoint[] = points.map(pt => ({
    lat: parseFloat(pt.getAttribute('lat') || '0'),
    lon: parseFloat(pt.getAttribute('lon') || '0'),
  }));

  return {
    originalName,
    totalDistance,
    totalPoints: points.length,
    startLat: parseFloat(firstPoint.getAttribute('lat') || '0'),
    startLon: parseFloat(firstPoint.getAttribute('lon') || '0'),
    endLat: parseFloat(lastPoint.getAttribute('lat') || '0'),
    endLon: parseFloat(lastPoint.getAttribute('lon') || '0'),
    allPoints,
  };
}

/**
 * Processes a GPX file and cuts it to a specified range
 * @param xmlDoc - Parsed GPX XML document
 * @param options - Processing options (startFromKM and distanceKM)
 * @returns Object containing the new GPX blob and metadata
 */
export function processGPX(
  xmlDoc: Document,
  options: GPXProcessOptions
) {
  const { startFromKM = 0, distanceKM } = options;

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
  let inRange = startFromKM === 0;
  let rangeDistance = 0;

  // Loop through points to find the range
  for (let i = 0; i < points.length; i++) {
    const pt = points[i];

    // Add the first point if starting from 0
    if (startFromKM === 0 && i === 0) {
        newPoints.push(pt);
        inRange = true;
    }

    // Calculate distance from previous point
    if (i > 0) {
      const prevPt = points[i - 1];
      const lat1 = parseFloat(prevPt.getAttribute('lat') || '0');
      const lon1 = parseFloat(prevPt.getAttribute('lon') || '0');
      const lat2 = parseFloat(pt.getAttribute('lat') || '0');
      const lon2 = parseFloat(pt.getAttribute('lon') || '0');

      const dist = getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2);
      currentDist += dist;

      // Check if we've reached the start point
      if (!inRange && currentDist >= startFromKM) {
        inRange = true;
        // Add the point just before and the point after the start distance
        newPoints.push(prevPt, pt);
        rangeDistance += dist;
      } else if (inRange) {
        // If in range, track the range distance and add the point
        rangeDistance += dist;
        newPoints.push(pt);
      }
    }

    // Stop once we've covered the desired distance in the range
    if (inRange && rangeDistance >= distanceKM) {
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
  const rangeLabel = startFromKM > 0
    ? `${originalName} (${Math.round(startFromKM)}km - ${Math.round(startFromKM + rangeDistance)}km)`
    : `${originalName} (${Math.round(rangeDistance)}km)`;
  newName.textContent = rangeLabel;
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
  const fileName = startFromKM > 0
    ? `${safeName}_${Math.round(startFromKM)}-${Math.round(startFromKM + rangeDistance)}km.gpx`
    : `${safeName}_${Math.round(rangeDistance)}km.gpx`;

  // Extract selected points for map display
  const selectedPoints: RoutePoint[] = newPoints.map(pt => ({
    lat: parseFloat(pt.getAttribute('lat') || '0'),
    lon: parseFloat(pt.getAttribute('lon') || '0'),
  }));

  return {
    blob,
    fileName,
    distance: rangeDistance,
    pointCount: newPoints.length,
    startKm: startFromKM,
    endKm: startFromKM + rangeDistance,
    selectedPoints,
  };
}
