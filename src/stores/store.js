import service from '../services/service'

const state = {
  movies: []
}

const getters = [];

const mutations = [];

const actions = {
  fetchMovies() {
    services.then((res) => {
      console.log(res);
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}