<template>
  <div class="row">
    <div class="col">
      <div class="form-group mb-2">
        <label class="sr-only">Escribe tu busqueda</label>
        <input type="text" class="form-control" v-model="search"/>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" :value="true" v-model="available">
        <label class="form-check-label" for="flexRadioDefault1">
          Disponible
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" :value="false" v-model="available">
        <label class="form-check-label" for="flexRadioDefault2">
          No disponible
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  computed: {
    search : {
      get() {
        return this.$store.state.filter.search;
      },
      set(val) {
        this.$store.commit('SET_QUERY', val);
      }
    },
    available : {
      get() {
        return this.$store.state.filter.available;
      },
      set() {
        this.$store.commit('SET_AVAILABLE');
      }
    }
  }
}
</script>

