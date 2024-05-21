import React from 'react'
import mobileImge from '.././img/Banner/MOb.png'


function MainLandingPage() {
    return (
        <>

            <div class="min-w-screen min-h-screen h-screen  flex items-center  overflow-hidden relative">
                <div class="w-full max-w-screen rounded  shadow-xl   text-gray-800 relative md:text-left">
                    <div class="md:flex items-center -mx-10">
                        <div class="w-full md:w-1/2  md:mb-0">
                            <div class="relative">
                                <img src={mobileImge} class="w-full relative z-10" alt="" />
                                <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 px-10">
                            <div class="mb-10">
                                <h1 class="font-bold  text-2xl mb-3 text-white font-sans">Welcome to RedBerylLife</h1>
                                <p class="text-sm w-3/4	text-white font-sans">RedBeryl™, the world's first membership that redefines luxury, with tangible advantages that anticipate your expectations.</p>
                            </div>
                            <div>

                                <div class="inline-block align-bottom">
                                    <a href='/login' class="bg-white opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i class="mdi mdi-cart -ml-2 mr-2"></i> Join</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainLandingPage;