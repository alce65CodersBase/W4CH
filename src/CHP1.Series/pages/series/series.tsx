import { Header } from '../../components/header/header';
import { List } from '../../components/list/list';
import series__ from './series.module.css';

export function SeriesPage() {
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
