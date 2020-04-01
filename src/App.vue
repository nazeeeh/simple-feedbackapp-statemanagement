<template>
  <div id="app">
    <div class="feed">
      <h3>A simple Feedback Application </h3>
      <div class="image-section">
      <img class="profile-img" src="./assets/images/chi.jpg" alt="picture" height="50">
      </div>
      <div class="personals">
      <b> Chioma Nwata <span><small><em>Serial Entreprenuer</em></small></span></b>
      </div>
      <div class="profile-info">
        <img class="profile-image" src="./assets/profiles/profile-1.png" alt="picture">
        <p class="paragh"><img class="profile-text-img" src="./assets/images/chi.jpg" alt="picture" height="20"><span class="text">My working station from today onwards</span> </p>
      </div>
      <hr> 
    </div>
        <h3>Comments</h3>
        <Feedback v-for="post in comments" :key="post.index"  :posts="post"/>
        <h6>Leave your comments below</h6>
        <textarea @keyup.enter="addComments" v-model="newcomments" id="text-area" cols="30" rows="5"></textarea>
          
  </div>
</template>

<script>

import Feedback from './components/Feedback'

export default {
  name: 'App',
  
  data(){
    return {
      newcomments: ""
    }
  },

  computed: {
    comments(){
      return this.$store.state.comments;
    }
  },
   
   methods:{
     addComments(){
       this.$store.commit('addComments', this.newcomments); 
       this.newcomments = ""
     }
   },

  components: {
    Feedback
  }
}
</script>

<style>
#app{
  text-align: center;
}
.feed{
  background-color: #eee;
}
.profile-text-img{
  border-radius: 100%;
}
.pink{
  background-color: peachpuff;
}

.personals{
  margin-left: 4rem;
  margin-bottom: 20px;
}
.profile-img{
  border-radius: 100%;
  position: relative;
  right: 7rem;
  top: 2rem;

}
.text{
  margin-left: 1rem;
}
.profile-image{
  margin-left: 1rem;
}

#text-area{
  border: 1px solid purple
}
</style>
