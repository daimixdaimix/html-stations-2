# Copilot Instructions for HTML Stations 2

## Project Overview
TechTrain HTML/CSS/JavaScript 学習プロジェクト - Station形式で段階的にWeb開発スキルを習得

## Project Structure & Conventions

### File Naming Pattern
- HTML: `stationX.html` (X = station number)
- CSS: `assets/css/stationX.css` 
- JS: `scripts/stationX.js`
- Tests: `playwright/stationXX.spec.ts` (zero-padded station number)

### Architecture
```
src/                    # Main source files
├── stationX.html      # Exercise HTML files
├── assets/css/        # Station-specific CSS
├── assets/image/      # Static images
└── scripts/           # JavaScript files
playwright/            # End-to-end tests
├── stationXX.spec.ts  # Test files (zero-padded)
└── utils/             # Test utilities
```

## Development Workflow

### Running the Development Server
```bash
yarn serve  # Starts lite-server on http://127.0.0.1:3000
```

### Running Tests
```bash
npx playwright test                    # Run all tests
npx playwright test stationXX.spec.ts # Run specific station
```

## Key Patterns

### HTML Structure
- Use semantic HTML5 elements
- Include proper meta tags: charset UTF-8, viewport, IE compatibility
- Link CSS: `<link rel="stylesheet" href="./assets/css/stationX.css">`
- Link JS: `<script src="./scripts/stationX.js"></script>`

### CSS Approach
- Station-specific CSS files with @charset "utf-8"
- Use specific IDs/classes for styling (e.g., `#red`, `#blue`, `#green`)
- Common properties: width/height 300px for demo elements

### JavaScript Conventions
- Function names match HTML onclick handlers (watch for naming differences)
- Use alert() for user interactions in exercises
- Example: `function handleAlert() { alert("動いたよ！"); }`

### Test Patterns
- Tests use `page.goto('/stationX.html')` in beforeEach
- CSS testing: `expect(element).toHaveCSS('property', 'value')`
- Color comparison: Use `compareColor()` utility from `playwright/utils/compareColor.ts`
- Element validation: `expect(page).toHaveSelector(selector)`

## Critical Integration Points

### Playwright Configuration
- Base URL: http://127.0.0.1:3000
- Uses lite-server via `yarn serve` as webServer
- Timeout: 5000ms
- Tests expect files to be served from `src/` directory

### Color Testing
- Use `compareColor(actualColor, expectedColor)` for cross-browser color validation
- Supports hex (#ff0000), rgb(), rgba(), and shorthand hex formats
- Import: `import { compareColor } from './utils/compareColor'`

## When Adding New Stations
1. Create `src/stationX.html` with proper boilerplate
2. Add CSS file at `src/assets/css/stationX.css` if needed
3. Add JS file at `src/scripts/stationX.js` if needed  
4. Create test file `playwright/stationXX.spec.ts` (zero-padded number)
5. Use consistent beforeEach pattern: `await page.goto('/stationX.html')`

## Common Issues
- Ensure function names in JS match HTML onclick attributes exactly
- CSS files must start with `@charset "utf-8";`
- Test station numbers are zero-padded (station01.spec.ts, not station1.spec.ts)
- All file paths in HTML are relative to `src/` directory