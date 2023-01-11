import style from './button.module.css';

type ButtonProps = {
  label: string;
  type?: 'button' | 'submit';
  isDisabled?: boolean;
};
export function Button({
  label,
  type = 'button',
  isDisabled = false,
}: ButtonProps) {
  return (
    <div>
      <button className={style.button} type={type} disabled={isDisabled}>
        {label}
      </button>
    </div>
  );
}
