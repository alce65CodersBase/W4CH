import { GentStructure } from '../../models/gent';
import { ChangeOperations, Icon } from '../icon/icon';

import './gent.css';

export function Gent({
  gent,
  selectGent,
  deleteGent,
}: {
  gent: GentStructure;
  selectGent: (_gentId: GentStructure['id']) => void;
  deleteGent: (_gentId: GentStructure['id']) => void;
}) {
  function handleChanges(type: ChangeOperations) {
    if (type === 'select') {
      selectGent(gent.id);
    } else {
      deleteGent(gent.id);
    }
  }

  const gentClass = 'gentleman ' + (gent.selected ? 'selected' : '');

  return (
    <li className={gentClass} aria-label="gent">
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={`img/${gent.picture}`}
          alt={gent.alternativeText}
        />
        <span className="gentleman__initial">{gent.name[0]}</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{gent.name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {gent.job}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span>
            {gent.status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span>
            {gent.twitter}
          </li>
        </ul>
      </div>
      <Icon type="select" handleChanges={handleChanges}></Icon>
      <Icon type="delete" handleChanges={handleChanges}></Icon>
    </li>
  );
}
