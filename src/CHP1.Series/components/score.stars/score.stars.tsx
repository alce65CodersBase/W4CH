import score__ from './score.stars.module.css';

const STARS = [1, 2, 3, 4, 5];

type scoreStarsProps = {
  score: number;
  handleScore: (_score: number) => void;
};
export function ScoreStars({ score, handleScore }: scoreStarsProps) {
  const stars = STARS.map((item) => {
    const iconType = item <= score ? 'fas' : 'far';
    return (
      <li
        key={item}
        className={score__.star}
        role="button"
        aria-label={`Star${item}`}
        onClick={score === 0 ? () => handleScore(item) : () => {}}
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
