# Trade Lifecycle Command Center

An institutional trading operations dashboard built with Next.js 15, TypeScript, and Tailwind CSS. The application is designed to resemble modern command-center tooling used across Bloomberg-style trading operations, Aladdin service teams, Fidessa support desks, and investment bank middle office environments.

## Features

- Executive Dashboard with KPI cards, STP trends, asset-class volume charts, and lifecycle workflow visualization
- Trade Monitor with asset-class filters and sortable trade blotter
- Exceptions Dashboard with operational break management and aging metrics
- FIX Connectivity Monitor for session health, message throughput, and reject tracking
- Settlement Monitor for affirmation rates, custody oversight, and failed settlement control
- Client 360 for service-quality and exposure monitoring across institutional relationships
- Dark mode enabled by default with responsive layouts for desktop and mobile
- Realistic mock institutional data for Equities, Options, Futures, FX, Fixed Income, and ETFs
- Unit tests with Vitest and Testing Library

## Tech Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Recharts
- next-themes
- Vitest + Testing Library

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` starts the local application
- `npm run build` creates the production build
- `npm run start` serves the production build
- `npm run test` runs the unit test suite

## Project Structure

```text
app/                         App Router pages and layouts
components/                  Shared dashboard UI, charts, layout, and tables
lib/                         Mock data, data models, and formatting utilities
tests/                       Unit tests
```

## Production Notes

- The dashboard uses deterministic mock datasets so it is deployment-safe without backend dependencies
- Styling is optimized for dark, high-density operational workflows with responsive behavior down to mobile
- Metadata, strict TypeScript, and clean component boundaries are included for production readiness

## Testing

Run the test suite:

```bash
npm run test
```

Build for production:

```bash
npm run build
```
