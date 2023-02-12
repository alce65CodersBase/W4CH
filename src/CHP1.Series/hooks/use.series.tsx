import { useEffect, useState } from 'react';
import { Series } from '../models/series';
import { getSeries } from '../services/mock.repo';
import { consoleDebug } from '../../lib/debug';

export const useSeries = () => {
  const initialSeries: Array<Series> = [];
  const [series, setSeries] = useState(initialSeries);

  const pendingSeries = () => series.filter((item) => item.score === 0);
  const watchedSeries = () => series.filter((item) => item.score > 0);

  const loadSeries = async () => {
    const series: Array<Series> = await getSeries();
    setSeries(series);
  };

  const updateScore = (serie: Series, newScore: number) => {
    consoleDebug('click ' + newScore);
    setSeries(
      series.map((item) =>
        item.id === serie.id ? { ...item, score: newScore } : item
      )
    );
  };

  const deleteSerie = (serie: Series) => {
    setSeries(series.filter((item) => item.id !== serie.id));
  };

  useEffect(() => {
    loadSeries();
  }, []);

  return {
    series,
    pendingSeries,
    watchedSeries,
    setSeries,
    updateScore,
    deleteSerie,
  };
};
