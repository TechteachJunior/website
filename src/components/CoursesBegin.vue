<template>
  <ul class="d-flex flex-wrap">
    <li v-for="courseData in courseDataList" :key="courseData.id" class="col-md-6 col-xl-3">
      <a v-bind:href="courseData.url" target="_blank">
        <div class="card">
          <div class="card-header d-flex align-items-center"><img class="img-fluid course-logo" v-bind:src="courseData.logo"><span class="course-title">{{courseData.name}}</span></div>
          <div class="card-body">
            <div class="text-center">
              <img class="img-fluid" v-bind:src="courseData.image">
            </div>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-between align-items-center">
              <span class="course-type-personalized"><img class="img-fluid" v-bind:src="courseData.type"></span>
              <span class="course-level">{{courseData.level}}</span></div>
            <div class="w-100 mb-2"></div>
            <div class="decription-text text-justify">{{courseData.description}}</div>
          </div>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "Course",
    data() {
      return {
        courseDataList: []
      };
    },
    mounted () {
      axios.get("course.json").then(response => (this.courseDataList = response.data.begin));
    }
  }
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Cabin+Sketch&family=Poppins:wght@400;700&display=swap');

  $blue: #282C82;
  $purple: #4F539E;
  $purple-light: #A5B4E5;
  $yellow: #F8EB7C;
  $light: #FAF6F6;

</style>
