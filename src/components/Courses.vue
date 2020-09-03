<template>
  <ul class="d-flex flex-wrap">
    <li v-for="courseData in courseDataList" :key="courseData.id" class="col-md-6 col-xl-3">
      <div class="card">
        <div class="card-header d-flex align-items-center"><img class="img-fluid course-logo" v-bind:src="courseData.logo"><span class=" course-title">{{courseData.name}}</span></div>
        <div class="card-body">
          <div class="text-center">
             <!-- <b-button id="show-btn" @click="$bvModal.show('courseDescription')">
              <img class="img-fluid" v-bind:src="courseData.image">
            </b-button> -->
            <a v-bind:href="courseData.url" target="_blank">
              <img class="img-fluid" v-bind:src="courseData.image">
            </a>
            <b-modal size="lg" id="courseDescription" hide-footer>
              <template v-slot:modal-title>
                <div class="d-flex align-items-center"><img class="img-fluid course-logo" v-bind:src="courseData.logo"><span class="ml-3 course-title">{{courseData.name}}</span></div>
              </template>
              <div class="d-flex">
                <div class="course-image">
                  <a href="https://scratch.mit.edu/projects/editor/?tutorial=getStarted" target="_blank"><img class="img-fluid" v-bind:src="courseData.image"></a>
                </div>
                <div class="course-description d-flex flex-column justify-content-between w-100 px-3">
                  <div>
                    <p class="decription-text">{{courseData.description}}</p>
                  </div>
                  <div>
                    <div class="couse-level"><small>{{courseData.level}}</small></div>
                    <a v-bind:href="courseData.url" target="_blank">Ir al curso</a>
                  </div>
                </div>
              </div> 
                <b-button class="mt-3 w-auto float-right" block @click="$bvModal.hide('courseDescription')">Volver</b-button>
            </b-modal>
          </div>
        </div>
         <div class="card-footer">
          <div class="d-flex justify-content-between align-items-center">
            <span class="course-type"></span>
            <span class="course-level">{{courseData.level}}</span></div>
          <div class="w-100 mb-2"></div>
          <div class="decription-text text-justify">{{courseData.description}}</div>
        </div>
      </div>
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
      axios.get("course.json").then(response => (this.courseDataList = response.data.courses));
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
