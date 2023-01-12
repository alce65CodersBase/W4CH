/* globals JSX */
import step from './step1.module.css';

// eslint-disable-next-line no-unused-vars
export default function Step1({ children }: { children: JSX.Element }) {
  return (
    <section aria-label="step1">
      <h2 className={step.header}>Datos personales</h2>
      {children}
    </section>
  );
}
