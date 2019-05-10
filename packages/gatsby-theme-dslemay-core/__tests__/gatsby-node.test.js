const mockFs = require('fs');

const mockMkdirp = require('mkdirp');

const { onPreBootstrap } = require('../gatsby-node');

jest.mock('mkdirp');

jest.mock('path', () => ({
  join: (...args) => args.join('/'),
}));

jest.mock('fs', () => ({
  existsSync: jest.fn(),
}));

const mockConfig = {
  reporter: {
    log: () => {},
  },
  store: {
    getState: () => ({
      program: {
        directory: 'test',
      },
    }),
  },
};

afterEach(mockFs.existsSync.mockReset);

describe('onPreBootstrap', () => {
  it('does not create directories if the directory already exists', () => {
    mockFs.existsSync.mockImplementation(() => true);

    onPreBootstrap(mockConfig);
    expect(mockMkdirp.sync).not.toBeCalled();
  });

  it('creates directories if the directory does not exist', () => {
    onPreBootstrap(mockConfig);
    mockFs.existsSync.mockImplementation(() => false);
    expect(mockMkdirp.sync).toBeCalledTimes(2);
  });
});
