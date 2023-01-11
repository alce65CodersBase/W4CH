export type fieldType<T> = {
  label: string;
  placeholder: string;
  name: keyof T & string;
  id: string;
  type: 'text' | 'password' | 'email' | 'datetime-local' | 'checkbox' | 'radio';
  role?: 'textbox' | 'checkbox' | 'radio';
  required?: true;
};
