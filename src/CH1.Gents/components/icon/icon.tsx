import './icon.css';
export function Icon({ type }: { type: 'add' | 'delete' }) {
  const templates = {
    add: <i className="icon gentleman__icon fas fa-check" role="button"></i>,
    delete: (
      <i
        className="icon gentleman__icon gentleman__icon--delete fas fa-times"
        role="button"
      ></i>
    ),
  };
  return templates[type];
}
