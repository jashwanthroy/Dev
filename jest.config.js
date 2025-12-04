export default {
  testEnvironment: "jsdom",   // good for frontend/React
  transform: {
    "^.+\\.js$": "babel-jest",   // Apply babel-jest to JS files
  },
  moduleFileExtensions: ["js"],
};
