import { Action } from '../action/action';

type ActionsProps = {
  children: globalThis.JSX.Element;
};
export function Actions({ children }: ActionsProps) {
  return (
    <section className="actions" aria-label="actions">
      {children}
      {/* El botón de llamar debe tener la clase "activo" cuando -->
          el número de teléfono tiene 9 cifras --> */}
      <Action label="Call" type="call"></Action>
      {/* Sólo se tiene que ver un botón u otro */}
      <Action label="Hang" type="hang" state="active"></Action>
    </section>
  );
}
