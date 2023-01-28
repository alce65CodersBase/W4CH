/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { Series } from '../../models/series';
import { ScoreStars } from '../score.stars/score.stars';
import card__ from './serie.card.module.css';

type seriesCardProps = {
  serie: Series;
};
export function SeriesCard({ serie }: seriesCardProps) {
  const { deleteSerie, updateScore } = useContext(AppContext);

  const handleScore = (newScore: number) => {
    if (updateScore === undefined) return;
    updateScore(serie, newScore);
  };

  const scoreSelector = `.score-slot-${serie.id}`;

  return (
    <li className={card__.container} aria-label="Serie">
      <img className={card__.seriePoster} src={serie.poster} alt={serie.name} />
      <h4 className={card__.serieTitle}>{serie.name}</h4>
      <p className={card__.serieInfo}>
        {serie.creator} ({serie.year})
      </p>
      <ScoreStars score={serie.score} handleScore={handleScore}></ScoreStars>
      <i
        className={`fas fa-times-circle ${card__['icon--delete']}`}
        onClick={() => deleteSerie(serie)}
      ></i>
    </li>
  );
}
