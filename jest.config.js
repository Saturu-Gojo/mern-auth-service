import { createDefaultPreset } from "ts-jest";

/** @type {import("jest").Config} **/
export default {
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: {
          module: "CommonJS",
          esModuleInterop: true,
        },
      },
    ],
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};
