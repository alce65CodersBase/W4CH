type KeyProps = {
  label: string;
  type?: string;
};

export function Key({ label, type = 'normal' }: KeyProps) {
  return (
    <li>
      <button className={'key ' + type}>{label}</button>
    </li>
  );
}
