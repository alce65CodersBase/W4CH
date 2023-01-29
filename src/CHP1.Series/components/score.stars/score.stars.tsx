import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { Series } from '../../models/series';
import score__ from './score.stars.module.css';

const STARS = [1, 2, 3, 4, 5];

type scoreStarsProps = {
  serie: Series;
};
export function ScoreStars({ serie }: scoreStarsProps) {
  const { updateScore } = useContext(AppContext);
  const stars = STARS.map((item) => {
    const iconType = item <= serie.score ? 'fas' : 'far';
    return (
      <li
        key={item}
        className={score__.star}
        role="button"
        aria-label={`Star${item}`}
        onClick={serie.score === 0 ? () => updateScore(serie, item) : () => {}}
      >
        <i
          className={`icon--score ${iconType} fa-star`}
          title={`${item}/5`}
        ></i>
      </li>
    );
  });

  return <ul className={score__.container}>{stars}</ul>;
}
