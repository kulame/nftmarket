<template>
  <div class="header">
    <div class="title" @click="router.push('/')">
      NFT电子商城
    </div>
  </div>
</template>

<script lang="ts" setup>

// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
</script>

<style scoped lang="stylus">

.header {
  width 100%
  height 100%
  background #fff
  display flex
  justify-content space-between
  align-items center
  padding 0 20px
  box-sizing border-box
  font-weight bold

  .title {
    font-size 20px
    cursor pointer
  }

  .go-github {
    cursor pointer
    font-size 16px

    .icon {
      font-size 20px
    }
  }
}
</style>
