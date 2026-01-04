# GPX Route Cutter

A modern web application for shortening GPS routes exported from Komoot or other GPS platforms.

## Overview

GPX Route Cutter allows you to take long GPS routes (like a 2000km tour) and create shorter versions by cutting them to a specific distance from the start point. Perfect for planning day trips or testing portions of longer routes.

## Features

- **Easy Upload**: Drag-and-drop or click to upload GPX files
- **Precise Distance Calculation**: Uses the Haversine formula for accurate GPS coordinate distance calculation
- **Customizable Length**: Specify exactly how many kilometers you want (e.g., 40km from the start)
- **Clean GPX Output**: Generates properly formatted GPX files compatible with Komoot and other GPS apps
- **Modern UI**: Built with React and shadcn/ui for a beautiful, responsive interface
- **Mobile-Friendly**: Optimized for both desktop and mobile use

## How It Works

1. Export a GPX file from Komoot (or any GPS platform)
2. Upload the file to the app
3. Specify your desired distance in kilometers
4. Click "Generate Route"
5. Download your shortened GPX file

The app processes your route by:
- Parsing the GPX XML structure
- Calculating cumulative distance between track points using GPS coordinates
- Cutting the route when the target distance is reached
- Generating a new GPX file with the shortened track

## Technology Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **shadcn/ui** - Modern component library
- **Tailwind CSS** - Utility-first styling
- **Lucide Icons** - Beautiful icon set

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

The app runs entirely in your browser - no server uploads, your GPX files stay private on your device.

## License

MIT
