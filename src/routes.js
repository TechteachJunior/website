import Home from './components/Home'
import TypingCourses from './components/TypingCourses'
import ProgramCourses from './components/ProgramCourses'
import GoogleDriveCourses from './components/GoogleDrive'
import About from './components/About'
export const routes = [
  {
     path: '/',
     name: 'Home',
     component: Home,
     meta: {
         auth: false,
         title: 'Bienvenid@ | TechTeach Junior'
     }
  },{
     path: '/typing-courses',
     name: 'TypingCourses',
     component: TypingCourses,
     meta: {
        auth: false,
        title: 'Teclear | TechTeach Junior'
    }
  },{
    path: '/program-courses',
    name: 'ProgramCourses',
    component: ProgramCourses,
    meta: {
        auth: false,
        title: 'Programar | TechTeach Junior'
    }
  },{
    path: '/google-drive-courses',
    name: 'GoogleDriveCourses',
    component: GoogleDriveCourses,
    meta: {
         auth: false,
         title: 'Google Drive | TechTeach Junior'
    }
  },{
    path: '/about',
    name: 'About',
    component: About,
    meta: {
         auth: false,
         title: 'Conócenos | TechTeach Junior'
    }
  }
];