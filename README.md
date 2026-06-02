# Dialer

A simple phone dialer app built with React Native.

## Features

- **Numeric keypad** with digits 0–9, `*`, and `#`
- **Call button** — initiates a call via `react-native-immediate-phone-call` on press-out
- **Delete button** — deletes the last digit on tap; clears the whole number on long press
- **Number formatting** — automatically formats Slovak-style phone numbers (e.g. `0912 345 678` or `02 345 6789`)
- **Long-press `0`** — inserts `+` when the input is empty (for country codes)
- **Visual states** — the call button switches between green (ready) and red (active) icons

## Getting Started

### Prerequisites

- Node.js
- React Native CLI
- Android Studio / Xcode (depending on target platform)

### Install

```bash
cd dialer
npm install
```

### Run

```bash
# iOS
npx react-native run-ios

# Android
npx react-native run-android
```

### Tests

```bash
npm test
```

### Lint

```bash
npm run lint
```

## Project Structure

```
dialer/
├── App.js             # Main application component
├── index.js           # App entry point
├── pictures/          # Image assets (receiver, delete icons)
├── __tests__/         # Jest tests
├── android/           # Android native project
├── ios/               # iOS native project
├── package.json
└── ...
```

## Dependencies

- [react-native](https://reactnative.dev/)
- [react-native-immediate-phone-call](https://github.com/facebook/react-native) — used to place phone calls directly
