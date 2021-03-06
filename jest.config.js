const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  verbose: true,
  globals: {
    "ts-jest": {
      tsconfig: {
        target: "es5",
      },
    },
  },
  automock: false,
  clearMocks: true,
  coverageDirectory: "coverage",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }),
  },
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "\\.cache"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
