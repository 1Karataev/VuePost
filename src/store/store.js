import {createStore} from 'vuex'
import axios from 'axios';

export default createStore({
  state:{
    user:{},
    userId:'',
    postId:'',
    post:{},
    comments:[],
    loader:false,
    title:'',
  },
  getters:{

  },
  mutations:{
    setUser(state, user){
      state.user = user
      
    },
    setPost(state, post){
      state.post = post
      
    },
    setComments(state, comments){
      state.comments = comments
    },
     setUserId(state, id){
      state.userId = id
    },
    setPostId(state, id){
      state.postId = id
    },
    setLoader(state, boolean){
      state.loader = boolean
    },
    setTitle(state, title){
      state.title = title
      
    },
  },
  actions:{
     async fetchcomments({state, commit}) {
      commit('setLoader',false) 
      const respon = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${state.postId}`);
      commit('setComments',respon.data) 
      commit('setLoader',true) 
    },
     async fetchuser({state, commit}) {
      const respon = await axios.get(`https://jsonplaceholder.typicode.com/users/${state.userId}`);
       commit('setUser',respon.data) 
      
    },
  addcomment({state, commit}) {
      commit('setLoader',false) 
      fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Ваш комментарий',
    body: state.title,
    userId: state.userId,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  })
  .then((response) => response.json())
  .then((json) => console.log('response: ' + JSON.stringify(json) ));
      
      commit('setLoader',true) 
},
    
  },
  modules:{
    
  }



})