import { useContext } from 'react';
import { Action } from '../action/action';
import { AppContext } from '../../context/app.context';

type ActionsProps = {
  children: globalThis.JSX.Element;
};
export function Actions({ children }: ActionsProps) {
  const { isCalling, phoneNumber, handleCall, handleHang } =
    useContext(AppContext);

  // El botón de llamar debe tener la clase "activo" cuando
  // el número de teléfono tiene 9 cifras
  const stateActive = phoneNumber.length === 9;
  return (
    <section className="actions" aria-label="actions">
      {children}

      {/* Sólo se tiene que ver un botón u otro */}
      {isCalling ? (
        <>
          <Action
            label="Hang"
            type="hang"
            state={true}
            handleClick={handleHang}
          ></Action>
          <audio src="./phone-call-14472.mp3" autoPlay loop></audio>
        </>
      ) : (
        <Action
          label="Call"
          type="call"
          state={stateActive}
          handleClick={handleCall}
        ></Action>
      )}
    </section>
  );
}
