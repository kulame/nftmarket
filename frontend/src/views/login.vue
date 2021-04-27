<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">nft market</div>
            <el-form :model="param" ref="login" label-width="8px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="username">
                        <template #prepend>
                            <el-button icon="el-icon-user"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="password"
                        v-model="param.password"
                        @keyup.enter="submitForm()">
                        <template #prepend>
                            <el-button icon="el-icon-lock"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">login</el-button>
                </div>
                <p class="login-tips">Tips </p>
            </el-form>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            param:{
                username:"admin",
                password:"123123"
            }
        };
    },
    created(){
        console.log("create");
    }
}
</script>
