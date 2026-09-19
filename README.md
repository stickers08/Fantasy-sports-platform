# Fantasy Hockey Intelligence

A cross-platform Expo/React Native prototype for an AI-powered fantasy hockey companion. The current build runs entirely on local demo data so it is useful without Yahoo credentials or a paid AI service.

## Run locally

Requirements: Node.js 18+ and either Expo Go on a phone or an iOS/Android emulator.

```bash
npm install
npx expo start
```

Then scan the QR code with Expo Go, or press `i` for iOS and `a` for Android. This is one shared codebase for both platforms.

## Prototype scope

- Dashboard with team pulse, next matchup, quick actions and updates
- Demo fantasy hockey league with roster and standings
- Player analysis powered by clearly labeled local mock analysis
- Trade analyzer with two selectable sides and local mock recommendations
- Local sample news feed

## Architecture notes

`src/data/demoData.ts` is the replaceable demo data boundary. A future Yahoo adapter can implement the same data shapes and be connected to a service layer without changing the screens. AI copy is currently generated locally in `src/services/mockAnalysis.ts`.
