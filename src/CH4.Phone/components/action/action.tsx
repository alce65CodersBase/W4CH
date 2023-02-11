type ActionProps = {
  label: string;
  type: string;
  state?: string;
};
export function Action({ label, type, state }: ActionProps) {
  return (
    <a href="#" className={type + ' ' + state}>
      {label}
    </a>
  );
}
