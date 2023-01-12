// Tipo que define los campos de datos del formulario

type PersonalFormDataType = PersonalData;
import { PersonalData } from '../../models/user';
// El tipo FormFieldType<PersonalFormData> define el conjunto de datos necesarios
// para definir cada control del formulario: type, name, id....
// El name solo puede ser alguno de los campos del PersonalFormData

import { fieldType } from '../../types/form';

type FormFieldsType = Array<fieldType<PersonalFormDataType>>;

export const formFields: FormFieldsType = [
  {
    label: 'First name',
    placeholder: 'Escribe tu nombre',
    name: 'firstName',
    id: 'fn-01',
    type: 'text',
    required: true,
  },
  {
    label: 'Last name',
    placeholder: 'Escribe tu apellido',
    name: 'lastName',
    id: 'ln-01',
    type: 'text',
    required: true,
  },
  {
    label: 'Birth day',
    placeholder: '',
    name: 'birthDate',
    id: 'bd-01',
    type: 'date',
    required: true,
    role: 'textbox',
  },
  {
    label: 'Gender',
    placeholder: '',
    name: 'gender',
    id: 'gn-01',
    type: 'radio',
    required: true,
  },
  {
    label: 'Email',
    placeholder: 'Escribe tu correo electrónico',
    name: 'email',
    id: 'em-01',
    type: 'text',
  },
  {
    label: 'Newsletter',
    placeholder: 'Deseo recibir información de vuestra newsletter?',
    name: 'hasNewsletter',
    id: 'nl-01',
    type: 'checkbox',
  },
];
