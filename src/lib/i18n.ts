export type Language = 'nl' | 'en' | 'fr' | 'es' | 'de' | 'no' | 'pt'

export interface Translations {
  // Header
  title: string
  subtitle: string

  // Step 1: Upload
  step1Title: string
  uploadPrompt: string

  // Preview
  previewTitle: string
  routeName: string
  totalDistance: string
  totalPoints: string
  maxSelection: string

  // Step 2: Settings
  step2Title: string
  step2Description: string
  startFromLabel: string
  distanceLabel: string
  selectedSegment: string
  points: string

  // Map
  mapTitle: string
  mapDescription: string
  fullRouteGray: string
  selectedBlue: string
  openFullscreen: string
  closeFullscreen: string
  startMarker: string
  endMarker: string

  // Generate
  generate2Segments: string
  generate3Segments: string

  // Segments
  allSegmentsTitle: string
  allSegmentsDescription: string
  segment: string
  download: string

  // Messages
  segmentsGenerated: string
  downloaded: string
  noRouteData: string
  error: string

  // Help section
  howItWorksTitle: string
  howItWorksStep1: string
  howItWorksStep2: string
  howItWorksStep3: string
  howItWorksStep4: string
  howItWorksStep5: string

  // Language names
  languageName: string
}

export const translations: Record<Language, Translations> = {
  nl: {
    title: 'Route Inkorten',
    subtitle: 'Maak een korte versie van je GPX route',

    step1Title: 'Stap 1: Route Laden',
    uploadPrompt: 'Tik om GPX bestand te kiezen',

    previewTitle: 'Route Preview',
    routeName: 'Route naam:',
    totalDistance: 'Totale afstand:',
    totalPoints: 'Aantal punten:',
    maxSelection: 'Max selectie:',

    step2Title: 'Stap 2: Selecteer Segment',
    step2Description: 'Gebruik de sliders om je segment te kiezen - de kaart toont het direct',
    startFromLabel: 'Start vanaf (KM)',
    distanceLabel: 'Afstand (KM)',
    selectedSegment: 'Geselecteerd Segment:',
    points: 'GPS punten',

    mapTitle: 'Route Kaart',
    mapDescription: 'Volledige route in grijs, geselecteerd segment in blauw',
    fullRouteGray: 'Volledige route (grijs)',
    selectedBlue: 'Geselecteerd segment (blauw)',
    openFullscreen: 'Open fullscreen',
    closeFullscreen: 'Sluit fullscreen',
    startMarker: 'Start',
    endMarker: 'Einde',

    generate2Segments: 'Genereer 2 Segmenten',
    generate3Segments: 'Genereer 3 Segmenten',

    allSegmentsTitle: 'Alle Segmenten',
    allSegmentsDescription: 'Klik op een segment om te downloaden',
    segment: 'Segment',
    download: 'Download',

    segmentsGenerated: 'segmenten gegenereerd!',
    downloaded: 'gedownload!',
    noRouteData: 'Geen route data beschikbaar',
    error: 'Er is een fout opgetreden',

    howItWorksTitle: 'Hoe werkt dit?',
    howItWorksStep1: 'Upload je GPX bestand van je GPS apparaat, Komoot, Strava of andere app.',
    howItWorksStep2: 'De route wordt automatisch geanalyseerd en op de kaart getoond.',
    howItWorksStep3: 'Gebruik de sliders om je gewenste segment te kiezen - zie het direct op de kaart!',
    howItWorksStep4: 'Klik op "Genereer Segmenten" om meerdere delen te maken.',
    howItWorksStep5: 'Klik op een segment om het als GPX bestand te downloaden.',

    languageName: 'Nederlands',
  },
  en: {
    title: 'Shorten Route',
    subtitle: 'Create a shortened version of your GPX route',

    step1Title: 'Step 1: Load Route',
    uploadPrompt: 'Click to choose GPX file',

    previewTitle: 'Route Preview',
    routeName: 'Route name:',
    totalDistance: 'Total distance:',
    totalPoints: 'Total points:',
    maxSelection: 'Max selection:',

    step2Title: 'Step 2: Select Segment',
    step2Description: 'Use the sliders to choose your segment - the map updates immediately',
    startFromLabel: 'Start from (KM)',
    distanceLabel: 'Distance (KM)',
    selectedSegment: 'Selected Segment:',
    points: 'GPS points',

    mapTitle: 'Route Map',
    mapDescription: 'Full route in gray, selected segment in blue',
    fullRouteGray: 'Full route (gray)',
    selectedBlue: 'Selected segment (blue)',
    openFullscreen: 'Open fullscreen',
    closeFullscreen: 'Close fullscreen',
    startMarker: 'Start',
    endMarker: 'End',

    generate2Segments: 'Generate 2 Segments',
    generate3Segments: 'Generate 3 Segments',

    allSegmentsTitle: 'All Segments',
    allSegmentsDescription: 'Click on a segment to download',
    segment: 'Segment',
    download: 'Download',

    segmentsGenerated: 'segments generated!',
    downloaded: 'downloaded!',
    noRouteData: 'No route data available',
    error: 'An error occurred',

    howItWorksTitle: 'How does it work?',
    howItWorksStep1: 'Upload your GPX file from your GPS device, Komoot, Strava or other app.',
    howItWorksStep2: 'The route is automatically analyzed and displayed on the map.',
    howItWorksStep3: 'Use the sliders to choose your desired segment - see it immediately on the map!',
    howItWorksStep4: 'Click "Generate Segments" to create multiple parts.',
    howItWorksStep5: 'Click on a segment to download it as a GPX file.',

    languageName: 'English',
  },
  fr: {
    title: 'Raccourcir l\'Itinéraire',
    subtitle: 'Créez une version raccourcie de votre itinéraire GPX',

    step1Title: 'Étape 1: Charger l\'Itinéraire',
    uploadPrompt: 'Cliquez pour choisir un fichier GPX',

    previewTitle: 'Aperçu de l\'Itinéraire',
    routeName: 'Nom de l\'itinéraire:',
    totalDistance: 'Distance totale:',
    totalPoints: 'Points totaux:',
    maxSelection: 'Sélection max:',

    step2Title: 'Étape 2: Sélectionner le Segment',
    step2Description: 'Utilisez les curseurs pour choisir votre segment - la carte se met à jour immédiatement',
    startFromLabel: 'Départ de (KM)',
    distanceLabel: 'Distance (KM)',
    selectedSegment: 'Segment Sélectionné:',
    points: 'points GPS',

    mapTitle: 'Carte de l\'Itinéraire',
    mapDescription: 'Itinéraire complet en gris, segment sélectionné en bleu',
    fullRouteGray: 'Itinéraire complet (gris)',
    selectedBlue: 'Segment sélectionné (bleu)',
    openFullscreen: 'Ouvrir en plein écran',
    closeFullscreen: 'Fermer le plein écran',
    startMarker: 'Départ',
    endMarker: 'Fin',

    generate2Segments: 'Générer 2 Segments',
    generate3Segments: 'Générer 3 Segments',

    allSegmentsTitle: 'Tous les Segments',
    allSegmentsDescription: 'Cliquez sur un segment pour télécharger',
    segment: 'Segment',
    download: 'Télécharger',

    segmentsGenerated: 'segments générés!',
    downloaded: 'téléchargé!',
    noRouteData: 'Aucune donnée d\'itinéraire disponible',
    error: 'Une erreur s\'est produite',

    howItWorksTitle: 'Comment ça marche ?',
    howItWorksStep1: 'Téléchargez votre fichier GPX depuis votre appareil GPS, Komoot, Strava ou autre application.',
    howItWorksStep2: 'L\'itinéraire est automatiquement analysé et affiché sur la carte.',
    howItWorksStep3: 'Utilisez les curseurs pour choisir votre segment - voyez-le immédiatement sur la carte !',
    howItWorksStep4: 'Cliquez sur "Générer des Segments" pour créer plusieurs parties.',
    howItWorksStep5: 'Cliquez sur un segment pour le télécharger en tant que fichier GPX.',

    languageName: 'Français',
  },
  es: {
    title: 'Acortar Ruta',
    subtitle: 'Crea una versión acortada de tu ruta GPX',

    step1Title: 'Paso 1: Cargar Ruta',
    uploadPrompt: 'Haz clic para elegir archivo GPX',

    previewTitle: 'Vista Previa de la Ruta',
    routeName: 'Nombre de la ruta:',
    totalDistance: 'Distancia total:',
    totalPoints: 'Puntos totales:',
    maxSelection: 'Selección máx:',

    step2Title: 'Paso 2: Seleccionar Segmento',
    step2Description: 'Use los deslizadores para elegir su segmento - el mapa se actualiza inmediatamente',
    startFromLabel: 'Comenzar desde (KM)',
    distanceLabel: 'Distancia (KM)',
    selectedSegment: 'Segmento Seleccionado:',
    points: 'puntos GPS',

    mapTitle: 'Mapa de la Ruta',
    mapDescription: 'Ruta completa en gris, segmento seleccionado en azul',
    fullRouteGray: 'Ruta completa (gris)',
    selectedBlue: 'Segmento seleccionado (azul)',
    openFullscreen: 'Abrir pantalla completa',
    closeFullscreen: 'Cerrar pantalla completa',
    startMarker: 'Inicio',
    endMarker: 'Fin',

    generate2Segments: 'Generar 2 Segmentos',
    generate3Segments: 'Generar 3 Segmentos',

    allSegmentsTitle: 'Todos los Segmentos',
    allSegmentsDescription: 'Haz clic en un segmento para descargar',
    segment: 'Segmento',
    download: 'Descargar',

    segmentsGenerated: 'segmentos generados!',
    downloaded: 'descargado!',
    noRouteData: 'No hay datos de ruta disponibles',
    error: 'Se produjo un error',

    howItWorksTitle: '¿Cómo funciona?',
    howItWorksStep1: 'Sube tu archivo GPX desde tu dispositivo GPS, Komoot, Strava u otra aplicación.',
    howItWorksStep2: 'La ruta se analiza automáticamente y se muestra en el mapa.',
    howItWorksStep3: '¡Usa los deslizadores para elegir tu segmento - vélo inmediatamente en el mapa!',
    howItWorksStep4: 'Haz clic en "Generar Segmentos" para crear varias partes.',
    howItWorksStep5: 'Haz clic en un segmento para descargarlo como archivo GPX.',

    languageName: 'Español',
  },
  de: {
    title: 'Route Kürzen',
    subtitle: 'Erstellen Sie eine gekürzte Version Ihrer GPX-Route',

    step1Title: 'Schritt 1: Route Laden',
    uploadPrompt: 'Klicken Sie, um GPX-Datei auszuwählen',

    previewTitle: 'Routenvorschau',
    routeName: 'Routenname:',
    totalDistance: 'Gesamtdistanz:',
    totalPoints: 'Gesamtpunkte:',
    maxSelection: 'Max. Auswahl:',

    step2Title: 'Schritt 2: Segment Auswählen',
    step2Description: 'Verwenden Sie die Schieberegler, um Ihr Segment auszuwählen - die Karte wird sofort aktualisiert',
    startFromLabel: 'Start ab (KM)',
    distanceLabel: 'Distanz (KM)',
    selectedSegment: 'Ausgewähltes Segment:',
    points: 'GPS-Punkte',

    mapTitle: 'Routenkarte',
    mapDescription: 'Vollständige Route in Grau, ausgewähltes Segment in Blau',
    fullRouteGray: 'Vollständige Route (grau)',
    selectedBlue: 'Ausgewähltes Segment (blau)',
    openFullscreen: 'Vollbild öffnen',
    closeFullscreen: 'Vollbild schließen',
    startMarker: 'Start',
    endMarker: 'Ende',

    generate2Segments: '2 Segmente Generieren',
    generate3Segments: '3 Segmente Generieren',

    allSegmentsTitle: 'Alle Segmente',
    allSegmentsDescription: 'Klicken Sie auf ein Segment zum Herunterladen',
    segment: 'Segment',
    download: 'Herunterladen',

    segmentsGenerated: 'Segmente generiert!',
    downloaded: 'heruntergeladen!',
    noRouteData: 'Keine Routendaten verfügbar',
    error: 'Ein Fehler ist aufgetreten',

    howItWorksTitle: 'Wie funktioniert es?',
    howItWorksStep1: 'Laden Sie Ihre GPX-Datei von Ihrem GPS-Gerät, Komoot, Strava oder einer anderen App hoch.',
    howItWorksStep2: 'Die Route wird automatisch analysiert und auf der Karte angezeigt.',
    howItWorksStep3: 'Verwenden Sie die Schieberegler, um Ihr Segment zu wählen - sehen Sie es sofort auf der Karte!',
    howItWorksStep4: 'Klicken Sie auf "Segmente Generieren", um mehrere Teile zu erstellen.',
    howItWorksStep5: 'Klicken Sie auf ein Segment, um es als GPX-Datei herunterzuladen.',

    languageName: 'Deutsch',
  },
  no: {
    title: 'Forkort Rute',
    subtitle: 'Lag en forkortet versjon av din GPX-rute',

    step1Title: 'Trinn 1: Last Inn Rute',
    uploadPrompt: 'Klikk for å velge GPX-fil',

    previewTitle: 'Ruteforhåndsvisning',
    routeName: 'Rutenavn:',
    totalDistance: 'Total avstand:',
    totalPoints: 'Totalt antall punkter:',
    maxSelection: 'Maks. valg:',

    step2Title: 'Trinn 2: Velg Segment',
    step2Description: 'Bruk glidebrytere for å velge segment - kartet oppdateres umiddelbart',
    startFromLabel: 'Start fra (KM)',
    distanceLabel: 'Avstand (KM)',
    selectedSegment: 'Valgt Segment:',
    points: 'GPS-punkter',

    mapTitle: 'Rutekart',
    mapDescription: 'Full rute i grått, valgt segment i blått',
    fullRouteGray: 'Full rute (grå)',
    selectedBlue: 'Valgt segment (blå)',
    openFullscreen: 'Åpne fullskjerm',
    closeFullscreen: 'Lukk fullskjerm',
    startMarker: 'Start',
    endMarker: 'Slutt',

    generate2Segments: 'Generer 2 Segmenter',
    generate3Segments: 'Generer 3 Segmenter',

    allSegmentsTitle: 'Alle Segmenter',
    allSegmentsDescription: 'Klikk på et segment for å laste ned',
    segment: 'Segment',
    download: 'Last Ned',

    segmentsGenerated: 'segmenter generert!',
    downloaded: 'lastet ned!',
    noRouteData: 'Ingen rutedata tilgjengelig',
    error: 'En feil oppstod',

    howItWorksTitle: 'Hvordan fungerer det?',
    howItWorksStep1: 'Last opp din GPX-fil fra GPS-enheten, Komoot, Strava eller annen app.',
    howItWorksStep2: 'Ruten analyseres automatisk og vises på kartet.',
    howItWorksStep3: 'Bruk glidebrytere for å velge ditt segment - se det umiddelbart på kartet!',
    howItWorksStep4: 'Klikk på "Generer Segmenter" for å lage flere deler.',
    howItWorksStep5: 'Klikk på et segment for å laste det ned som en GPX-fil.',

    languageName: 'Norsk',
  },
  pt: {
    title: 'Encurtar Rota',
    subtitle: 'Crie uma versão encurtada da sua rota GPX',

    step1Title: 'Passo 1: Carregar Rota',
    uploadPrompt: 'Clique para escolher arquivo GPX',

    previewTitle: 'Pré-visualização da Rota',
    routeName: 'Nome da rota:',
    totalDistance: 'Distância total:',
    totalPoints: 'Pontos totais:',
    maxSelection: 'Seleção máx:',

    step2Title: 'Passo 2: Selecionar Segmento',
    step2Description: 'Use os controles deslizantes para escolher seu segmento - o mapa atualiza imediatamente',
    startFromLabel: 'Começar de (KM)',
    distanceLabel: 'Distância (KM)',
    selectedSegment: 'Segmento Selecionado:',
    points: 'pontos GPS',

    mapTitle: 'Mapa da Rota',
    mapDescription: 'Rota completa em cinza, segmento selecionado em azul',
    fullRouteGray: 'Rota completa (cinza)',
    selectedBlue: 'Segmento selecionado (azul)',
    openFullscreen: 'Abrir tela cheia',
    closeFullscreen: 'Fechar tela cheia',
    startMarker: 'Início',
    endMarker: 'Fim',

    generate2Segments: 'Gerar 2 Segmentos',
    generate3Segments: 'Gerar 3 Segmentos',

    allSegmentsTitle: 'Todos os Segmentos',
    allSegmentsDescription: 'Clique em um segmento para baixar',
    segment: 'Segmento',
    download: 'Baixar',

    segmentsGenerated: 'segmentos gerados!',
    downloaded: 'baixado!',
    noRouteData: 'Nenhum dado de rota disponível',
    error: 'Ocorreu um erro',

    howItWorksTitle: 'Como funciona?',
    howItWorksStep1: 'Carregue seu arquivo GPX do seu dispositivo GPS, Komoot, Strava ou outro aplicativo.',
    howItWorksStep2: 'A rota é automaticamente analisada e exibida no mapa.',
    howItWorksStep3: 'Use os controles deslizantes para escolher seu segmento - veja-o imediatamente no mapa!',
    howItWorksStep4: 'Clique em "Gerar Segmentos" para criar várias partes.',
    howItWorksStep5: 'Clique em um segmento para baixá-lo como arquivo GPX.',

    languageName: 'Português',
  },
}

export function getTranslations(lang: Language): Translations {
  return translations[lang]
}

export const LANGUAGES: { code: Language; name: string; flag: string }[] = [
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
]
