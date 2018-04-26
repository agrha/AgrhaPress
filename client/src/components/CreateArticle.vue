<template>
  <div>
    <b-btn class="btn btn-primary" v-b-modal.createBlog><strong>Create Article</strong></b-btn>
    <b-modal id="createBlog" title="Create Blog">
      <form>
        <div class="form-group">
          <label for="recipient-name" class="col-form-label">Photo:</label>
          <input type="file" class="form-control" id="recipient-name" @change="takePhoto">
        </div>
        <div class="form-group">
          <label for="recipient-name" class="col-form-label">Title</label>
          <input v-model="title" type="text" class="form-control" id="recipient-name">
        </div>
        <div>
          <select v-model="selected">
            <option disabled value="">Category</option>
            <option>politics</option>
            <option>games</option>
            <option>travel</option>
            <option>sports</option>
          </select>
        <span>Category: {{ selected }}</span>
        </div>
        <div class="form-group" style="margin-top:10px">
          <label for="message-text" class="col-form-label">Text</label>
          <textarea v-model="text" class="form-control" id="message-text"></textarea>
        </div>
      </form>
      <div class="modal-footer">
        <button @click="createBlog" type="button" class="btn btn-primary">Create Article</button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      title: '',
      description: '',
      text: '',
      selected: '',
      author: localStorage.getItem('id'),
      file: null,
      formData: new FormData()
    }
  },
  methods: {
    takePhoto (event) {
      this.file = event.target.files[0]
      console.log(this.file)
    },
    createBlog () {
      this.formData.set('image', this.file)
      this.formData.set('title', this.title)
      this.formData.set('category', this.selected)
      this.formData.set('text', this.text)
      this.formData.set('author', this.author)
      this.createArticle(this.formData)
    },
    ...mapActions([
      'createArticle'
    ])
  }
}
</script>
