<template>
  <div>
    <form>
      <div class="form-group">
        <label for="#photo" class="col-form-label">Photo:</label>
        <input type="file" class="form-control" id="photo" @change="takePhoto">
      </div>
      <div class="form-group">
        <label for="#title" class="col-form-label">Title</label>
        <input v-model="editTitle" type="text" class="form-control" id="title" :placeholder="title">
      </div>
      <div>
          <select v-model="selected">
            <option disabled value="">{{selected}}</option>
            <option>politics</option>
            <option>games</option>
            <option>travel</option>
            <option>sports</option>
          </select>
        </div>
      <div class="form-group">
        <label for="#text" class="col-form-label">Text</label>
        <textarea v-model="editText" class="form-control" id="text" :placeholder="text"></textarea>
      </div>
    </form>
    <button @click="updateArticle" class="btn btn-outline-success"><strong>Update</strong></button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  props: ['id', 'title', 'category', 'text'],
  data () {
    return {
      editId: this.id,
      editTitle: this.title,
      selected: this.category,
      editText: this.text,
      file: null,
      formData: new FormData()
    }
  },
  methods: {
    takePhoto (event) {
      this.file = event.target.files[0]
      console.log(this.file)
    },
    updateArticle () {
      this.formData.set('image', this.file)
      this.formData.set('title', this.editTitle)
      this.formData.set('description', this.editDescription)
      this.formData.set('text', this.editText)
      let obj = {
        id: this.id,
        formData: this.formData
      }
      this.editArticle(obj)
    },
    ...mapActions([
      'editArticle'
    ])
  },
  computed: {
    ...mapGetters([
      'loading'
    ])
  }
}
</script>
