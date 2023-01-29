/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { Series } from '../../models/series';
import { ScoreStars } from '../score.stars/score.stars';
import {
  card,
  serieTitle,
  seriePoster,
  serieInfo,
  iconDelete,
} from './serie.card.module.css';

type seriesCardProps = {
  serie: Series;
};
export function SeriesCard({ serie }: seriesCardProps) {
  const { deleteSerie } = useContext(AppContext);
  const scoreSelector = `.score-slot-${serie.id}`;

  return (
    <li className={card} aria-label="Serie">
      <img className={seriePoster} src={serie.poster} alt={serie.name} />
      <h4 className={serieTitle}>{serie.name}</h4>
      <p className={serieInfo}>
        {serie.creator} ({serie.year})
      </p>
      <ScoreStars serie={serie}></ScoreStars>
      <i
        role="button"
        className={`fas fa-times-circle ${iconDelete}`}
        onClick={() => deleteSerie(serie)}
      ></i>
    </li>
  );
}
