import { PokeDetail } from '../../components/pokemons/poke.detail';

export default function DetailsPage() {
  return (
    <section className="poke-detail">
      <h2 aria-label="Details">Pokemon Detail</h2>
      <PokeDetail></PokeDetail>
    </section>
  );
}
