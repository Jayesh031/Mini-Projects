import React from "react";

export default function Page(){
    return(
        <>
          
            <div className="bg-white w-1/2 h-2/3 rounded-3xl flex justify-between font-serif overflow-hidden shadow-gray-600 z-10 shadow-md ">
                <div className="w-2/4 flex flex-col py-4 px-4 h-full gap-2 items-center">
                    <h1 className="text-4xl font-bold mt-8 mb-3 ">Sign In</h1>
                    <div className="flex items-center gap-3">
                        <a href="#" className="border-2 border-gray-500 px-2 py-1 my-2 text-sm rounded "><i class="ri-facebook-line"></i></a>
                        <a href="#" className="border-2 border-gray-500 px-2 py-1 my-2 text-sm rounded "><i class="ri-google-line"></i></a>
                        <a href="#" className="border-2 border-gray-500 px-2 py-1 my-2 text-sm rounded "><i class="ri-github-fill"></i></a>
                        <a href="#" className="border-2 border-gray-500 px-2 py-1 my-2 text-sm rounded "><i class="ri-linkedin-line"></i></a>
                    </div>
                    <p className="text-gray-500 my-2 text-sm">or use your email password</p>
                    <form className="flex flex-col w-[80%] gap-3">
                        <input type="email" name="email" placeholder="Email" className="border-2 w-full text-sm p-2 rounded-lg bg-gray-300 text-black"/>
                        <input type="password" name="password" placeholder="Password" className="border-2 w-full text-sm p-2 rounded-lg bg-gray-300 text-black" />
                    </form>
                    <p className="text-gray-500 my-2 text-sm">Forget Your Password?</p>
                    <button className="border border-none bg-purple-700 py-2 px-12 rounded-lg text-white">Sign In</button>
                </div>

                <div className="flex flex-1 flex-col items-center justify-center gap-5 bg-purple-700 rounded-l-[7rem]">

                    <h1 className="font-extrabold text-white text-3xl">Hello, friends!</h1>
                    <p className="text-white px-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <button className="border border-white py-2 px-12 rounded-lg text-white">Log In</button>

                </div>
            </div>
        
        </>
    )
}