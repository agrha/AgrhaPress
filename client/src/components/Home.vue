<template>
  <section>
    <NavBar></NavBar>
      <div class="container jumbotron" id="container">
        <h1>GAMES</h1>
        <div class="row">
          <Article v-if="article.category==='games'" v-for="(article,index) in articles" :key="index"
          :article="article"></Article>
        </div>
      </div>
      <div class="container jumbotron" id="container">
        <h1>POLITICS</h1>
        <div class="row">
          <Article v-if="article.category==='politics'" v-for="(article,index) in articles" :key="index"
          :article="article"></Article>
        </div>
      </div>
      <div class="container jumbotron" id="container">
        <h1>TRAVEL</h1>
        <div class="row">
          <Article v-if="article.category==='travel'" v-for="(article,index) in articles" :key="index"
          :article="article"></Article>
        </div>
      </div>
      <div class="container jumbotron" id="container">
        <h1>SPORTS</h1>
        <div class="row">
          <Article v-if="article.category==='sports'" v-for="(article,index) in articles" :key="index"
          :article="article"></Article>
        </div>
      </div>
      <div class="fixed-bottom">
        <button class="btn btn-outline-primary" @click="goTravel">Travel</button>
        <button class="btn btn-outline-primary" @click="goPolitics">Politics</button>
        <button class="btn btn-outline-primary" @click="goGames">Games</button>
        <button class="btn btn-outline-primary" @click="goSports">Sports</button>
      </div>
  </section>
</template>

<script>
import Article from '@/components/Article'
import {mapGetters, mapActions} from 'vuex'
import NavBar from '@/components/NavBar'
export default {
  components: {
    NavBar, Article
  },
  computed: {
    ...mapGetters([
      'articles'
    ])
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),
    goTravel () {
      this.$router.push('/travel')
    },
    goPolitics () {
      this.$router.push('/politics')
    },
    goSports () {
      this.$router.push('/sports')
    },
    goGames () {
      this.$router.push('/games')
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
