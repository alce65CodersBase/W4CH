import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import { items } from './mocks';

// Used with Mock de las Lazy routes
// const testLazyRoute = (index: number) => {
//   const title = new RegExp(mockPageTitles[index], 'i'); // Antes /Test Home/i;
//   const lazyElement = screen.getByText(title);
//   expect(lazyElement).toBeInTheDocument();
// };

// Mock de las Lazy routes
// jest.mock('../../pages/home/home', () => <p>{mockPageTitles[0]}</p>);
// const FavoritesMock = () => <p>{mockPageTitles[1]}</p>;
// jest.mock('../../pages/favorites/favorites', () => FavoritesMock);
// const DetailsMock = () => <p>{mockPageTitles[2]}</p>;
// jest.mock('../../pages/details/details', () => DetailsMock);

describe('Given AppRoutes Lazy component', () => {
  let lazyPaths: Array<string>;

  beforeEach(() => {
    lazyPaths = items.map((item) => item.path);
  });
  describe(`When we render the component
                And the lazy route is home`, () => {
    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={lazyPaths} initialIndex={0}>
            <AppRoutes items={items} />
          </Router>
        );
      });
    });
    test('Then it should display the HomePage', () => {
      // For lazy mocks testLazyRoute(0);

      const title = /Lista de Pokemons/i;
      const lazyElement = screen.getByText(title);
      expect(lazyElement).toBeInTheDocument();
    });
  });

  describe(`When we render the component
                And the lazy route is Favorites`, () => {
    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={lazyPaths} initialIndex={1}>
            <AppRoutes items={items} />
          </Router>
        );
      });
    });
    test('Then it should display the FavoritesPage', () => {
      // For lazy mocks testLazyRoute(1);

      const title = /Favoritos/i;
      const lazyElement = screen.getByText(title);
      expect(lazyElement).toBeInTheDocument();
    });
  });
  describe(`When we render the component
                And the lazy route is Details`, () => {
    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={lazyPaths} initialIndex={2}>
            <AppRoutes items={items} />
          </Router>
        );
      });
    });
    test('Then it should display the DetailsPage', () => {
      // For lazy mocks testLazyRoute(1);

      const title = /Detalles/i;
      const lazyElement = screen.getByText(title);
      expect(lazyElement).toBeInTheDocument();
    });
  });
});
