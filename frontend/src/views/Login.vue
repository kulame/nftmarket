<template>
    login
    <div class="login">
        <info :ruleForm='contextInfo' @on-behavior='onlogin' @refreshVerify="refreshVerify"/>
    </div>
</template>

<script lang='ts'>

import { defineComponent,reactive } from 'vue'
import { useRouter } from "vue-router"
import info, { ContextProps } from '@/components/Info.vue'

export default {
  name: 'Login',
  components:{
    info
  },
  setup(){
    const router = useRouter();
    const contextInfo:ContextProps = reactive({
      Email:"",
    });

    return {
      contextInfo,
      router
    };
  }
};
</script>
