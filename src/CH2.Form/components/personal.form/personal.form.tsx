import { SyntheticEvent } from 'react';
import { Gender, PersonalData } from '../../models/user';
import { fieldType } from '../../types/form';
import { Buttons } from '../buttons/buttons';
import { Checkbox } from '../core/checkbox/checkbox';
import { Input } from '../core/input/input';
import { RadioGroup } from '../core/radio/radio';

export function PersonalForm() {
  // Tipo que define los campos de datos del formulario

  type PersonalFormDataType = PersonalData;

  // El tipo FormFieldType<PersonalFormData> define el conjunto de datos necesarios
  // para definir cada control del formulario: type, name, id....
  // El name solo puede ser alguno de los campos del PersonalFormData

  type FormFieldsType = Array<fieldType<PersonalFormDataType>>;

  const formFields: FormFieldsType = [
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
      type: 'datetime-local',
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

  const personalFormData: PersonalFormDataType = {
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    gender: 'prefer not to mention',
    email: '',
    hasNewsletter: false,
  };

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;

    const formData = new FormData(form);
    // Fetch de los datos individualmente
    personalFormData.firstName = formData.get('firstName') as string;
    personalFormData.lastName = formData.get('lastName') as string;
    personalFormData.birthDate = new Date(formData.get('birthDate') as string);
    personalFormData.gender = formData.get('gender') as Gender;
    personalFormData.email = formData.get('email') as string;
    personalFormData.hasNewsletter = Boolean(formData.get('newsletter'));
    // Fetch de los datos en un bucle for/in
    // let key: keyof PersonalFormDataType;
    // for (key in personalFormData) {
    //   if (Object.prototype.hasOwnProperty.call(personalFormData, key)) {
    //     const value = formData.get(
    //       key
    //     ) as PersonalFormDataType[keyof PersonalFormDataType] & string;
    //     personalFormData[key] = value;
    //   }
    // }
    // consoleDebug(finalFormData);
  };

  type RadioOptions = {
    value: Gender;
    label: string;
  };

  const radioOptions: Array<RadioOptions> = [
    { value: 'male', label: 'Hombre' },
    { value: 'female', label: 'Mujer' },
    { value: 'other', label: 'Otros' },
    { value: 'prefer not to mention', label: 'Prefiero no decirlo' },
  ];

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* De forma iterativa {formFields.map((field) => renderField(field))} */}
      <Input key={formFields[0].name} field={formFields[0]}></Input>
      <Input key={formFields[1].name} field={formFields[1]}></Input>
      <Input key={formFields[2].name} field={formFields[2]}></Input>
      <RadioGroup
        key={formFields[3].name}
        field={formFields[3]}
        options={radioOptions}
      ></RadioGroup>
      <Input key={formFields[4].name} field={formFields[4]}></Input>
      <Checkbox field={formFields[5]}></Checkbox>
      <Buttons></Buttons>
      {/* <button className={'style.button'} type="submit"></button> */}
    </form>
  );
}
