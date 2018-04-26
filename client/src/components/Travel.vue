<template>
<div>
  <NavBar></NavBar>
      <div class="container jumbotron" id="container">
        <h1>TRAVEL</h1>
        <div class="row">
          <Article  v-for="(article,index) in articles" :key="index" v-if="article.category==='travel'"
          :article="article"></Article>
        </div>
      </div>
</div>
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
    ])
  },
  created () {
    this.fetchData()
  }
}
</script>
