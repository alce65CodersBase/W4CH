import { MOCK_POKE } from '../../__mocks__/mock';
import { createPokeRepo } from './poke.repo';

describe('Given the api-services', () => {
  describe('When it will be executed ', () => {
    // Mock global fetch
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve([{ test: 'Test 1' }, { test: 'Test 1' }]),
    });

    const mockURL = '';
    let service: ReturnType<typeof createPokeRepo>;
    beforeEach(() => {
      service = createPokeRepo();
    });
    test('Then it should be created', () => {
      expect(service).toBeDefined();
    });
    test('Its functions should be used', () => {
      service.fetchPoke(mockURL);
      expect(global.fetch).toHaveBeenCalled();
      service.queryPoke(mockURL);
      expect(global.fetch).toHaveBeenCalled();
      service.addPoke(mockURL, MOCK_POKE);
      expect(global.fetch).toHaveBeenCalled();
      service.removePoke(mockURL);
      expect(global.fetch).toHaveBeenCalled();
    });
  });
});
