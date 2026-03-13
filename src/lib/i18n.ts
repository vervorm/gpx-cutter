export type Language = "nl" | "en" | "fr" | "es" | "de" | "no" | "pt";

export interface Translations {
  // Header
  title: string;
  subtitle: string;

  // Step 1: Upload
  step1Title: string;
  uploadPrompt: string;

  // Preview
  previewTitle: string;
  routeName: string;
  totalDistance: string;
  totalPoints: string;
  maxSelection: string;

  // Step 2: Settings
  step2Title: string;
  step2Description: string;
  startFromLabel: string;
  distanceLabel: string;
  selectedSegment: string;
  points: string;

  // Map
  mapTitle: string;
  mapDescription: string;
  fullRouteGray: string;
  selectedBlue: string;
  openFullscreen: string;
  closeFullscreen: string;
  startMarker: string;
  endMarker: string;
  dragToAdjust: string;

  // Generate
  generate2Segments: string;
  generate3Segments: string;

  // Segments
  allSegmentsTitle: string;
  allSegmentsDescription: string;
  segment: string;
  download: string;

  // Elevation
  elevationGain: string;
  elevationLoss: string;
  elevationMin: string;
  elevationMax: string;
  noElevationData: string;
  elevationProfile: string;

  // Messages
  segmentsGenerated: string;
  downloaded: string;
  noRouteData: string;
  error: string;

  // Help section
  howItWorksTitle: string;
  howItWorksStep1: string;
  howItWorksStep2: string;
  howItWorksStep3: string;
  howItWorksStep4: string;
  howItWorksStep5: string;

  // About section
  aboutTitle: string;
  aboutWhyTitle: string;
  aboutWhyText1: string;
  aboutWhyText2: string;
  aboutWhyText3: string;
  aboutStoryTitle: string;
  aboutStoryText1: string;
  aboutStoryText2: string;
  aboutStoryText3: string;
  aboutStoryText4: string;
  aboutJourneyDates: string;
  aboutCancerText: string;
  aboutDedication: string;
  aboutLinksTitle: string;
  aboutLinkKomoot: string;
  aboutLinkKomOpTegenKanker: string;
  aboutLinkInstagram: string;
  aboutTechTitle: string;
  aboutTechText: string;
  aboutTechGithub: string;
  aboutTechClaude: string;

  // Language names
  languageName: string;

  // Tabs
  tabRoute: string;
  tabAbout: string;
}

