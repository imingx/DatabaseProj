<template>
    <el-container class="background">
      <el-aside class="aside" width="show?'64px':'250px'">
        <TeacherNav></TeacherNav>
      </el-aside>
      <el-container class="main">
        <el-header>
          <TeacherHeading></TeacherHeading>
        </el-header>
        <el-main style="padding-left: 10%; padding-right: 10%">
        <el-form label-position="top" v-loading="loading">
          <el-form-item label="学习材料名称">
            <el-col :span="6">
              <el-input placeholder="请输入学习材料名称" v-model="materialName"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="6">
              <el-button v-on:click="buildMaterial" type="primary" >确认</el-button>
            </el-col>
          </el-form-item>
        </el-form>
      </el-main>
      </el-container>
    </el-container>
</template>

<script>
import TeacherNav from '../TeacherNav'
import TeacherHeading from '../TeacherHeading'
export default {
  name: 'BuildMaterial',
  components: {TeacherNav, TeacherHeading},
  data: function () {
    return {
      loading: false,
      userNickName: '',
      userName: '',
      materialName: ''
    }
  },
  mounted: function () {
    this.userNickName = this.cookie.getCookie('userNickName')
    this.userName = this.cookie.getCookie('userName')
  },
  methods: {
    buildMaterial: function () {
      let that = this
      that.loading = true
      this.$http.request({
        url: that.$url + 'BuildMaterial/',
        method: 'get',
        params: {
          userName: that.userName,
          materialName: that.materialName
        }
      }).then(function (response) {
        console.log(response.data)
        that.loading = false
        that.status = response.data
        if (that.status === 0) {
          that.$message.success('创建成功')
        } else {
          that.$message.error('未知错误')
        }
      }).catch(function (error) {
        console.log(error)
        that.loading = false
      })
      that.materialName = ''
    },
    goToHelloWorld: function () {
      this.cookie.clearCookie('userName')
      this.cookie.clearCookie('userNickName')
      this.$router.replace('/')
    }
  }
}
</script>

<style scoped>
 @import "../../../assets/css/nav.css";
 @import "../../../assets/css/back.css";
</style>
