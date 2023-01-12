import React, { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { menuItems } from '../../config/menu.item';
import { Gender, PersonalData } from '../../models/user';
import { dateToString } from '../../tools/dates';
import { StateStructure } from '../app/app';
import { Button } from '../core/button/button';
import { Checkbox } from '../core/checkbox/checkbox';
import { Input } from '../core/input/input';
import { RadioGroup } from '../core/radio/radio';
import { formFields } from './fields.config';
import styles from './personal.form.module.css';

type PersonalFormProps = {
  state: StateStructure;
  setState: React.Dispatch<React.SetStateAction<StateStructure>>;
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

const labels = ['Anterior', 'Continuar'];

export function PersonalForm({ state, setState }: PersonalFormProps) {
  const navigate = useNavigate();

  // Tipo que define los campos de datos del formulario
  type PersonalFormDataType = PersonalData;

  const personalFormData: PersonalFormDataType = {
    firstName: state.personal.firstName || '',
    lastName: state.personal.lastName || '',
    birthDate: state.personal.birthDate,
    gender: state.personal.gender || 'prefer not to mention',
    email: state.personal.email || '',
    hasNewsletter: state.personal.hasNewsletter || false,
  };

  const [formState, setFormState] = useState(personalFormData);

  function handleChange(ev: SyntheticEvent) {
    const element = ev.target as HTMLFormElement;
    setFormState({ ...formState, [element.name]: element.value });
  }

  const startValues = () => {
    formFields[0].value = formState.firstName;
    formFields[1].value = personalFormData.lastName;
    formFields[2].value = dateToString(personalFormData.birthDate);
    formFields[3].value = personalFormData.gender;
    formFields[4].value = personalFormData.email;
    formFields[5].value = personalFormData.hasNewsletter;
  };

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const formData = new FormData(form);
    // Fetch de los datos individualmente
    personalFormData.firstName = formState.firstName;
    personalFormData.lastName = formData.get('lastName') as string;
    // Return of the get: aaaa-mm-dd
    personalFormData.birthDate = new Date(formData.get('birthDate') as string);
    personalFormData.gender = formData.get('gender') as Gender;
    personalFormData.email = formData.get('email') as string;
    personalFormData.hasNewsletter = formData.has('hasNewsletter');

    setState({ ...state, personal: personalFormData });
    navigate(menuItems[1].path);
  };

  startValues();

  return (
    <form onSubmit={handleSubmit}>
      {/* De forma iterativa {formFields.map((field) => renderField(field))} */}
      <Input handle={handleChange} field={formFields[0]}></Input>
      <Input key={formFields[1].name} field={formFields[1]}></Input>
      <Input key={formFields[2].name} field={formFields[2]}></Input>
      <RadioGroup
        selected={formFields[3].value as string}
        field={formFields[3]}
        options={radioOptions}
      ></RadioGroup>
      <Input key={formFields[4].name} field={formFields[4]}></Input>
      <Checkbox
        checked={formFields[5].value as boolean}
        field={formFields[5]}
      ></Checkbox>
      <div className={styles.navigation}>
        <Button label={labels[0]} isDisabled={true}></Button>
        <Button label={labels[1]} type={'submit'}></Button>
      </div>
    </form>
  );
}
