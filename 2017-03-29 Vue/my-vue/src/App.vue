<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
        <div class="container">
          <a href="#" class="navbar-brand">
            <i class="glyphicon glyphicon-time"></i>
            计划表
          </a>
          <ul class="nav navbar-nav">
            <li><a v-link="'/home'"></a></li>
            <li><a v-link="'/time-entries'"></a></li>
          </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-offset-3 col-sm-9">
        <router-view></router-view>
      </div>
    </div>
    <div class="container">
      <div class="col-sm-3">
        <sidebar :time="totalTime"></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar.vue'

  export default {
    components: { 'sidebar': Sidebar },
    ready () {
      this.$http.get('http://localhost:8888/time')
        .then(function (ret) {
          this.totalTime = ret.data.time
        })
        .then(function (err) {
          console.log(err)
        })
    },
    data () {
      return {
        totalTime: 0
      }
    },
    events: {
      timeUpdate (timeEntry) {
        this.totalTime += parseFloat(timeEntry.totalTime)
      },
      deleteTime (timeEntry) {
        this.totalTime -= parseFloat(timeEntry.totalTime)
      }
    }
  }
</script>
