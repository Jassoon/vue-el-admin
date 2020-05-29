<template>
    <section class="login-bg">
        <el-form :model="LoginForm" :rules="loginRules" ref="loginform" class="loginform">
            <section class="login-title"></section>
            <el-form-item>
                <el-input name="username" type="text" v-model="LoginForm.username"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input name="password" :type="passwordType" v-model="LoginForm.password"></el-input>
            </el-form-item>
            <el-button class="login-button" type="primary" @click.native.prevent="goRequest"></el-button>
        </el-form>
    </section>
</template>

<script>
import {loginrequest} from "@/api/request"
export default {
    data(){
        return{
            LoginForm:{
                username:"",
                password:""
            },
            passwordType: "password",
            loginRules: {
                username: [
                { required: true, trigger: "blur", message: "请输入用户名" }
                ],
                password: [{ required: true, trigger: "blur", message: "请输入密码" }]
            },
        }
    },
    methods:{
        goRequest(){
            
            loginrequest("/login.json",{"s":"sds"}).then(res=>{
                const data = res.data
                if(data.code === 200){
                    // this.$store.dispatch("Login",data).then(e=>{
                        this.$router.push({path:"/"})
                    // })
                }
                console.log(data)
            })
        }
    }

}
</script>
<style scoped>
.login-bg{ width: 100%; height: 100%;}
.loginform{width: 500px; height: 360px; margin:0 auto; margin-top:200px;}
.login-title{text-align: center;height: 60px; line-height: 60px; font-weight: bold;}
.svg-container {
    padding: 6px 5px 6px 15px;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .login-button{width: 100%;}
</style>
