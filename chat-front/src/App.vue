<template>
  <v-app>
    <v-content>
      <!-- 라우터 -->
      <v-container fluid fill-height aacontainer>
        <router-view></router-view>
      </v-container>
      <!-- 라우터 -->
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    };
  },
};
</script>
