import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MOCK_POKE } from '../../__mocks__/mock';
import { PokeItem } from './poke.item';

describe('Given "PokeItem" component', () => {
  describe('When it is rendered', () => {
    render(
      <PokeItem poke={MOCK_POKE} source="any">
        <p>Favorite Icon</p>
      </PokeItem>
    );
    const elements = [
      screen.getByRole('listitem'),
      screen.getByRole('link'),
      ...screen.getAllByRole('img'),
    ];

    // Con each sólo detecta el primero
    // const cases = elements.map((item) => ({
    //   name: item.tagName,
    //   element: item,
    // }));
    // // test.each(cases)(
    //   `Then the elements $name should be in the document`,
    //   ({ element }) => {
    //     expect(element).toBeInstanceOf(HTMLElement);
    //     expect(element).toBeInTheDocument();
    //   }
    // );

    test('Then the elements should be in the document', () => {
      elements.forEach((element) => {
        expect(element).toBeInstanceOf(HTMLElement);
        expect(element).toBeInTheDocument();
      });
    });
  });
});
