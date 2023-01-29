import { useContext } from 'react';
import { SeriesCard } from '../serie.card/serie.card';
import list__ from './list.module.css';
import { AppContext } from '../../context/app.context';

type listProps = {
  filter: 'series-watched' | 'series-pending';
};

// eslint-disable-next-line no-unused-vars
export function List({ filter }: listProps) {
  const { pendingSeries, watchedSeries, series } = useContext(AppContext);
  const filteredSeries = filter.includes('watched')
    ? watchedSeries
    : pendingSeries;
  const slot = filter + '-cards-slot';
  let title = 'Pending series';
  let stateInfo = `You have ${filteredSeries.length} series pending to watch`;

  if (filter.includes('watched')) {
    title = 'Watched series';
    stateInfo =
      filteredSeries.length === series.length
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
        {filteredSeries.map((item) => (
          <SeriesCard key={item.id} serie={item}></SeriesCard>
        ))}
      </ul>
    </section>
  );
}