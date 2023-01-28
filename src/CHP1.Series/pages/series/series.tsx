import { useEffect, useContext } from 'react';
import { Header } from '../../components/header/header';
import { List } from '../../components/list/list';

import { getSeries } from '../../services/mock.repo';
import series__ from './series.module.css';
import { consoleDebug } from '../../../CH2.Form/tools/debug';
import { Series } from '../../models/series';
import { AppContext } from '../../context/app.context';

export function SeriesPage() {
  const { series, setSeries, setPendingSeries, setWatchedSeries } =
    useContext(AppContext);

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
          <List filter="series-pending"></List>
          <List filter="series-watched"></List>
        </section>
      </main>
    </div>
  );
}
