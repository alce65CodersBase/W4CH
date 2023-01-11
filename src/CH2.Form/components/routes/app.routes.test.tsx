/* eslint-disable capitalized-comments */
import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import { mockPageTitles, items } from './mocks';

const testLazyRoute = (index: number) => {
  const title = new RegExp(mockPageTitles[index], 'i');
  const lazyElement = screen.getByText(title);
  expect(lazyElement).toBeInTheDocument();
};

// For more precision: mock the components imported in the lazy routes
// jest.mock('../../pages/step1/step1', () => {
//   const Step1 = () => <p>{mockPageTitles[0]}</p>;
//   return Step1;
// });
// jest.mock('../../pages/step2/step2', () => {
//   const Step2 = () => <p>{mockPageTitles[1]}</p>;
//   return Step2;
// });
// jest.mock('../../pages/step3/step3', () => {
//   const Step3 = () => <p>{mockPageTitles[2]}</p>;
//   return Step3;
// });
// jest.mock('../../pages/step4/step4', () => {
//   const Step4 = () => <p>{mockPageTitles[3]}</p>;
//   return Step4;
// });

describe('Given AppRoutes Lazy component, if the user is NOT logged', () => {
  let lazyPaths: Array<string>;

  beforeEach(() => {
    lazyPaths = items.map((item) => item.path);
    // Value [ '/step1', '/step2', '/step3', '/step4' ]
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
      testLazyRoute(0);
    });
  });
  describe(`When we render the component
                And the lazy route is todo`, () => {
    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={lazyPaths} initialIndex={1}>
            <AppRoutes items={items} />
          </Router>
        );
      });
    });
    test('Then it should display the TodoPage', () => {
      testLazyRoute(1);
    });
  });
  describe(`When we render the component
                And the lazy route is notes`, () => {
    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={lazyPaths} initialIndex={2}>
            <AppRoutes items={items} />
          </Router>
        );
      });
    });
    test('Then it should display the NotesPage', () => {
      testLazyRoute(2);
    });
  });
  describe(`When we render the component
                And the lazy route is user / login`, () => {
    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={lazyPaths} initialIndex={3}>
            <AppRoutes items={items} />
          </Router>
        );
      });
    });
    test('Then it should display the AboutPage', () => {
      testLazyRoute(3);
    });
  });
});
