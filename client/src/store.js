import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert2'
let url = 'http://localhost:3000'

Vue.use(Vuex)

const state = {
  articles: [],
  oneArticle: {},
  category: [],
  authorBlog: [],
  user: localStorage.getItem('id')
}

const getters = {
  articles: state => {
    return state.articles
  },
  article: state => {
    return state.oneArticle
  },
  category: state => {
    return state.category
  },
  user: state => {
    return state.user
  }
}

const actions = {
  fetchData ({commit}) {
    axios.get(`${url}/articles`)
      .then(response => {
        console.log('hasil fetch', response.data.article)
        commit('fetchData', response.data.article)
        state.data = false
      })
      .catch(err => {
        console.log('fetch failed', err.message)
      })
  },
  setUser ({commit}, payload) {
    let id = localStorage.getItem('id')
    commit('setUser', id)
  },
  editArticle ({commit}, payload) {
    axios.put(`${url}/articles/${payload.id}`, payload.formData, {headers: {token: localStorage.getItem('token')}})
      .then(response => {
        console.log('edit', response.data.savedData)
        response.data.savedData.author = state.user
        commit('editData', response.data.savedData)
      })
      .catch(err => {
        console.log('error edit', err)
      })
  },
  createArticle ({commit}, obj) {
    axios.post(`${url}/articles`, obj, {headers: {token: localStorage.getItem('token')}})
      .then(response => {
        console.log(response.data.data)
        commit('addData', response.data.data)
        swal(
          'Create Article Success',
          `${response.data.data.title} is created`,
          'success'
        )
      })
      .catch(err => {
        console.log(err.message)
        swal({
          type: 'error',
          title: 'Create Blog Failed',
          text: err.message
        })
      })
  },
  deleteArticle ({commit}, payload) {
    axios.delete(`${url}/articles/${payload}`, {headers: {token: localStorage.getItem('token')}})
      .then(response => {
        swal({
          title: 'Are you sure?',
          text: 'You will delete this article',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Delete'
        }).then(result => {
          if (result.value) {
            swal(
              'Delete Article Success',
              `${response.data.article.title} is deleted`,
              'success'
            )
            commit('deleteData', payload)
          }
        })
      })
      .catch(err => {
        console.log('error when deleting article', err)
      })
  },
  getOne ({commit}, obj) {
    console.log(obj)
    axios.get(`${url}/articles/${obj}`)
      .then(response => {
        console.log(response.data.article)
        commit('fetchOneData', response.data.article[0])
      })
      .catch(err => {
        console.log(err)
      })
  },
  fetchAuthorArticle ({commit}, payload) {
    console.log(payload)
    axios.get(`${url}/articles/author/${payload}`)
      .then(response => {
        console.log(response.data.data.article)
        commit('fetchAuthorArticle', response.data.article)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

const mutations = {
  fetchData (state, payload) {
    state.articles = payload
  },
  setUser (state, payload) {
    state.user = payload
  },
  fetchOneData (state, payload) {
    state.oneArticle = payload
  },
  fetchAuthorArticle (state, payload) {
    state.authorBlog = payload
  },
  addData (state, payload) {
    state.articles.push(payload)
  },
  editData (state, payload) {
    console.log(payload)
    let index = state.articles.findIndex(blog => blog._id === payload.id)
    console.log(index)
    state.articles.splice(index, 1, payload)
  },
  deleteData (state, payload) {
    state.articles.map((data, index) => {
      if (payload === data._id) {
        state.articles.splice(index, 1)
      }
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
