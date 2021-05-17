<template>
    login
    <div class="login">
        <info :ruleForm='contextInfo' @on-behavior='onlogin' @refreshVerify="refreshVerify"/>
    </div>
</template>

<script language='ts'>

import { defineComponent,reactive } from 'vue'
//import info from '@/components/Info.vue'
export default defineComponent({
  name: 'Login',
})
</script>