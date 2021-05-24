<template>
    <div class ='info'>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="rule-form">
            <el-form-item prop="email">
                <el-input
                    clearable
                    v-model="ruleForm.email"
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

//import {storageSession} from '@/utils/storage'

export default defineComponent({
    name:"Info"
})
</script>