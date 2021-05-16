<template>
  <div class="container col-lg-6 mx-auto">
    <i class="fas fa-cloud fa-7x" style="color: #2c3e50;"></i>
    <h1 class="mt-2 display-6 fw-bold">SPA MetaWeather Test</h1>
    
    <input @keyup.enter="searchLocation()" class="form-control mt-4 mb-4" type="text" placeholder="Location" v-model="query">
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-end">
      <button :disabled="!query" @click="searchLocation()" type="button" class="btn btn-outline-dark px-4">Search</button>
    </div>
    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog  modal-fullscreen modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Location</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img class="mt-2 mb-1" :src="'http://localhost:8080/static/img/weather/' + 'hr' + '.svg'" height="100" width="100" alt="weather-icon">
              </div>
              <div class="col-md-8">
                <div class="card-body mt-1">
                  <h6>Date</h6>
                  <h3>Forecast</h3>
                  <h6>Temperature&#8451;</h6>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="modal-footer">
          <button @click="clearModal()" type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

    <ul class="mt-4 mb-4 list-group">
      <li v-for="result in searchResults" :key="result.woeid" data-bs-toggle="modal" data-bs-target="#exampleModal" class="list-group-item">{{ result.title }}</li>
    </ul>

  </div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'App',
  data() {
    return {
      query: '',
      searchResults: [],
      modalTitle: '',
    }
  },
  methods: {
    searchLocation() {
      if (this.query) {
        axios
          .get(`http://localhost:8080/api/location/search/?query=${this.query}`)
          .then(response => (this.searchResults = response.data))
      }
    },
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 2rem;
}
</style>