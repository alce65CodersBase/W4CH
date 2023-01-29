import { useEffect, useState } from 'react';
import { Series } from '../models/series';
import { consoleDebug } from '../../CH2.Form/tools/debug';
import { getSeries } from '../services/mock.repo';

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

  useEffect(() => {
    const series: Array<Series> = getSeries();
    setSeries(series);
  }, []);

  useEffect(() => {
    consoleDebug(series);
    setPendingSeries(series.filter((item) => item.score === 0));
    setWatchedSeries(series.filter((item) => item.score > 0));
  }, [series]);

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