export const translations: Record<Language, Translations> = {
  nl: {
    title: "Route knipper",
    subtitle: "Knip je route op maat, van lang naar perfect, segment voor segment",

    step1Title: "Stap 1: Route Laden",
    uploadPrompt: "Tik om GPX bestand te kiezen",

    previewTitle: "Route Preview",
    routeName: "Route naam:",
    totalDistance: "Totale afstand:",
    totalPoints: "Aantal punten:",
    maxSelection: "Max selectie:",

    step2Title: "Selecteer Segment",
    step2Description:
      "Gebruik de sliders om je segment te kiezen - de kaart toont het direct",
    startFromLabel: "Start vanaf (KM)",
    distanceLabel: "Afstand (KM)",
    selectedSegment: "Geselecteerd Segment:",
    points: "GPS punten",

    mapTitle: "Route Kaart",
    mapDescription: "Volledige route in grijs, geselecteerd segment in blauw",
    fullRouteGray: "Volledige route (grijs)",
    selectedBlue: "Geselecteerd segment (blauw)",
    openFullscreen: "Open fullscreen",
    closeFullscreen: "Sluit fullscreen",
    startMarker: "Start",
    endMarker: "Einde",
    dragToAdjust: "Sleep om aan te passen",

    generate2Segments: "Genereer 2 Segmenten",
    generate3Segments: "Genereer 3 Segmenten",

    allSegmentsTitle: "Alle Segmenten",
    allSegmentsDescription: "Klik op een segment om te downloaden",
    segment: "Segment",
    download: "Download",

    elevationGain: "Hoogtemeters stijging",
    elevationLoss: "Hoogtemeters daling",
    elevationMin: "Min. hoogte",
    elevationMax: "Max. hoogte",
    noElevationData: "Geen hoogte data",
    elevationProfile: "Hoogteprofiel",

    segmentsGenerated: "segmenten gegenereerd!",
    downloaded: "gedownload!",
    noRouteData: "Geen route data beschikbaar",
    error: "Er is een fout opgetreden",

    howItWorksTitle: "Hoe werkt dit?",
    howItWorksStep1:
      "Upload je GPX bestand van je GPS apparaat, Komoot, Strava of andere app.",
    howItWorksStep2:
      "De route wordt automatisch geanalyseerd en op de kaart getoond.",
    howItWorksStep3:
      "Gebruik de sliders om je gewenste segment te kiezen - zie het direct op de kaart!",
    howItWorksStep4: 'Klik op "Genereer Segmenten" om meerdere delen te maken.',
    howItWorksStep5:
      "Klik op een segment om het als GPX bestand te downloaden.",

    aboutTitle: "Over dit project",
    aboutWhyTitle: "Waarom deze tool?",
    aboutWhyText1:
      "Je kan lange routes maken op Komoot, maar niet alle GPS trackers kunnen grote GPX bestanden aan.",
    aboutWhyText2:
      'De "day by day" functie van Komoot splitst je volledige route op, maar kan daarna niet meer gereset worden.',
    aboutWhyText3:
      "En één specifiek stuk uit een lange GPX route halen was gewoonweg niet mogelijk... tot nu.",
    aboutStoryTitle: "Een persoonlijke reis",
    aboutStoryText1:
      "Deze tool is gemaakt voor een bijzondere reis van meer dan 10.000 km.",
    aboutStoryText2:
      "Ter herdenking van het 10-jarig overlijden van mijn broer Koenraad (aka Koene), die uitgestrooid is op zee.",
    aboutStoryText3: "De route volgt de volledige Europese westkust:",
    aboutStoryText4: "Oostende → Faro → Noordkaap → Oostende",
    aboutJourneyDates:
      "De reis start op 01/05/2026 op de pier van Oostende en eindigt op 23/08/2026 op diezelfde pier. 10 jaar na het overlijden van mijn broer.",
    aboutCancerText:
      'Deze reis is ook in het teken van "Kom op tegen Kanker" om geld in te zamelen voor kankeronderzoek en ondersteuning.',
    aboutDedication:
      "100 dagen × 100 km/dag, in liefdevolle herinnering aan Koene",
    aboutLinksTitle: "Volg de reis",
    aboutLinkKomoot: "Bekijk de volledige route op Komoot",
    aboutLinkKomOpTegenKanker: 'Steun de actie "10K voor K"',
    aboutLinkInstagram: "Volg het avontuur op Instagram",
    aboutTechTitle: "Open Source & Technologie",
    aboutTechText:
      "Deze tool is volledig open source en beschikbaar op GitHub. Iedereen kan de code bekijken, gebruiken en verbeteren.",
    aboutTechGithub: "Bekijk de code op GitHub",
    aboutTechClaude:
      "Volledig ontwikkeld met Claude Code (AI-assisted development)",

    languageName: "Nederlands",

    tabRoute: "Route Tool",
    tabAbout: "Over dit project",
  },
  en: {
    title: "Route Snipper",
    subtitle: "Cut your route to size, from long to perfect, segment by segment",

    step1Title: "Step 1: Load Route",
    uploadPrompt: "Click to choose GPX file",

    previewTitle: "Route Preview",
    routeName: "Route name:",
    totalDistance: "Total distance:",
    totalPoints: "Total points:",
    maxSelection: "Max selection:",

    step2Title: "Select Segment",
    step2Description:
      "Use the sliders to choose your segment - the map updates immediately",
    startFromLabel: "Start from (KM)",
    distanceLabel: "Distance (KM)",
    selectedSegment: "Selected Segment:",
    points: "GPS points",

    mapTitle: "Route Map",
    mapDescription: "Full route in gray, selected segment in blue",
    fullRouteGray: "Full route (gray)",
    selectedBlue: "Selected segment (blue)",
    openFullscreen: "Open fullscreen",
    closeFullscreen: "Close fullscreen",
    startMarker: "Start",
    endMarker: "End",
    dragToAdjust: "Drag to adjust",

    generate2Segments: "Generate 2 Segments",
    generate3Segments: "Generate 3 Segments",

    allSegmentsTitle: "All Segments",
    allSegmentsDescription: "Click on a segment to download",
    segment: "Segment",
    download: "Download",

    elevationGain: "Elevation gain",
    elevationLoss: "Elevation loss",
    elevationMin: "Min. elevation",
    elevationMax: "Max. elevation",
    noElevationData: "No elevation data",
    elevationProfile: "Elevation Profile",

    segmentsGenerated: "segments generated!",
    downloaded: "downloaded!",
    noRouteData: "No route data available",
    error: "An error occurred",

    howItWorksTitle: "How does it work?",
    howItWorksStep1:
      "Upload your GPX file from your GPS device, Komoot, Strava or other app.",
    howItWorksStep2:
      "The route is automatically analyzed and displayed on the map.",
    howItWorksStep3:
      "Use the sliders to choose your desired segment - see it immediately on the map!",
    howItWorksStep4: 'Click "Generate Segments" to create multiple parts.',
    howItWorksStep5: "Click on a segment to download it as a GPX file.",

    aboutTitle: "About this project",
    aboutWhyTitle: "Why this tool?",
    aboutWhyText1:
      "You can create long routes on Komoot, but not all GPS trackers can handle large GPX files.",
    aboutWhyText2:
      'Komoot\'s "day by day" feature splits your complete route, but cannot be reset afterwards.',
    aboutWhyText3:
      "And extracting one specific section from a long GPX route was simply not possible... until now.",
    aboutStoryTitle: "A personal journey",
    aboutStoryText1:
      "This tool was created for a special journey of more than 10,000 km.",
    aboutStoryText2:
      "In memory of the 10th anniversary of my brother Koenraad's (aka Koene) passing, whose ashes were scattered at sea.",
    aboutStoryText3: "The route follows the entire European west coast:",
    aboutStoryText4: "Ostend → Faro → North Cape → Ostend",
    aboutJourneyDates:
      "The journey starts on May 1st, 2026 at the pier in Ostend and ends on August 23rd, 2026 at the same pier. 10 years after my brother's passing.",
    aboutCancerText:
      'This journey also supports "Kom op tegen Kanker" (Stand up to Cancer) to raise funds for cancer research and support.',
    aboutDedication: "100 days × 100 km/day, in loving memory of Koene",
    aboutLinksTitle: "Follow the journey",
    aboutLinkKomoot: "View the complete route on Komoot",
    aboutLinkKomOpTegenKanker: 'Support the "10K for K" campaign',
    aboutLinkInstagram: "Follow the adventure on Instagram",
    aboutTechTitle: "Open Source & Technology",
    aboutTechText:
      "This tool is fully open source and available on GitHub. Anyone can view, use, and improve the code.",
    aboutTechGithub: "View code on GitHub",
    aboutTechClaude:
      "Fully developed with Claude Code (AI-assisted development)",

    languageName: "English",

    tabRoute: "Route Tool",
    tabAbout: "About this project",
  },
  fr: {
    title: "Découpeur de Route",
    subtitle: "Découpez votre route sur mesure, de longue à parfaite, segment par segment",

    step1Title: "Étape 1: Charger l'Itinéraire",
    uploadPrompt: "Cliquez pour choisir un fichier GPX",

    previewTitle: "Aperçu de l'Itinéraire",
    routeName: "Nom de l'itinéraire:",
    totalDistance: "Distance totale:",
    totalPoints: "Points totaux:",
    maxSelection: "Sélection max:",

    step2Title: "Sélectionner le Segment",
    step2Description:
      "Utilisez les curseurs pour choisir votre segment - la carte se met à jour immédiatement",
    startFromLabel: "Départ de (KM)",
    distanceLabel: "Distance (KM)",
    selectedSegment: "Segment Sélectionné:",
    points: "points GPS",

    mapTitle: "Carte de l'Itinéraire",
    mapDescription: "Itinéraire complet en gris, segment sélectionné en bleu",
    fullRouteGray: "Itinéraire complet (gris)",
    selectedBlue: "Segment sélectionné (bleu)",
    openFullscreen: "Ouvrir en plein écran",
    closeFullscreen: "Fermer le plein écran",
    startMarker: "Départ",
    endMarker: "Fin",
    dragToAdjust: "Glisser pour ajuster",

    generate2Segments: "Générer 2 Segments",
    generate3Segments: "Générer 3 Segments",

    allSegmentsTitle: "Tous les Segments",
    allSegmentsDescription: "Cliquez sur un segment pour télécharger",
    segment: "Segment",
    download: "Télécharger",

    elevationGain: "Dénivelé positif",
    elevationLoss: "Dénivelé négatif",
    elevationMin: "Altitude min.",
    elevationMax: "Altitude max.",
    noElevationData: "Pas de données d'altitude",
    elevationProfile: "Profil d'Altitude",

    segmentsGenerated: "segments générés!",
    downloaded: "téléchargé!",
    noRouteData: "Aucune donnée d'itinéraire disponible",
    error: "Une erreur s'est produite",

    howItWorksTitle: "Comment ça marche ?",
    howItWorksStep1:
      "Téléchargez votre fichier GPX depuis votre appareil GPS, Komoot, Strava ou autre application.",
    howItWorksStep2:
      "L'itinéraire est automatiquement analysé et affiché sur la carte.",
    howItWorksStep3:
      "Utilisez les curseurs pour choisir votre segment - voyez-le immédiatement sur la carte !",
    howItWorksStep4:
      'Cliquez sur "Générer des Segments" pour créer plusieurs parties.',
    howItWorksStep5:
      "Cliquez sur un segment pour le télécharger en tant que fichier GPX.",

    aboutTitle: "À propos de ce projet",
    aboutWhyTitle: "Pourquoi cet outil ?",
    aboutWhyText1:
      "Vous pouvez créer de longs itinéraires sur Komoot, mais tous les GPS ne peuvent pas gérer de gros fichiers GPX.",
    aboutWhyText2:
      'La fonction "jour par jour" de Komoot divise votre itinéraire complet, mais ne peut pas être réinitialisée ensuite.',
    aboutWhyText3:
      "Et extraire une section spécifique d'un long itinéraire GPX était tout simplement impossible... jusqu'à présent.",
    aboutStoryTitle: "Un voyage personnel",
    aboutStoryText1:
      "Cet outil a été créé pour un voyage exceptionnel de plus de 10 000 km.",
    aboutStoryText2:
      "En mémoire du 10e anniversaire du décès de mon frère Koenraad (alias Koene), dont les cendres ont été dispersées en mer.",
    aboutStoryText3: "L'itinéraire suit toute la côte ouest européenne :",
    aboutStoryText4: "Ostende → Faro → Cap Nord → Ostende",
    aboutJourneyDates:
      "Le voyage commence le 1er mai 2026 sur la jetée d'Ostende et se termine le 23 août 2026 au même endroit. 10 ans après le décès de mon frère.",
    aboutCancerText:
      'Ce voyage soutient également "Kom op tegen Kanker" (Lutte contre le Cancer) pour collecter des fonds pour la recherche et le soutien.',
    aboutDedication: "100 jours × 100 km/jour, en mémoire affectueuse de Koene",
    aboutLinksTitle: "Suivez le voyage",
    aboutLinkKomoot: "Voir l'itinéraire complet sur Komoot",
    aboutLinkKomOpTegenKanker: 'Soutenez la campagne "10K pour K"',
    aboutLinkInstagram: "Suivez l'aventure sur Instagram",
    aboutTechTitle: "Open Source & Technologie",
    aboutTechText:
      "Cet outil est entièrement open source et disponible sur GitHub. Tout le monde peut voir, utiliser et améliorer le code.",
    aboutTechGithub: "Voir le code sur GitHub",
    aboutTechClaude:
      "Entièrement développé avec Claude Code (développement assisté par IA)",

    languageName: "Français",

    tabRoute: "Outil d'Itinéraire",
    tabAbout: "À propos de ce projet",
  },
  es: {
    title: "Cortador de Ruta",
    subtitle: "Corta tu ruta a medida, de larga a perfecta, segmento por segmento",

    step1Title: "Paso 1: Cargar Ruta",
    uploadPrompt: "Haz clic para elegir archivo GPX",

    previewTitle: "Vista Previa de la Ruta",
    routeName: "Nombre de la ruta:",
    totalDistance: "Distancia total:",
    totalPoints: "Puntos totales:",
    maxSelection: "Selección máx:",

    step2Title: "Seleccionar Segmento",
    step2Description:
      "Use los deslizadores para elegir su segmento - el mapa se actualiza inmediatamente",
    startFromLabel: "Comenzar desde (KM)",
    distanceLabel: "Distancia (KM)",
    selectedSegment: "Segmento Seleccionado:",
    points: "puntos GPS",

    mapTitle: "Mapa de la Ruta",
    mapDescription: "Ruta completa en gris, segmento seleccionado en azul",
    fullRouteGray: "Ruta completa (gris)",
    selectedBlue: "Segmento seleccionado (azul)",
    openFullscreen: "Abrir pantalla completa",
    closeFullscreen: "Cerrar pantalla completa",
    startMarker: "Inicio",
    endMarker: "Fin",
    dragToAdjust: "Arrastrar para ajustar",

    generate2Segments: "Generar 2 Segmentos",
    generate3Segments: "Generar 3 Segmentos",

    allSegmentsTitle: "Todos los Segmentos",
    allSegmentsDescription: "Haz clic en un segmento para descargar",
    segment: "Segmento",
    download: "Descargar",

    elevationGain: "Desnivel positivo",
    elevationLoss: "Desnivel negativo",
    elevationMin: "Altitud mín.",
    elevationMax: "Altitud máx.",
    noElevationData: "Sin datos de altitud",
    elevationProfile: "Perfil de Altitud",

    segmentsGenerated: "segmentos generados!",
    downloaded: "descargado!",
    noRouteData: "No hay datos de ruta disponibles",
    error: "Se produjo un error",

    howItWorksTitle: "¿Cómo funciona?",
    howItWorksStep1:
      "Sube tu archivo GPX desde tu dispositivo GPS, Komoot, Strava u otra aplicación.",
    howItWorksStep2:
      "La ruta se analiza automáticamente y se muestra en el mapa.",
    howItWorksStep3:
      "¡Usa los deslizadores para elegir tu segmento - vélo inmediatamente en el mapa!",
    howItWorksStep4:
      'Haz clic en "Generar Segmentos" para crear varias partes.',
    howItWorksStep5:
      "Haz clic en un segmento para descargarlo como archivo GPX.",

    aboutTitle: "Sobre este proyecto",
    aboutWhyTitle: "¿Por qué esta herramienta?",
    aboutWhyText1:
      "Puedes crear rutas largas en Komoot, pero no todos los GPS pueden manejar archivos GPX grandes.",
    aboutWhyText2:
      'La función "día a día" de Komoot divide tu ruta completa, pero no se puede restablecer después.',
    aboutWhyText3:
      "Y extraer una sección específica de una ruta GPX larga simplemente no era posible... hasta ahora.",
    aboutStoryTitle: "Un viaje personal",
    aboutStoryText1:
      "Esta herramienta fue creada para un viaje especial de más de 10.000 km.",
    aboutStoryText2:
      "En memoria del 10° aniversario del fallecimiento de mi hermano Koenraad (alias Koene), cuyas cenizas fueron esparcidas en el mar.",
    aboutStoryText3: "La ruta sigue toda la costa oeste europea:",
    aboutStoryText4: "Ostende → Faro → Cabo Norte → Ostende",
    aboutJourneyDates:
      "El viaje comienza el 1 de mayo de 2026 en el muelle de Ostende y termina el 23 de agosto de 2026 en el mismo lugar. 10 años después del fallecimiento de mi hermano.",
    aboutCancerText:
      'Este viaje también apoya "Kom op tegen Kanker" (Lucha contra el Cáncer) para recaudar fondos para la investigación y el apoyo.',
    aboutDedication: "100 días × 100 km/día, en memoria amorosa de Koene",
    aboutLinksTitle: "Sigue el viaje",
    aboutLinkKomoot: "Ver la ruta completa en Komoot",
    aboutLinkKomOpTegenKanker: 'Apoya la campaña "10K para K"',
    aboutLinkInstagram: "Sigue la aventura en Instagram",
    aboutTechTitle: "Código Abierto & Tecnología",
    aboutTechText:
      "Esta herramienta es completamente de código abierto y está disponible en GitHub. Cualquiera puede ver, usar y mejorar el código.",
    aboutTechGithub: "Ver el código en GitHub",
    aboutTechClaude:
      "Completamente desarrollado con Claude Code (desarrollo asistido por IA)",

    languageName: "Español",

    tabRoute: "Herramienta de Ruta",
    tabAbout: "Sobre este proyecto",
  },
  de: {
    title: "Routen Schneider",
    subtitle: "Schneiden Sie Ihre Route nach Maß, von lang zu perfekt, Segment für Segment",

    step1Title: "Schritt 1: Route Laden",
    uploadPrompt: "Klicken Sie, um GPX-Datei auszuwählen",

    previewTitle: "Routenvorschau",
    routeName: "Routenname:",
    totalDistance: "Gesamtdistanz:",
    totalPoints: "Gesamtpunkte:",
    maxSelection: "Max. Auswahl:",

    step2Title: "Segment Auswählen",
    step2Description:
      "Verwenden Sie die Schieberegler, um Ihr Segment auszuwählen - die Karte wird sofort aktualisiert",
    startFromLabel: "Start ab (KM)",
    distanceLabel: "Distanz (KM)",
    selectedSegment: "Ausgewähltes Segment:",
    points: "GPS-Punkte",

    mapTitle: "Routenkarte",
    mapDescription: "Vollständige Route in Grau, ausgewähltes Segment in Blau",
    fullRouteGray: "Vollständige Route (grau)",
    selectedBlue: "Ausgewähltes Segment (blau)",
    openFullscreen: "Vollbild öffnen",
    closeFullscreen: "Vollbild schließen",
    startMarker: "Start",
    endMarker: "Ende",
    dragToAdjust: "Ziehen zum Anpassen",

    generate2Segments: "2 Segmente Generieren",
    generate3Segments: "3 Segmente Generieren",

    allSegmentsTitle: "Alle Segmente",
    allSegmentsDescription: "Klicken Sie auf ein Segment zum Herunterladen",
    segment: "Segment",
    download: "Herunterladen",

    elevationGain: "Höhenmeter bergauf",
    elevationLoss: "Höhenmeter bergab",
    elevationMin: "Min. Höhe",
    elevationMax: "Max. Höhe",
    noElevationData: "Keine Höhendaten",
    elevationProfile: "Höhenprofil",

    segmentsGenerated: "Segmente generiert!",
    downloaded: "heruntergeladen!",
    noRouteData: "Keine Routendaten verfügbar",
    error: "Ein Fehler ist aufgetreten",

    howItWorksTitle: "Wie funktioniert es?",
    howItWorksStep1:
      "Laden Sie Ihre GPX-Datei von Ihrem GPS-Gerät, Komoot, Strava oder einer anderen App hoch.",
    howItWorksStep2:
      "Die Route wird automatisch analysiert und auf der Karte angezeigt.",
    howItWorksStep3:
      "Verwenden Sie die Schieberegler, um Ihr Segment zu wählen - sehen Sie es sofort auf der Karte!",
    howItWorksStep4:
      'Klicken Sie auf "Segmente Generieren", um mehrere Teile zu erstellen.',
    howItWorksStep5:
      "Klicken Sie auf ein Segment, um es als GPX-Datei herunterzuladen.",

    aboutTitle: "Über dieses Projekt",
    aboutWhyTitle: "Warum dieses Tool?",
    aboutWhyText1:
      "Sie können lange Routen auf Komoot erstellen, aber nicht alle GPS-Tracker können große GPX-Dateien verarbeiten.",
    aboutWhyText2:
      'Die "Tag für Tag"-Funktion von Komoot teilt Ihre komplette Route auf, kann aber danach nicht zurückgesetzt werden.',
    aboutWhyText3:
      "Und einen bestimmten Abschnitt aus einer langen GPX-Route zu extrahieren war einfach nicht möglich... bis jetzt.",
    aboutStoryTitle: "Eine persönliche Reise",
    aboutStoryText1:
      "Dieses Tool wurde für eine besondere Reise von mehr als 10.000 km erstellt.",
    aboutStoryText2:
      "Zum Gedenken an den 10. Jahrestag des Todes meines Bruders Koenraad (alias Koene), dessen Asche auf See verstreut wurde.",
    aboutStoryText3: "Die Route folgt der gesamten europäischen Westküste:",
    aboutStoryText4: "Ostende → Faro → Nordkap → Ostende",
    aboutJourneyDates:
      "Die Reise beginnt am 1. Mai 2026 am Pier von Ostende und endet am 23. August 2026 am selben Pier. 10 Jahre nach dem Tod meines Bruders.",
    aboutCancerText:
      'Diese Reise unterstützt auch "Kom op tegen Kanker" (Kampf gegen Krebs) zur Finanzierung von Krebsforschung und Unterstützung.',
    aboutDedication:
      "100 Tage × 100 km/Tag, in liebevoller Erinnerung an Koene",
    aboutLinksTitle: "Folgen Sie der Reise",
    aboutLinkKomoot: "Vollständige Route auf Komoot ansehen",
    aboutLinkKomOpTegenKanker: 'Unterstützen Sie die Kampagne "10K für K"',
    aboutLinkInstagram: "Folgen Sie dem Abenteuer auf Instagram",
    aboutTechTitle: "Open Source & Technologie",
    aboutTechText:
      "Dieses Tool ist vollständig Open Source und auf GitHub verfügbar. Jeder kann den Code einsehen, verwenden und verbessern.",
    aboutTechGithub: "Code auf GitHub ansehen",
    aboutTechClaude:
      "Vollständig entwickelt mit Claude Code (KI-gestützte Entwicklung)",

    languageName: "Deutsch",

    tabRoute: "Routen-Tool",
    tabAbout: "Über dieses Projekt",
  },
  no: {
    title: "Ruteklipper",
    subtitle: "Klipp ruten din på mål, fra lang til perfekt, segment for segment",

    step1Title: "Trinn 1: Last Inn Rute",
    uploadPrompt: "Klikk for å velge GPX-fil",

    previewTitle: "Ruteforhåndsvisning",
    routeName: "Rutenavn:",
    totalDistance: "Total avstand:",
    totalPoints: "Totalt antall punkter:",
    maxSelection: "Maks. valg:",

    step2Title: "Velg Segment",
    step2Description:
      "Bruk glidebrytere for å velge segment - kartet oppdateres umiddelbart",
    startFromLabel: "Start fra (KM)",
    distanceLabel: "Avstand (KM)",
    selectedSegment: "Valgt Segment:",
    points: "GPS-punkter",

    mapTitle: "Rutekart",
    mapDescription: "Full rute i grått, valgt segment i blått",
    fullRouteGray: "Full rute (grå)",
    selectedBlue: "Valgt segment (blå)",
    openFullscreen: "Åpne fullskjerm",
    closeFullscreen: "Lukk fullskjerm",
    startMarker: "Start",
    endMarker: "Slutt",
    dragToAdjust: "Dra for å justere",

    generate2Segments: "Generer 2 Segmenter",
    generate3Segments: "Generer 3 Segmenter",

    allSegmentsTitle: "Alle Segmenter",
    allSegmentsDescription: "Klikk på et segment for å laste ned",
    segment: "Segment",
    download: "Last Ned",

    elevationGain: "Høydemeter opp",
    elevationLoss: "Høydemeter ned",
    elevationMin: "Min. høyde",
    elevationMax: "Maks. høyde",
    noElevationData: "Ingen høydedata",
    elevationProfile: "Høydeprofil",

    segmentsGenerated: "segmenter generert!",
    downloaded: "lastet ned!",
    noRouteData: "Ingen rutedata tilgjengelig",
    error: "En feil oppstod",

    howItWorksTitle: "Hvordan fungerer det?",
    howItWorksStep1:
      "Last opp din GPX-fil fra GPS-enheten, Komoot, Strava eller annen app.",
    howItWorksStep2: "Ruten analyseres automatisk og vises på kartet.",
    howItWorksStep3:
      "Bruk glidebrytere for å velge ditt segment - se det umiddelbart på kartet!",
    howItWorksStep4: 'Klikk på "Generer Segmenter" for å lage flere deler.',
    howItWorksStep5: "Klikk på et segment for å laste det ned som en GPX-fil.",

    aboutTitle: "Om dette prosjektet",
    aboutWhyTitle: "Hvorfor dette verktøyet?",
    aboutWhyText1:
      "Du kan lage lange ruter på Komoot, men ikke alle GPS-trackere kan håndtere store GPX-filer.",
    aboutWhyText2:
      'Komoot sin "dag for dag"-funksjon deler opp hele ruten, men kan ikke tilbakestilles etterpå.',
    aboutWhyText3:
      "Og å hente ut en bestemt del fra en lang GPX-rute var rett og slett ikke mulig... før nå.",
    aboutStoryTitle: "En personlig reise",
    aboutStoryText1:
      "Dette verktøyet ble laget for en spesiell reise på mer enn 10 000 km.",
    aboutStoryText2:
      "Til minne om 10-årsdagen for min bror Koenraads (alias Koene) bortgang, hvis aske ble strødd i havet.",
    aboutStoryText3: "Ruten følger hele den europeiske vestkysten:",
    aboutStoryText4: "Oostende → Faro → Nordkapp → Oostende",
    aboutJourneyDates:
      "Reisen starter 1. mai 2026 på piren i Oostende og slutter 23. august 2026 på samme pier. 10 år etter min brors bortgang.",
    aboutCancerText:
      'Denne reisen støtter også "Kom op tegen Kanker" (Stå opp mot Kreft) for å samle inn penger til kreftforskning og støtte.',
    aboutDedication: "100 dager × 100 km/dag, i kjærlig minne om Koene",
    aboutLinksTitle: "Følg reisen",
    aboutLinkKomoot: "Se hele ruten på Komoot",
    aboutLinkKomOpTegenKanker: 'Støtt kampanjen "10K for K"',
    aboutLinkInstagram: "Følg eventyret på Instagram",
    aboutTechTitle: "Open Source & Teknologi",
    aboutTechText:
      "Dette verktøyet er fullstendig åpen kildekode og tilgjengelig på GitHub. Alle kan se, bruke og forbedre koden.",
    aboutTechGithub: "Se koden på GitHub",
    aboutTechClaude:
      "Fullstendig utviklet med Claude Code (AI-assistert utvikling)",

    languageName: "Norsk",

    tabRoute: "Ruteverktøy",
    tabAbout: "Om dette prosjektet",
  },
  pt: {
    title: "Cortador de Rota",
    subtitle: "Corte sua rota sob medida, de longa a perfeita, segmento por segmento",

    step1Title: "Passo 1: Carregar Rota",
    uploadPrompt: "Clique para escolher arquivo GPX",

    previewTitle: "Pré-visualização da Rota",
    routeName: "Nome da rota:",
    totalDistance: "Distância total:",
    totalPoints: "Pontos totais:",
    maxSelection: "Seleção máx:",

    step2Title: "Selecionar Segmento",
    step2Description:
      "Use os controles deslizantes para escolher seu segmento - o mapa atualiza imediatamente",
    startFromLabel: "Começar de (KM)",
    distanceLabel: "Distância (KM)",
    selectedSegment: "Segmento Selecionado:",
    points: "pontos GPS",

    mapTitle: "Mapa da Rota",
    mapDescription: "Rota completa em cinza, segmento selecionado em azul",
    fullRouteGray: "Rota completa (cinza)",
    selectedBlue: "Segmento selecionado (azul)",
    openFullscreen: "Abrir tela cheia",
    closeFullscreen: "Fechar tela cheia",
    startMarker: "Início",
    endMarker: "Fim",
    dragToAdjust: "Arrastar para ajustar",

    generate2Segments: "Gerar 2 Segmentos",
    generate3Segments: "Gerar 3 Segmentos",

    allSegmentsTitle: "Todos os Segmentos",
    allSegmentsDescription: "Clique em um segmento para baixar",
    segment: "Segmento",
    download: "Baixar",

    elevationGain: "Ganho de elevação",
    elevationLoss: "Perda de elevação",
    elevationMin: "Elevação mín.",
    elevationMax: "Elevação máx.",
    noElevationData: "Sem dados de elevação",
    elevationProfile: "Perfil de Elevação",

    segmentsGenerated: "segmentos gerados!",
    downloaded: "baixado!",
    noRouteData: "Nenhum dado de rota disponível",
    error: "Ocorreu um erro",

    howItWorksTitle: "Como funciona?",
    howItWorksStep1:
      "Carregue seu arquivo GPX do seu dispositivo GPS, Komoot, Strava ou outro aplicativo.",
    howItWorksStep2: "A rota é automaticamente analisada e exibida no mapa.",
    howItWorksStep3:
      "Use os controles deslizantes para escolher seu segmento - veja-o imediatamente no mapa!",
    howItWorksStep4: 'Clique em "Gerar Segmentos" para criar várias partes.',
    howItWorksStep5: "Clique em um segmento para baixá-lo como arquivo GPX.",

    aboutTitle: "Sobre este projeto",
    aboutWhyTitle: "Por que esta ferramenta?",
    aboutWhyText1:
      "Você pode criar rotas longas no Komoot, mas nem todos os GPS podem lidar com arquivos GPX grandes.",
    aboutWhyText2:
      'A função "dia a dia" do Komoot divide sua rota completa, mas não pode ser redefinida depois.',
    aboutWhyText3:
      "E extrair uma seção específica de uma rota GPX longa simplesmente não era possível... até agora.",
    aboutStoryTitle: "Uma jornada pessoal",
    aboutStoryText1:
      "Esta ferramenta foi criada para uma jornada especial de mais de 10.000 km.",
    aboutStoryText2:
      "Em memória do 10º aniversário do falecimento de meu irmão Koenraad (alias Koene), cujas cinzas foram espalhadas no mar.",
    aboutStoryText3: "A rota segue toda a costa oeste europeia:",
    aboutStoryText4: "Ostende → Faro → Cabo Norte → Ostende",
    aboutJourneyDates:
      "A jornada começa em 1º de maio de 2026 no cais de Ostende e termina em 23 de agosto de 2026 no mesmo cais. 10 anos após o falecimento do meu irmão.",
    aboutCancerText:
      'Esta jornada também apoia "Kom op tegen Kanker" (Combate ao Câncer) para arrecadar fundos para pesquisa e apoio.',
    aboutDedication: "100 dias × 100 km/dia, em memória amorosa de Koene",
    aboutLinksTitle: "Siga a jornada",
    aboutLinkKomoot: "Veja a rota completa no Komoot",
    aboutLinkKomOpTegenKanker: 'Apoie a campanha "10K para K"',
    aboutLinkInstagram: "Siga a aventura no Instagram",
    aboutTechTitle: "Código Aberto & Tecnologia",
    aboutTechText:
      "Esta ferramenta é totalmente de código aberto e disponível no GitHub. Qualquer pessoa pode ver, usar e melhorar o código.",
    aboutTechGithub: "Ver código no GitHub",
    aboutTechClaude:
      "Totalmente desenvolvido com Claude Code (desenvolvimento assistido por IA)",

    languageName: "Português",

    tabRoute: "Ferramenta de Rota",
    tabAbout: "Sobre este projeto",
  },
};

export function getTranslations(lang: Language): Translations {
  // Fallback to 'nl' if the provided language doesn't exist
  return translations[lang] || translations.nl;
}

export const LANGUAGES: { code: Language; name: string; flag: string }[] = [
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "no", name: "Norsk", flag: "🇳🇴" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
];
