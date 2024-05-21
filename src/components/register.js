import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import mobileImge from '.././img/Banner/MOb.png'



function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: ""
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
        
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (

    <>
      <div class="font-[sans-serif] text-[#333]">
        <div class="grid lg:grid-cols-2 md:grid-cols-2 items-center gap-4">
          <div class="max-md:hidden h-screen min-h-full">
            <img src={mobileImge} class="w-full h-full object-cover" alt="login" />
          </div>
          <form class="max-w-xl w-full p-6 mx-auto" onSubmit={handleRegister}>
            <div class="mb-12">
              <h3 class="text-4xl font-extrabold text-white">Register New User</h3>
              <p class="text-sm mt-6 text-white">You have an account <a href="/login" class="text-yellow-200 font-semibold hover:underline ml-1 whitespace-nowrap">Login here</a></p>
            </div>
            <div>
              <label class="text-sm block mb-2 text-white">First name</label>
              <div class="relative flex items-center">
                <input type="text" placeholder="First name" onChange={(e) => setFname(e.target.value)}  required className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none" />
              </div>
            </div>
            <div class="mt-8">
              <label class="text-sm block mb-2 text-white">Last name</label>
              <div class="relative flex items-center">
                <input type="text" className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none" placeholder="Last name"
                  onChange={(e) => setLname(e.target.value)} />
              </div>
            </div>
            <div class="mt-8">
              <label class="text-sm block mb-2 text-white">Enter email</label>
              <div class="relative flex items-center">
              <input type="email" className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>
            <div class="mt-8">
              <label class="text-sm block mb-2 text-white">Enter email</label>
              <div class="relative flex items-center">
              <input type="password" className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none" placeholder="Enter password"  onChange={(e) => setPassword(e.target.value)} required />
              </div>
            </div>
            <div class="mt-12">
              <button type="submit" class="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>









  );
}
export default Register;
