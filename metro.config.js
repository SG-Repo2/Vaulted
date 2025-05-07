// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Allow resolving Firebase’s CJS sources
defaultConfig.resolver.sourceExts.push('cjs');

// Disable Node-style package exports resolution to avoid dual‐package issues
defaultConfig.resolver.unstable_enablePackageExports = false;

module.exports = defaultConfig;