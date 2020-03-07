module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/assets',
    '!src/store/*.{js,jsx}',
    '!src/utils/*.{js,jsx}',
  ],
};
