import { HomePokeList } from '../../components/lists/home.poke.list';

export default function HomePage() {
  return (
    <section className="home-poke-list" aria-label="Home">
      <HomePokeList></HomePokeList>
      {/* new ('.home-poke-list', this.state)
      new Pagination('.pagination', this.state) */}
    </section>
  );
}
