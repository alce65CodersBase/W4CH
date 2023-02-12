type ActionProps = {
  label: string;
  type: string;
  state?: boolean;
  handleClick: () => void;
};
export function Action({ label, type, state, handleClick }: ActionProps) {
  const cssClass = `${type} ${state && 'active'}`;

  return (
    <button className={cssClass} disabled={!state} onClick={handleClick}>
      {label}
    </button>
  );
}
