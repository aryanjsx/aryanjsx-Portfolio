const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
};

module.exports = createJestConfig(customJestConfig);
