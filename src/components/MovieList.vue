<template>
  <div class="row" v-if="movies.length > 0">
    <MovieItem :movie="movie" v-for="movie in movies" :key="movie.id"></MovieItem>
  </div>
  <div class="alert alert-danger text-center" v-else><h6>No hay registros</h6></div>
</template>

<script>

import {mapGetters} from 'vuex';
import MovieItem from "./MovieItem";

export default {
  name: "MovieList",
  components: {MovieItem},
  computed :{
    ...mapGetters({
      movies : 'filteredMovies'
    })
  }
}
</script>

<style scoped>

</style>
