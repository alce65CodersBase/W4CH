import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { menuItems } from '../../config/menu.item';
import { Gender, PersonalData } from '../../models/user';
import { consoleDebug } from '../../tools/debug';
import { Button } from '../core/button/button';
import { Checkbox } from '../core/checkbox/checkbox';
import { Input } from '../core/input/input';
import { RadioGroup } from '../core/radio/radio';
import { formFields } from './fields.config';
import styles from './personal.form.module.css';
export function PersonalForm() {
  const navigate = useNavigate();
  // Tipo que define los campos de datos del formulario

  type PersonalFormDataType = PersonalData;

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
    consoleDebug(personalFormData);
    navigate(menuItems[1].path);
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

  return (
    <form onSubmit={handleSubmit}>
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
      <div className={styles.navigation}>
        <Button label={labels[0]} isDisabled={true}></Button>
        <Button label={labels[1]} type={'submit'}></Button>
      </div>
    </form>
  );
}
