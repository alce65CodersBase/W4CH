import { act, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import { mockPageTitles, items } from './mocks';

const testLazyRoute = (index: number) => {
  const title = new RegExp(mockPageTitles[index], 'i'); // Antes /Test Home/i;
  const lazyElement = screen.getByText(title);
  expect(lazyElement).toBeInTheDocument();
};

function HomeMock() {
  return <p>{mockPageTitles[0]}</p>;
}

jest.mock('../../pages/home/home', () => HomeMock);
// Const FavoritesMock = () => <p>{mockPageTitles[1]}</p>;
// jest.mock('../../pages/favorites/favorites', () => FavoritesMock);
// const DetailsMock = () => <p>{mockPageTitles[2]}</p>;
// jest.mock('../../pages/details/details', () => DetailsMock);

describe('Given AppRoutes Lazy component', () => {
  let lazyPaths: Array<string>;

  beforeEach(() => {
    lazyPaths = items.map((item) => item.path);
  });
  describe.skip(`When we render the component
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
      testLazyRoute(0);
    });
  });

  describe.skip(`When we render the component
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
      testLazyRoute(1);
    });
  });
  describe.skip(`When we render the component
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
      testLazyRoute(2);
    });
  });
});
