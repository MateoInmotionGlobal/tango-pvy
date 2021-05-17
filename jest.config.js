module.exports = {
    testEnvironment: 'node',
    roots: [ '<rootDir>/src' ],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testRegex: './src/.*\\.(test|spec)?\\.(ts|ts)$',
    moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx', 'json', 'node' ],
};
