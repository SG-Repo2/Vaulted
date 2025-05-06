// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

// Firebase ≥ 11.7 uses ESM modules and proper React Native entry points
// so we can use the default config
const config = getDefaultConfig(__dirname);

module.exports = config;