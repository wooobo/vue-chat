<template>
  <div class="inner-wrap">
    <v-text-field
      v-model="msg"
      label="chat"
      placeholder="보낼 메세지를 입력하세요."
      solo
      @keyup.13="submitMessageFunc"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'MessageForm',
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    submitMessageFunc() {
      if (this.msg.length === 0) return false;
      this.$emit('submitMessage', this.msg);
      this.msg = '';
      return true;
    },
  },
};
</script>

<style>
</style>
