import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'
import ReadArticle from '@/components/ReadArticle'
import Games from '@/components/Games'
import Politics from '@/components/Politics'
import Travel from '@/components/Travel'
import HalamanOlahraga from '@/components/HalamanOlahraga'
import AuthorArticle from '@/components/AuthorArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/read/:id',
      name: 'read',
      component: ReadArticle
    },
    {
      path: 'readarticle/:id',
      name: 'read',
      component: AuthorArticle
    },
    {
      path: '/games',
      name: 'games',
      component: Games
    },
    {
      path: '/politics',
      name: 'politics',
      component: Politics
    },
    {
      path: '/travel',
      name: 'travel',
      component: Travel
    },
    {
      path: '/sports',
      name: 'sports',
      component: HalamanOlahraga
    }
  ]
})
