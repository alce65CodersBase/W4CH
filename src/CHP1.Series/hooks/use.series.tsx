import { useState } from 'react';
import { Series } from '../models/series';

export const useSeries = () => {
  const initialSeries: Array<Series> = [];
  const [series, setSeries] = useState(initialSeries);

  const [pendingSeries, setPendingSeries] = useState(initialSeries);
  const [watchedSeries, setWatchedSeries] = useState(initialSeries);

  const updateScore = (serie: Series, newScore: number) => {
    console.log('click', newScore);

    setSeries(
      series.map((item) =>
        item.id === serie.id ? { ...item, score: newScore } : item
      )
    );
  };

  const deleteSerie = (serie: Series) => {
    setSeries(series.filter((item) => item.id !== serie.id));
  };

  return {
    series,
    pendingSeries,
    watchedSeries,
    setSeries,
    setPendingSeries,
    setWatchedSeries,
    updateScore,
    deleteSerie,
  };
};
