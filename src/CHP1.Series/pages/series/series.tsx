import { useEffect } from 'react';
import { Header } from '../../components/header/header';
import { List } from '../../components/list/list';

import { getSeries } from '../../services/mock.repo';
import series__ from './series.module.css';
import { consoleDebug } from '../../../CH2.Form/tools/debug';
import { useSeries } from '../../hooks/use.series';
import { Series } from '../../models/series';

export function SeriesPage() {
  const {
    series,
    pendingSeries,
    watchedSeries,
    setSeries,
    setPendingSeries,
    setWatchedSeries,
    deleteSerie,
    updateScore,
  } = useSeries();

  useEffect(() => {
    const series: Array<Series> = getSeries();
    setSeries(series);
  }, []);

  useEffect(() => {
    consoleDebug(series);
    setPendingSeries(series.filter((item) => item.score === 0));
    setWatchedSeries(series.filter((item) => item.score > 0));
  }, [series]);

  return (
    <div className={series__.container}>
      <Header></Header>
      <main className="main">
        <section className="list-slot">
          <h2 className={series__.sectionTitle}>Series list</h2>
          <List
            filter="series-pending"
            series={pendingSeries}
            deleteSerie={deleteSerie}
            updateScore={updateScore}
          ></List>
          <List
            filter="series-watched"
            series={watchedSeries}
            deleteSerie={deleteSerie}
            updateScore={updateScore}
          ></List>
        </section>
      </main>
    </div>
  );
}
