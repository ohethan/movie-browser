export const fetchMovies = async (searchInput) => {
  const searchParam = searchInput.split(' ').join('+');
  const response = await fetch(`http://www.omdbapi.com/?apikey=f998727d&s=${searchParam}}`);
  console.log(response);
  const {Search: res} = await response.json();
  return res;
}