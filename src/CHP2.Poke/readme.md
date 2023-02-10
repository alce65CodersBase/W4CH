# Poke Challenge

## ...

Context
  -> hook
    -> loadingState: boolean
    -> state,
    -> pokeSelected: Poke{}
    -> favorites: []
    -> changeFavorites()
    -> setDetail()


Components
App
Layout: Layout, Header, Menu, Main, Footer
Pokemons:
  -> PokeItem: { Poke } : Props
  -> FavoriteIcon:
    -> { PokeId } : Props
    -> { favorites, changeFavorites } = useContext(AppContext);
Lists:
  -> PokeList: { state } = useContext(AppContext);
  -> HomePokeList: { state } = useContext(AppContext);
