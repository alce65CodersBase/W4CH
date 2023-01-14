import { icon, rotate } from './icon.module.css';

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
  let classCSS = icon;
  if (!isAlive) classCSS += ' ' + rotate;
  const title = 'Icon component';
  return (
    <div className={classCSS} aria-label={title}>
      <i>{emoji[category]}</i>
    </div>
  );
}
