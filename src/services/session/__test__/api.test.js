// @own
import * as api from '../api';

jest.mock('services/session/api', () => ({
  getUser: jest.fn(),
  getAvailableDevices: jest.fn(),
  putCurrentDevice: jest.fn(),
}));

afterEach(() => {
  jest.resetAllMocks();
});

describe('session api', () => {
  it('getUser - Success', async () => {
    api.getUser.mockImplementationOnce(
      () => Promise.resolve({ name: 'user' }),
    );

    await expect(
      api.getUser(),
    ).resolves.toEqual({ name: 'user' });
  });

  it('getUser - Fail', async () => {
    api.getUser.mockImplementationOnce(
      () => Promise.reject(new Error('Error')),
    );

    await expect(
      api.getUser(),
    ).rejects.toThrow('Error');
  });

  it('getAvailableDevices - Success', async () => {
    api.getAvailableDevices.mockImplementationOnce(
      () => Promise.resolve([{ type: 'pc' }, { type: 'notebook' }]),
    );

    await expect(
      api.getAvailableDevices(),
    ).resolves.toEqual([{ type: 'pc' }, { type: 'notebook' }]);
  });

  it('getAvailableDevices - Fail', async () => {
    api.getAvailableDevices.mockImplementationOnce(
      () => Promise.reject(new Error('Error')),
    );

    await expect(
      api.getAvailableDevices(),
    ).rejects.toThrow('Error');
  });

  it('putCurrentDevice - Success', async () => {
    api.putCurrentDevice.mockImplementationOnce(
      () => Promise.resolve(),
    );

    await expect(
      api.putCurrentDevice(),
    ).resolves.toEqual();
  });

  it('putCurrentDevice - Fail', async () => {
    api.putCurrentDevice.mockImplementationOnce(
      () => Promise.reject(new Error('Error')),
    );

    await expect(
      api.putCurrentDevice(),
    ).rejects.toThrow('Error');
  });
});
