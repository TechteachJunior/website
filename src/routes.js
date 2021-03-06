import Home from './components/Home'
import ProgramCourses from './components/ProgramCourses'
import GoogleDriveCourses from './components/GoogleDrive'
import MinecraftCourses from './components/MinecraftCourses'
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
    path: '/minecraft-courses',
    name: 'MinecraftCourses',
    component: MinecraftCourses,
    meta: {
         auth: false,
         title: 'Minecraft | TechTeach Junior'
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