import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import HeroBanner from "./components/HeroBanner";
// import MissionVision from "./pages/MissionVision";
// import About from "./pages/About";
// import Quotes from "./pages/Quotes";
// import Courses from "./pages/Courses";
// import Feedback from "./pages/Feedback";
// import Speakers from "./pages/Speakers";
import Layout from "./components/Layout";
import Team from "./pages/Team";
import Donate from "./pages/Donate";
import Community from "./pages/Community";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Solutions from "./pages/Solutions";
import ForgotPassword from "./pages/ForgotPassword";
import CoursePage from "./pages/CoursePage";
import UserProfile from "./pages/UserProfile";
import Profile from "./pages/user/Profile";
import PostToCommunity from "./pages/PostToCommunity";
import EditCommunity from "./pages/EditCommunity";
import EBooks from "./pages/eBooks/EBooks";

import UserCourse from "./pages/user/UserCourse";
import Course from "./pages/Course";
import Payment from "./components/Payment";
import DonationPage from "./pages/DonationPage";
import FeedbackRead from "./pages/FeedbackReadPage";

import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import CourseDetails from "./pages/CourseDetails";
import { getDatabase, ref, get } from "firebase/database";
import { app, auth } from "./firebase.config";
import EBooksDetail from "./pages/eBooks/EBooksDetail";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />

          <Route
            path="/team"
            element={
              <Layout>
                <Team />
              </Layout>
            }
          />
          <Route
            path="/donate"
            element={
              <Layout>
                <DonationPage />
              </Layout>
            }
          />
          <Route
            path="/notification"
            element={
              <Layout>
                <Community />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                 <Profile />
              </Layout>
                
              
            }
          />
          <Route
            path="/usercourse"
            element={
              <Layout>
                <UserCourse />
              </Layout>
            }
          />
          <Route
            path="/user"
            element={
              <Layout>
                <UserProfile />
              </Layout>
            }
          />
          <Route
            path="/ebooks"
            element={
              <Layout>
                <EBooks />
              </Layout>
            }
          />
          <Route
            path="/ebooksDetail"
            element={
              <Layout>
                <EBooksDetail />
              </Layout>
            }
          />
          <Route
            path="/courses"
            element={
              <Layout>
                <CoursePage />
              </Layout>
            }
          />
          <Route
            path="/forgotpassword"
            element={
              <Layout>
                <ForgotPassword />
              </Layout>
            }
          />
          <Route
            path="/payment"
            element={
              <Layout>
                <Payment />
              </Layout>
            }
          />

          <Route
            path="/courseDetails"
            element={
              <Layout>
                <Course />
              </Layout>
            }
          />

          <Route
            path="/postToCommunity"
            element={
              <Layout>
                <PostToCommunity />
              </Layout>
            }
          />
          <Route
            path="/EditCommunity"
            element={
              <Layout>
                <EditCommunity />
              </Layout>
            }
          />
          <Route
            path="/FeedbackRead"
            element={
              <Layout>
                <FeedbackRead />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        autoClose={1000}
        closeOnClick
        toastStyle={{ marginTop: "60px" }}
      />
    </>
  );
}

export default App;
