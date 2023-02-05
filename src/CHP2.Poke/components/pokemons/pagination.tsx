import { useContext, SyntheticEvent } from 'react';
import { AppContext } from '../../context/app.context';

export function Pagination() {
  const { state, hydrateData } = useContext(AppContext);

  const handleButton = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLButtonElement;
    const cases = {
      next: state.nextUrl,
      prev: state.previousUrl,
    };
    const caseID: 'next' | 'prev' = element.dataset.id as 'next' | 'prev';
    hydrateData(cases[caseID]);
  };

  return (
    <>
      <button
        className="pagination__button"
        type="button"
        data-id="prev"
        onClick={handleButton}
        disabled={Boolean(!state.previousUrl)}
      >
        <i className="fas fa-backward" data-id="prev"></i>
        <span data-id="prev">Anterior</span>
      </button>
      <button
        className="pagination__button"
        type="button"
        data-id="next"
        onClick={handleButton}
        disabled={Boolean(!state.nextUrl)}
      >
        <span data-id="next">Siguiente</span>
        <i className="fas fa-forward" data-id="next"></i>
      </button>
    </>
  );
}
