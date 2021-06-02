<template>
  <div>
    <h2 class="text-center text-muted">Buscador de Peliculas</h2>
    <SearchForm></SearchForm>
    <hr/>
    <MovieList></MovieList>
  </div>
</template>

<script>

import SearchForm from "./SearchForm";
import MovieList from "./MovieList";

export default {
  name: "MovieApp",
  components: {
    MovieList,
    SearchForm
  }
}
</script>

<style scoped>

</style>
