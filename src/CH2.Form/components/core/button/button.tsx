import style from './button.module.css';

type ButtonProps = {
  label: string;
};
export function Button({ label }: ButtonProps) {
  return (
    <div>
      <button className={style.button}>{label}</button>
    </div>
  );
}
