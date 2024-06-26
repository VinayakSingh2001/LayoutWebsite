import React from "react";
import Memberform from "../components/Memberform";
import { useNavigate } from "react-router-dom";
import { getDatabase, set, ref, get } from "firebase/database";
import { app, auth } from "../firebase.config";
import Courseform from "../components/Courseform";
import { ToastContainer } from "react-toastify";

const CourseJoin = () => {
  // const nav = useNavigate();
  // const addCourse=async(e)=>{

  //   e.preventDefault();
  //   const user = auth.currentUser;
  //   if(user){
  //   const courseId = "ABC123";
  //   if(window.confirm('Do you want to enroll in this course')){

  //   const db = getDatabase(app);
  //   const userCourseRef = ref(db,`course/${user.uid}`);

  //   const userCourseSnapshot = await get(userCourseRef);
  //   let userCourseData = userCourseSnapshot.val();
  //   if(!userCourseData) userCourseData=[];

  //   if(!userCourseData.includes(courseId)){
  //       userCourseData.push(courseId);
  //       set(userCourseRef, userCourseData);
  //       alert("Enrolled");
  //   }else{
  //     alert('You are already enrolled in this course');
  //   }
  // }
  // }else{
  //   alert('Please login to enroll in this course');
  //   // nav('/login');
  // }
  // }
  //     if(!userCourseData.includes(courseId)){
  //         userCourseData.push(courseId);
  //         set(userCourseRef, userCourseData);
  //         toast.success("Enrolled");
  //     }else{
  //       toast.error('You are already enrolled in this course');
  //     }
  //   }
  // }else{
  //   if (!localStorage.getItem("notLoggedInToastShown")) {
  //     toast.error("Please login to enroll in this course");
  //     // Set a flag indicating that the toast has been shown
  //     localStorage.setItem("notLoggedInToastShown", "true");
  //     // Redirect to login page

  //   }
  //   }

  return (
    <div className="py-20 px-12">
      <div className="bg-[#edf6f9] px-5 flex-col md:flex-row border rounded-lg flex justify-center items-center gap-5">
        <div className="py-5 flex justify-center ">
          <Memberform />
        </div>
        <div className="py-5 flex justify-center">
          <Courseform />
        </div>
      </div>
    </div>
  );
};
export default CourseJoin;
