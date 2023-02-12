export const lastFromLocation = () => '/' + location.pathname.split('/').at(-1);

export const detailUrlParse = () => {
  let pokeId = 0;
  let origin = '';
  if (location.search) {
    pokeId = Number(location.search.split('=')[1].split('&')[0]);
    origin = location.search.split('=')[2];
  }

  return { pokeId, origin };
};
