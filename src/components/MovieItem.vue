<template>
  <div class="col-sm-6 mb-3">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">{{movie.title}}</h5>
        <h6 class="card-subtitle">{{movie.available}}</h6>
      </div>
      <div class="card-body">
        <p class="card-description">{{movie.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
