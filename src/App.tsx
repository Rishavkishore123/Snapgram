import {Routes, Route} from 'react-router-dom';

import './globals.css';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './root/RootLayout';
import { Toaster } from "@/components/ui/toaster"

import {Home ,AllUsers, Saved,Explore,CreatePost,
  EditPost,PostDetails, Profile, UpdateProfile} from './root/pages';







function App() {
  return (
    <main className="flex h-screen">
      <Routes>

        {/* public routes  would be able to see the sign in & signup*/}
        <Route element ={<AuthLayout/>}>
        <Route path="/sign-in" element={<SigninForm/>} />
        <Route path="/sign-up" element={<SignupForm/>} />
        </Route>



        {/* private routes  */}

        <Route element={<RootLayout />}>
        <Route index element ={<Home/>}/>
        <Route path= "/explore" element={<Explore />} />
        <Route path= "/saved" element={<Saved />} />
        <Route path= "/allusers" element={<AllUsers />} />
        <Route path= "/create-post" element={<CreatePost />} />
        <Route path= "/update-post/:id" element={<EditPost />} />
        <Route path= "/posts/:id" element={<PostDetails />} />
        <Route path= "/profile/:id/*" element={<Profile />} />
        <Route path= "/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>
      <Toaster />

      
    </main>
  )
}

export default App