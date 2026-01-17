# GPX Route Cutter

A modern web application for cutting and extracting segments from GPX route files.

## Overview

GPX Route Cutter allows you to take long GPS routes and create shorter versions by extracting specific segments. Perfect for planning day trips or splitting long-distance routes into manageable sections.

## Why This Tool Exists

**Technical reason**: Long routes can be created on platforms like Komoot, but not all GPS trackers can handle large files. Komoot's day-by-day feature splits the full route but cannot be reset afterward. Extracting a single segment from a long GPX route is not natively possible - this tool solves that problem.

**Personal story**: This tool was created for a 10,000+ km journey in memory of my brother Koenraad (aka Koene), marking 10 years since his passing. My brother's ashes were scattered at sea, which is why the route follows the entire European west coast: Oostende → Faro → North Cape → Oostende. That's 100 days × 100 km/day.

The journey starts on **May 1st, 2026** at the pier in Ostend and ends on **August 23rd, 2026** at the same pier. 10 years after my brother's passing.

This journey is also in support of **Kom op tegen Kanker** (Stand up to Cancer):
- 🎗️ **Donate**: [10k voor K](https://www.komoptegenkanker.be/acties/10k-voor-k)
- 🗺️ **Route**: [Komoot Collection](https://www.komoot.com/collection/3148111/-tenkfork)
- 📸 **Follow**: [@steven_verhoest on Instagram](https://www.instagram.com/steven_verhoest?igsh=eHY0Y3BsOXd3dTdv&utm_source=qr)

## Features

- **Easy Upload**: Drag-and-drop or click to upload any GPX file
- **Flexible Segmentation**: Extract segments from any point in your route (start at 0km, 50km, 100km, etc.)
- **Multiple Segments**: Generate multiple route segments at once (e.g., 5 × 100km segments)
- **Interactive Map**: Visualize your full route and selected segments with Leaflet mapping
- **Fullscreen Map**: View your route in fullscreen mode with zoom controls
- **Precise Distance Calculation**: Uses the Haversine formula for accurate GPS coordinate distance calculation
- **Multi-Language Support**: Available in 7 languages (🇳🇱 Dutch, 🇬🇧 English, 🇫🇷 French, 🇪🇸 Spanish, 🇩🇪 German, 🇳🇴 Norwegian, 🇵🇹 Portuguese)
- **Clean GPX Output**: Generates properly formatted GPX files compatible with all GPS apps and devices
- **Modern UI**: Built with React and shadcn/ui for a beautiful, responsive interface
- **Mobile-Friendly**: Optimized for desktop, tablet, and mobile use
- **Privacy-First**: All processing happens in your browser - your GPX files never leave your device

## How It Works

1. Export a GPX file from any GPS platform (Komoot, Strava, Garmin, etc.)
2. Upload the file to the app
3. Configure your segment:
   - **Start from**: Choose where to start (0km, 50km, 100km, etc.)
   - **Distance**: Specify segment length (e.g., 100km)
   - **Number of segments**: Generate multiple segments at once
4. View your route and selected segment on the interactive map
5. Click "Generate Routes" to create your segment(s)
6. Download individual GPX files or all segments as a ZIP

The app processes your route by:
- Parsing the GPX XML structure
- Calculating cumulative distance between track points using GPS coordinates (Haversine formula)
- Extracting the specified segment(s) from your route
- Generating properly formatted GPX files with accurate metadata
- Visualizing both the full route and selected segments on an interactive map

## Technology Stack

- **React 18** - UI framework with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Lightning-fast build tool and dev server
- **shadcn/ui** - Modern component library with Radix UI primitives
- **Tailwind CSS** - Utility-first styling framework
- **Leaflet** - Interactive maps with react-leaflet
- **Lucide Icons** - Beautiful, consistent icon set
- **JSZip** - Client-side ZIP file generation
- **i18n** - Multi-language support system

### Development

This project was entirely developed using **Claude Code** by Anthropic - an AI-powered development assistant that helped design, implement, and refine every feature of this application.

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Usage

The app runs entirely in your browser - no server uploads, your GPX files stay completely private on your device. All processing happens client-side using JavaScript.

### Supported GPX Files

This tool works with any valid GPX file containing track data:
- Komoot routes
- Strava activities
- Garmin routes
- Any GPS device or platform that exports GPX format

## Contributing

This is an open-source project. Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/vervorm/gpx-cutter/issues) if you want to contribute.

## Support

If this tool helps you with your adventures, consider supporting **Kom op tegen Kanker**:
- 🎗️ [Donate to 10k voor K](https://www.komoptegenkanker.be/acties/10k-voor-k)

## License

MIT - feel free to use this code for your own projects!

---

Built with ❤️ and Claude Code | In memory of Koenraad (Koene)
