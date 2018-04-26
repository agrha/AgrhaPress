<template>
  <div class="col-md-4 mt-4">
   <div class="card profile-card-5">
      <div class="card-img-block">
        <img class="card-img-top" :src="article.image" alt="Card image cap">
      </div>
      <div class="card-body pt-0">
      <h5 class="card-title">{{article.title}}</h5>
      <p class="card-text">{{article.category}}</p>
      <button v-if="user === article.author._id" @click="edit()" class="btn btn-outline-success"><strong>Update Blog</strong></button>
      <EditArticle @close="close" v-show="isEdit" style="margin-top:10px"  :id="article._id" :title="article.title" :category="article.category" :text="article.text"></EditArticle>
        <div class="row justify-content-center">
          <button v-if="user === article.author._id" @click="deleteArticle(article._id)" type="button" class="btn btn-primary" style="margin-top:10px;margin-left:10px"><strong>Delete</strong></button>
          <button @click="read" type="button" class="btn btn-primary" style="margin-top:10px;margin-left:10px"><strong>Go To Article</strong></button>
        </div>
        <button class="btn btn-primary" style="margin-top:10px"> see more {{article.author.email}} </button>
      </div>
    </div>
  </div>
</template>

<script>
import EditArticle from '@/components/EditArticle'
import {mapActions, mapGetters} from 'vuex'
export default {
  props: ['article'],
  data () {
    return {
      id: '',
      title: '',
      text: '',
      description: '',
      isEdit: ''
    }
  },
  methods: {
    ...mapActions([
      'editBlog',
      'getOne',
      'deleteArticle',
      'fetchAuthorArticle'
    ]),
    read () {
      this.getOne(this.article._id)
      this.$router.push(`/read/${this.article._id}`)
    },
    readFromAuthor () {
      this.fetchAuthorArticle(this.article.author._id)
      this.$router.push(`/readarticle/${this.article.author._id}`)
    },
    edit () {
      this.isEdit = !this.isEdit
    },
    close () {
      this.isEdit = !this.isEdit
    }
  },
  computed: {
    ...mapGetters([
      'articles',
      'loading',
      'loadingEdit',
      'user'
    ])
  },
  components: {
    EditArticle
  }
}
</script>

<style scoped>
.profile-card-5{
    margin-top:20px;
}
.profile-card-5 .card-img-block {
    width: 91%;
    margin: 0 auto;
    position: relative;
    top: -20px;
}
.profile-card-5 .card-img-block img{
    border-radius:5px;
    box-shadow:0 0 10px rgba(0,0,0,0.63);
}
.profile-card-5 h5{
    color:#4E5E30;
    font-weight:600;
}
.profile-card-5 p{
    font-size:14px;
    font-weight:300;
}
#loading-edit{
  color:red
}
</style>
