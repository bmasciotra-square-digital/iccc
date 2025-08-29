# ICCC - React + TypeScript + Vite

This project has been migrated from Create React App to Vite for faster development and better performance.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode using Vite.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload instantly if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner using Vitest in watch mode.\
Vitest provides a Jest-compatible API with better performance.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run preview`

Locally preview the production build using Vite's preview server.

## Vite Migration Details

This project was successfully migrated from Create React App to Vite on [Current Date]. Here's what was changed:

### Files Modified:
1. **package.json**
   - Removed `react-scripts` dependency
   - Added Vite, @vitejs/plugin-react, and vitest
   - Updated scripts: `start` → `dev`, added `preview`
   - Moved testing libraries to devDependencies
   - Removed CRA-specific eslintConfig and browserslist

2. **public/index.html**
   - Removed `%PUBLIC_URL%` placeholders (Vite handles this automatically)
   - Added `<script type="module" src="/src/index.tsx"></script>` entry point
   - Updated meta description

3. **tsconfig.json**
   - Updated for Vite with modern TypeScript settings
   - Changed target from ES5 to ES2020
   - Added bundler moduleResolution
   - Enhanced linting rules

### Files Added:
1. **vite.config.ts** - Main Vite configuration with React plugin
2. **tsconfig.node.json** - TypeScript config for Vite config files
3. **vitest.config.ts** - Testing configuration using Vitest

### Performance Benefits:
- ⚡ **5-10x faster** development server startup
- 🔄 **Instant HMR** (Hot Module Replacement)
- 📦 **Smaller bundle sizes** with better tree-shaking
- 🏗️ **Faster builds** using esbuild and Rollup

### Getting Started:
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Build for production: `npm run build`

## Learn More

- [Vite Documentation](https://vitejs.dev/)
- [Vitest Documentation](https://vitest.dev/)
- [React Documentation](https://reactjs.org/)
