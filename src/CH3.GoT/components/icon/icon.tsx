import styles from './icon.module.css';

export enum emoji {
  'king' = '👑',
  'fighter' = '🗡',
  'counselor' = '🎓',
  'squire' = '🛡',
}

type IconProps = {
  category: keyof typeof emoji;
  isAlive: boolean;
};

export function Icon({ category, isAlive }: IconProps) {
  let classCSS = styles.emoji;
  if (!isAlive) classCSS += ' ' + styles.rotate;
  const title = 'Icon component';
  return (
    <i className={classCSS} aria-label={title}>
      {emoji[category]}
    </i>
  );
}
