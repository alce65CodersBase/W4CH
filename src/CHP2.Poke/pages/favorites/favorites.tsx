import { MyPokeList } from '../../components/lists/my.poke.list';

export default function FavoritesPage() {
  return (
    <section className="my-poke-list">
      <h2 aria-label="Favorites">My Favorites Pokemon List</h2>
      <MyPokeList></MyPokeList>
    </section>
  );
}
