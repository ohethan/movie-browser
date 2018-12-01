export const fetchMovies = async (searchInput, searchOptions) => {
  const searchParam = searchInput.split(' ').join('+');
  const response = await fetch(`http://www.omdbapi.com/?apikey=f998727d&s=${searchParam}&page=${searchOptions.page}`);
  const {Search: res} = await response.json();
  if (res) 
    return res;
  else 
    return [];
}