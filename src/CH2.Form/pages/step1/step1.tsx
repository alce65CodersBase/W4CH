import { PersonalForm } from '../../components/personal.form/personal.form';
import step from './step1.module.css';

export default function Step1() {
  return (
    <section aria-label="step1">
      <h2 className={step.header}>Datos personales</h2>
      <PersonalForm></PersonalForm>
    </section>
  );
}
