import React, { useState, useEffect } from 'react'
import Layout from '../Layout/Layout'
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";




function MyProfile() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <>
      <Layout>
        <div class="p-16">
          {userDetails ? (
            <div class="p-8 bg-white shadow mt-2">
              <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="relative">
                  <div class="w-28 h-28 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                    <img
                      className="h-38 w-38 rounded-full"
                      src={userDetails.photo}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class=" text-center border-b ">
                <h1 class="text-4xl font-medium text-gray-700">{userDetails.firstName}</h1>
                <p class="font-light text-gray-600 mt-3">{userDetails.email}</p>

              </div>

            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>

      </Layout>
    </>
  )
}

export default MyProfile