
import { Route,Routes } from 'react-router-dom'
import './app.css'
import Homepage from './Pages/Homepage.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'
import SignUp from './Pages/SignUp.jsx'
import Login from './Pages/loginpage.jsx'
//import CoursesList from './Pages/Courses/CoursesList.jsx'
import Contact from './Pages/Contact.jsx'
import Projects from './Pages/projects.jsx'
import Events from './Pages/AboutPage.jsx'
import DiniedPage from './Pages/DiniedPage.jsx'
//import CourseDescription from './Pages/Courses/CourseDescription.jsx'
import RequireAuth from './Pages/RequireAuth.jsx'
//import CreateCourse from './Pages/Courses/CreateCourse.jsx'
import Profile from './Pages/User/Profile.jsx'
import EditProfile from './Pages/User/EditProfile.jsx'
import Checkout from './Pages/Payment/Checkout.jsx'
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess.jsx'
import CheckoutFail from './Pages/Payment/CheckoutFail.jsx'
//import DisplayLectures from './Pages/lectures/DisplayLectures.jsx'
//import AddLecture from './Pages/lectures/AddLecture.jsx'
import Dashboard from './Pages/Admin/Dashboard.jsx'
//import AddQuizForm from './Pages/Quiz/AddQuiz.jsx'
//import DisplayQuiz from './Pages/Quiz/AttemptQuiz.jsx'
import ShowContactUsInfo from './Pages/ShowContactUsInfo.jsx'
import CommunityChat from './components/CommunityChat.jsx'
import Otp from './components/Otp.jsx'


export default function App() {

  return (
      <Routes>
        <Route path='/chat/community' element={<CommunityChat/>}/>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<Events/>}/>
        <Route path='/otp' element={<Otp/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dinied' element={<DiniedPage/>}/>
        
        <Route element={<RequireAuth allowedRoles={["ADMIN"]}/>}>
            <Route path='/contact/showData' element={<ShowContactUsInfo/>}/>
            <Route path='/admin/dashboard' element={<Dashboard/>}/> 
        </Route>
        <Route element={<RequireAuth allowedRoles={["ADMIN","USER"]}/>}>
            <Route path='/user/profile' element={<Profile/>}/>
            <Route path='/user/editprofile' element={<EditProfile/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/checkout/success' element={<CheckoutSuccess/>}/>
            <Route path='/checkout/fail' element={<CheckoutFail/>}/>
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
  )
}
