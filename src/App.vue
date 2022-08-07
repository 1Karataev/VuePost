
<template>
  <div class="wrapper">
    <TabMenu :model="items" style="display: contents" />
    <router-view>

    </router-view>
  </div>
</template>


<script>
export default {
  computed: {
    username() {
      return this.$router.params.username
    },
  },
  data() {
    return {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          to: '/'
        }

      ],
    }

  },

  methods: {
    goToDashboard() {
      if (isAuthenticated) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/login')
      }
    },
  },
}
</script>



<style lang = 'scss'>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

 .wrapper {
   display: flex;
   margin: auto;
   height: 100vh;
   flex-direction: column;
 }

</style>






