<template>
  <div class="container">
    <div style="width:100%" v-if="$store.state.loader">
      <Card style="margin: 5px 0 5px 0; width: 100%;">

        <template #title>
          {{$store.state.user.name}} <span style="font-size: 18px;opacity: 0.5;">{{$store.state.user.email}}</span>
        </template>
        <template #content style="margin-bottom: 0">
          <p style="font-weight: 600">{{ $store.state.post.title }}</p>
        </template>
        <template #footer>
          {{ $store.state.post.body }}
        </template>
      </Card>

    </div>

    <Card style="margin: 5px 0 5px 0; width: 100%;">

      <template #title style="align-items: center">
        <h2 style="color:#2196F3">Комментарии</h2>
      </template>

      <template #content style="margin-bottom: 0">
        <Card style="margin: 5px 0 5px 0; width: 100% " v-for="comment in this.$store.state.comments">

          <template #title style="align-items: center">
            {{comment.email}}
          </template>
          <template #content style="margin-bottom: 0; font-weight: 600;">
            {{comment.name}}
          </template>
          <template #footer style="margin-bottom: 0">
            {{comment.body}}
          </template>
        </Card>

      </template>
      <template #footer style="width: 100%; position: sticky;">
        <Message v-for="msg of message" severity='success'> Добавлен Ваш комментарий : {{this.title}}</Message>
        <InputText style="width: 85%" type="text" v-model="title" />
        <Button style="width: 15%" icon="pi pi-times" label="Добавить"
          @click="this.$store.commit('setTitle', this.title) ; this.$store.dispatch('addcomment'); addMessages(); this.$store.commit('setComments', [...this.$store.state.comments, { email: 'Аноним', name: 'Ваш комментарий', body: this.title }]) " />

      </template>

    </Card>

  </div>
  <ProgressSpinner v-if='!$store.state.loader' />
</template>


<script>


export default {
  
  data() {
    return {
    title:this.title,
    message:[],
    comments: [...this.$store.state.comments]

  }
  },
 

  methods: {
    addMessages() {
      this.message = [
       this.title
      ]
    }

  },
  mounted() {
    this.$store.dispatch('fetchcomments')
    this.$store.dispatch('fetchuser')
  },

 

}



</script>

<style lang = 'scss'>
  .container{
    display: flex;
    align-items:center;
    flex-direction: column;
  }
</style>