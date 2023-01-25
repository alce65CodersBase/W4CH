import { Series } from '../../models/series';
import { getSeries } from '../../services/mock.repo';
import { SeriesCard } from '../serie.card/serie.card';
import list__ from './list.module.css';

type listProps = {
  filter: 'series-watched' | 'series-pending';
  series: Array<Series>;
  deleteSerie: (_serie: Series) => void;
  updateScore?: (_serie: Series, _score: number) => void;
};

export function List({ filter, series, deleteSerie, updateScore }: listProps) {
  const slot = filter + '-cards-slot';
  let title = 'Pending series';
  let stateInfo = `You have ${series.length} series pending to watch`;
  if (filter.includes('watched')) {
    title = 'Watched series';
    stateInfo =
      series.length === getSeries().length
        ? `Congrats! You've watched all your series`
        : '';
  }

  return (
    <section
      className={filter + ' ' + list__.container + ' lista'}
      role="region"
      aria-label={filter}
    >
      <h3 className={list__.subsectionTitle}>{title}</h3>
      <p className={list__.info}>{stateInfo}</p>
      <ul className={list__.seriesList + ' ' + slot}>
        {series.map((item) => (
          <SeriesCard
            key={item.id}
            serie={item}
            deleteSerie={deleteSerie}
            updateScore={updateScore}
          ></SeriesCard>
        ))}
      </ul>
    </section>
  );
}
