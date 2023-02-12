/* eslint-disable no-unused-vars */
import { act, render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MOCK_SERIES } from '../mock/series';
import { getSeries } from '../services/mock.repo';
import { useSeries } from './use.series';
import { consoleDebug } from '../../lib/debug';

jest.mock('../../lib/debug');
jest.mock('../services/mock.repo');

const mockSeries = [MOCK_SERIES[0], MOCK_SERIES[1]];
mockSeries[0].score = 0;
mockSeries[1].score = 5;
const Test = () => {
  const {
    series,
    pendingSeries,
    watchedSeries,
    setSeries,
    deleteSerie,
    updateScore,
  } = useSeries();
  return (
    <>
      <h2>Test component</h2>
      <ul>
        {series.map((item) => (
          <li key={item.id}>
            {item.name} - {item.score}
          </li>
        ))}
      </ul>
      <button onClick={() => setSeries(pendingSeries())}>Filter pending</button>
      <button onClick={() => setSeries(watchedSeries())}>Filter watched</button>
      <button onClick={() => deleteSerie(series[0])}>Delete</button>
      <button onClick={() => updateScore(series[0], 5)}>Update</button>
    </>
  );
};

(getSeries as jest.Mock).mockResolvedValue(mockSeries);

describe('Given "useSeries" hook and a test component', () => {
  let elements: HTMLElement[];
  beforeEach(async () => {
    await act(async () => {
      render(<Test></Test>);
    });
    elements = [
      ...(await screen.findAllByRole('listitem')),
      ...screen.getAllByRole('button'),
    ];
  });

  describe('When the component is rendered', () => {
    test('Then getSeries should be called', () => {
      expect(getSeries).toHaveBeenCalled();
    });
    test('Then the items in the array should be render in the document', async () => {
      const text = `${mockSeries[0].name} - ${mockSeries[0].score}`;
      const element = await screen.findByText(text);
      expect(element).toBeInTheDocument();
    });
  });

  describe('When the button score is clicked', () => {
    test('Then new score should be in the document', async () => {
      await act(async () => {
        fireEvent.click(elements[5]); // Update
      });
      expect(consoleDebug).toHaveBeenCalled();
      const text = `${mockSeries[0].name} - 5`;
      const element = await screen.findByText(text);
      expect(element).toBeInTheDocument();
    });
  });

  describe('When the button delete is clicked', () => {
    test('Then new score should be in the document', async () => {
      const text = `${mockSeries[0].name} - 0`;
      const element = await screen.findByText(text);
      expect(element).toBeInTheDocument();
      await act(async () => {
        fireEvent.click(elements[4]); // Delete
      });
      const newElement = screen.queryByText(text);
      expect(newElement).toBe(null);
    });
  });

  describe('When the button for series pending is clicked', () => {
    test('A list of series pending should be in the document', async () => {
      await act(async () => {
        fireEvent.click(elements[2]); // Filter pending
      });
      const text = `${mockSeries[0].name} - 0`;
      const element = await screen.findByText(text);
      expect(element).toBeInTheDocument();
    });
  });

  describe('When the button for series watched is clicked', () => {
    test('A list of series watched should be in the document', async () => {
      await act(async () => {
        fireEvent.click(elements[3]); // Filter watched
      });
      const text = `${mockSeries[1].name} - 5`;
      const element = await screen.findByText(text);
      expect(element).toBeInTheDocument();
    });
  });
});
