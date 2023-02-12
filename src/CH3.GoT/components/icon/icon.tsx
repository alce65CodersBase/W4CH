import { emoji } from '../../services/master.data/kinds';
import { icon, rotate } from './icon.module.css';

type IconProps = {
  category: keyof typeof emoji;
  isAlive: boolean;
};

export function Icon({ category, isAlive }: IconProps) {
  let classCSS = icon;
  if (!isAlive) classCSS += ' ' + rotate;
  const title = 'Icon';
  return (
    <div className={classCSS} role="region" aria-label={title}>
      <i>{emoji[category]}</i>
    </div>
  );
}
