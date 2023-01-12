import { fieldType } from '../../../types/form';
import style from './radio.module.css';

export type RadioOptions = {
  value: string;
  label: string;
};
export const defineAttributes = <T,>(field: fieldType<T>) => {
  const attributes: { [key: string]: string | boolean } = {
    type: field.type,
    name: field.name,
  };

  if (field.role) {
    attributes.role = field.role;
  }

  if (field.required) {
    attributes.required = field.required;
  }

  return attributes;
};

export function RadioGroup<T>({
  field,
  options,
  selected,
}: {
  field: fieldType<T>;
  options: Array<RadioOptions>;
  selected: string | undefined;
}) {
  const attributes = defineAttributes(field);

  return (
    <div className={style.formGroup} key={field.name}>
      <p className={style.caption}>{field.label}</p>
      <div className={style.radioGroup}>
        {options.map((item) => (
          <label className={style.label} key={item.value} htmlFor={field.name}>
            <input
              className={style.input}
              id={field.id + item.label}
              value={item.value}
              aria-label={item.value}
              defaultChecked={item.value === selected}
              {...attributes}
            />
            {item.label}
          </label>
        ))}
      </div>
    </div>
  );
}
