<template>
  show login info
    <div class ='info'>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="rule-form">
            <el-form-item prop="Email">
                <el-input
                    clearable
                    v-model="ruleForm.Email"
                    placeholder="email"
                    prefix-icon="el-icon-user"
                ></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang='ts'>
import {
    ref,
    defineComponent,
    PropType,
    onBeforeMount,
    getCurrentInstance,
    watch,
    nextTick,
    DefineComponent
} from "vue";



export interface ContextProps {
  Email: string;
}

//import {storageSession} from '@/utils/storage'


export default defineComponent({
  name: "Info",
  props: {
    ruleForm: {
      type: Object as PropType<ContextProps>,
      require: true
    }
  },
  setup(props,ctx){
    let vm: any;
    const rules:Object = ref({
      Email: [{required:true,message:"请输入电子邮件",trigger:"blur" }],
    });
    onBeforeMount(() =>{
      vm = getCurrentInstance();
    });

    return {
      rules
    };
  }
})


</script>

<style lang="scss" scoped>
.info {
  width: 30vw;
  height: 48vh;
  background: url("../assets/login.png") no-repeat center;
  background-size: cover;
  position: absolute;
  border-radius: 20px;
  right: 100px;
  top: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 750px) {
    width: 88vw;
    right: 25px;
    top: 22vh;
  }
  .rule-form {
    width: 80%;
    .verify {
      position: absolute;
      margin: -10px 0 0 -120px;
      &:hover {
        cursor: pointer;
      }
    }
    .tips {
      color: #409eff;
      float: right;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .secret {
    color: #409eff;
    &:hover {
      cursor: pointer;
    }
  }
}

</style>
