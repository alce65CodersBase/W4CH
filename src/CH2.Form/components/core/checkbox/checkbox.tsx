import { fieldType } from '../../../types/form';
import style from './checkbox.module.css';

export const defineAttributes = <T,>(field: fieldType<T>) => {
  const attributes: { [key: string]: string | boolean } = {
    type: field.type,
    name: field.name,
    id: field.id,
    placeholder: field.placeholder,
  };

  if (field.role) {
    attributes.role = field.role;
  }

  if (field.required) {
    attributes.required = field.required;
  }

  return attributes;
};

export function Checkbox<T>({
  field,
  checked,
}: {
  field: fieldType<T>;
  checked: boolean;
}) {
  const attributes = defineAttributes(field);

  return (
    <div className={style.formGroup} key={field.name}>
      <input className={style.input} {...attributes} defaultChecked={checked} />
      <label className={style.label} htmlFor={field.id}>
        {field.placeholder}
      </label>
    </div>
  );
}
