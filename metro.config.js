// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// 1) Add support for Firebase's .cjs modules:
config.resolver.sourceExts = config.resolver.sourceExts || [];
if (!config.resolver.sourceExts.includes('cjs')) {
  config.resolver.sourceExts.push('cjs');
}

// 2) Work around the stricter "exports" field in package.json
//    so Metro can still bundle Firebase Auth correctly:
config.resolver.unstable_enablePackageExports = false;

module.exports = config;