import { ChangeEvent, useState } from "react";
import { Link , useNavigate } from "react-router-dom"
import {SignupInput} from "@kushal_raj_pareek/medium-common/src/zod" 
import  axios from "axios";
import { BACKEND_URL } from "../config";
import React from "react";

export const Auth = ({type} : {type: "signup" | "signin"}) =>{
   const navigate = useNavigate();
    const [postInputs,setPostInputs] = useState<SignupInput>({
        name : "",
        username: "",
        password: ""
    });

    async function sendRequest(){
// try{
//     const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
//     const jwt = response.data.jwt;
//     localStorage.setItem("token", jwt);
await new Promise(resolve => setTimeout(resolve, 2000)); // 2000 ms = 2 seconds

    navigate("/Tripsage");
// }catch(e){
// alert("error while signup")
// }
    }
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
          <div className="px-10">
          <div className="text-3xl font-bold">
           {type === "signin"? "welcome back":"Create an account"}
        </div>
        <div className="text-slate-500">
            {type === "signin" ? "Don't have an account" : "Already have an account?"}
            <Link className="pl-2 underline" to={type === "signin"?"/signup":"/signin"}> 
            {type ==="signin"?"sign up": "sign in"}
            </Link>
        </div>
          </div>
         <div className="pt-4">
       {type === "signup"?  <LabledInput label="Name" placeholder="Kushal raj pareek" onChange={(e) =>{
setPostInputs({
    ...postInputs,
    name: e.target.value
          })
          }}/>: null}
              <LabledInput label="Username" placeholder="Krp@gmail.com" onChange={(e) =>{
setPostInputs({
    ...postInputs,
    username: e.target.value
          })
          }}/>
              <LabledInput label="Password" type={"password"} placeholder="........" onChange={(e) =>{
setPostInputs({
    ...postInputs,
    password: e.target.value
          })
          }}/>
          <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            {type === "signup" ? "signup" : "signin"}
          </button>

         </div>
        </div>
        </div>
       
    </div>
}

interface LabledInputType{
    label: string;
    placeholder: string;
    onChange: (e : ChangeEvent<HTMLInputElement>) => void;
    type? : string
}
function LabledInput({label,placeholder,onChange,type}: LabledInputType){
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}