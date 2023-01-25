import { useState, useEffect } from 'react';
import { Header } from '../../components/header/header';
import { List } from '../../components/list/list';
import { Series } from '../../models/series';
import { getSeries } from '../../services/mock.repo';
import series__ from './series.module.css';
import { consoleDebug } from '../../../CH2.Form/tools/debug';

export function SeriesPage() {
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
