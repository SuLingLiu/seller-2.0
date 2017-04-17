<template>
  <div class="app-wrapper">
    <v-header :seller="seller"></v-header>
    <div class="main-nav">
      <div class="nav-item">
    	 <router-link class="nav-link" to="/goods">goods</router-link>
      </div>
      <div class="nav-item">
       <router-link class="nav-link" to="/ratings">ratings</router-link>
      </div>
      <div class="nav-item">
       <router-link class="nav-link" to="/seller">seller</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header';
const ERR_OK = 0;

export default {
  name: 'app',
  data() {
    return {
      seller: {}
    };
  },
  created() {
    this.$http.get('/api/seller').then(response => {
    // success callback
      response = response.body;
      if (response.errno === ERR_OK) {
        this.seller = response.data;
      }
    }, response => {
      // error callback
      console.log('seller--error');
    });
  },
  components: {
    'v-header': header
  }
};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
