import './icon.css';

export type ChangeOperations = 'select' | 'delete';
export function Icon({
  type,
  handleChanges,
}: {
  type: ChangeOperations;
  handleChanges: (_type: ChangeOperations) => void;
}) {
  const classTemplates = {
    select: 'icon gentleman__icon fas fa-check',
    delete: 'icon gentleman__icon gentleman__icon--delete fas fa-times',
  };
  return (
    <i
      className={classTemplates[type]}
      role="button"
      onClick={() => handleChanges(type)}
    ></i>
  );
}
