<template>
  <transition name="head-login-register">
    <div class="welcome">
    <div class="navigator">
      <div class="navigator-left">
        <i class="el-icon-s-platform"><span class="el-icon-s-platform-text">&nbsp;&nbsp;FreeTalk课程平台</span></i>
      </div>
      <div class="navigator-right">
        <span><el-button class="buttons" @click="goToStudentLogin">学生登录</el-button></span>
        <span>&nbsp;&nbsp;</span>
        <span><el-button class="buttons" @click="goToTeacherLogin">教师登录</el-button></span>
      </div>
  </div>
    <div class="introduction">
      <el-carousel height="600px">
        <el-carousel-item v-for="(item, index) in headImg" :key="index">
          <img :src="item.src" style="width: 100%; height: 100%;" alt="">
          <div class="cover">
            {{item.title}}<br>
            <span style="font-size: 25px">{{item.subTitle}}</span>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="line_1">
      <div class="line-1-head"><span class="div-head">其他推荐</span></div>
      <br><br>
      <div class="line-1-content">
        <el-row class="this-el-row">
          <el-col :span="5" :offset="2" >
            <el-card >
              <img
                :src="cardImg_group.src"
                alt=""
                style="width: 100%; height: auto"/>
              <p>{{cardImg_group.title}}</p>
            </el-card>
          </el-col>
          <el-col :span="5" :offset="2" >
            <el-card >
              <img
                style="width: 100%; height: auto"
                :src="cardImg_book.src"
                alt=""/>
              <p>{{cardImg_book.title}}</p>
            </el-card>
          </el-col>
          <el-col :span="5" :offset="2" >
            <el-card >
              <img
                :src="cardImg_join.src"
                alt=""
                style="width: 100%; height: auto"/>
              <p>{{cardImg_join.title}}</p>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="line_2">
      <div class="line-2-head"><span class="div-head">仍在优化...</span></div>
      <div class="timeline">
        <el-row>
          <el-col :span="12">
            <el-timeline>
              <el-timeline-item timestamp="2021/9/15" placement="top">
                <el-card>
                  <strong style="font-size: 20px">Initial Commit</strong>
                  <p>Submitted on <i>2021/9/15 17:00</i></p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2021/10/9" placement="top">
                <el-card>
                  <strong style="font-size: 20px">HomeWork One Completed</strong>
                  <p>Submitted on <i>2021/10/14 22:18</i></p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2021/11/3" placement="top">
                <el-card>
                  <strong style="font-size: 20px">The Representation On DB Design</strong>
                  <p>Submitted on <i>2021/11/3 16:16</i></p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </el-col>
          <el-col :span="12">
            <el-timeline>
              <el-timeline-item timestamp="2021/11/23" placement="top">
                <el-card>
                  <strong style="font-size: 20px">The Second Check</strong>
                  <p>Submitted on <i>2021/11/23 01:20</i></p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2021/11/?" placement="top">
                <el-card>
                  <strong style="font-size: 20px">HomeWork Two Completed</strong>
                  <p>Submitted on <i>2021/12/12 20:08</i>></p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="202?/?/?" placement="top">
                <el-card>
                  <strong style="font-size: 20px">To be Continued...</strong>
                  <p><span></span></p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="copyright">
      <div class="copyright-block">
        <div class="first-copyright-head">Platform</div>
        <div class="first-copyright-content">壹课，发现课程之美</div>
      </div>
      <div class="copyright-block">
        <div class="author-head">Developers</div>
        <div class="author-task">
          <span class="author-task">oyk---Vue设计</span>
        </div>
        <div class="author-task">
          <span class="author-task">tqj---Vue服务器链接</span>
        </div>
        <div class="author-task">
          <span class="author-task">gmm---后端框架</span>
        </div>
      </div>
      <div class="copyright-block">
        <div class="third-copyright-head">Relatives</div>
        <div class="third-copyright-link">
          <p><a href="https://github.com/fangzhou0216/buaa_db" class="links">@方舟</a></p>
          <p><a href="https://www.icourse163.org/" class="links">中国大学MOOC</a></p>
        </div>
        <div class="admin-enter-item">
          <p class="admin-enter-text" @click="goToAdminLogin">
            Be&nbsp;an&nbsp;Admin?
          </p>
        </div>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import technology from '../assets/img/technology.jpg'
import book from '../assets/img/book.jpg'
import Computer from '../assets/img/Computer.jpg'
import cardBook from '../assets/img/300-240-book.png'
import cardJoin from '../assets/img/300-240-add.jpg'
import cardGroup from '../assets/img/300-240-group.jpg'

export default {
  data: function () {
    return {
      headImg: [
        {
          'title': '数据集成平台',
          'subTitle': 'Data Integration Platform',
          'src': technology
        },
        {
          'title': '更好的学习体验',
          'subTitle': 'Better Study Experience',
          'src': book
        },
        {
          'title': '合作与共享',
          'subTitle': 'Corporation and Sharing',
          'src': Computer
        }
      ],
      cardImg_group: {
        'id': 'group',
        'title': '讨论交流',
        'src': cardGroup
      },
      cardImg_join: {
        'id': 'join',
        'title': '加入我们',
        'src': cardJoin
      },
      cardImg_book: {
        'id': 'book',
        'title': '资料查询',
        'src': cardBook
      },
      fullscreenLoading: false
    }
  },
  methods: {
    goToStudentLogin () {
      this.$router.push({
        name: 'StudentLogin'
      })
    },
    goToTeacherLogin () {
      this.$router.push({
        name: 'TeacherLogin'
      })
    },
    goToAdminLogin () {
      this.$router.push({
        name: 'AdminLogin'
      })
    }
  }
}
</script>

<style scoped>
  @import "../assets/css/HelloWorld/block1.css";
  @import "../assets/css/HelloWorld/block2.css";
  @import "../assets/css/HelloWorld/copyright.css";
  @import "../assets/css/HelloWorld/introduction.css";
  @import "../assets/css/HelloWorld/navigator.css";
  @import "../assets/css/Transition/head-login-register.css";
  .welcome {
    margin-left: 80px;
    margin-right: 80px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }

</style>
