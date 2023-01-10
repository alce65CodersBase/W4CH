import './button.css';

type ButtonLabel = 'Select all' | 'Deselect all';

export function Button({
  label,
  selectAll,
}: {
  label: ButtonLabel;
  selectAll: (_isSelect: boolean) => void;
}) {
  const handleClick = () => {
    selectAll(label === 'Select all');
  };

  return (
    <button className="button button--select" onClick={handleClick}>
      {label}
    </button>
  );
}
