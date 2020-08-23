import Home from './components/Home'
import Teach from './components/Teach'
import TypingCourses from './components/TypingCourses'
import ProgramCourses from './components/ProgramCourses'
import GoogleDriveCourses from './components/GoogleDrive'
import About from './components/About'
import InstagramPage from './components/InstagramPage'
export const routes = [
  {
     path: '/',
     name: 'Home',
     component: Home
  },{
     path: '/teach',
     name: 'Teach',
     component: Teach
  },{
     path: '/typing-courses',
     name: 'TypingCourses',
     component: TypingCourses
  },{
    path: '/program-courses',
    name: 'ProgramCourses',
    component: ProgramCourses
  },{
    path: '/google-drive-courses',
    name: 'GoogleDriveCourses',
    component: GoogleDriveCourses
  },{
    path: '/about',
    name: 'About',
    component: About
  }
  ,{
    path: '/instagram-page',
    name: 'InstagramPage',
    component: InstagramPage
  }
];