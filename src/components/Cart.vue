<template>

  <Card style="margin: 5px 0 5px 0; width: 100%;">

    <template #title>
      {{post.title}}
    </template>
    <template #content>
      {{post.body}}
    </template>
    <template #footer>
      <Button icon="pi pi-times" label="Открыть"
        @click="$router.push(`/${post.id}`), $store.commit('setPost', post), $store.commit('setUserId', post.userId), $store.commit('setPostId', post.id)"
        class="p-button-secondary btn" style="margin-left: .5em" />

    </template>
  </Card>






</template>
  





<script>

 export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }

  }

</script>


<style lang="scss">






.btn{
background: #2196F3 !important;
margin-top: 10px !important;
margin-left: 0 !important;
}


</style>