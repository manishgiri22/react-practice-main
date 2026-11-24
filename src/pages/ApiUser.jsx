import React, { useState, useEffect } from 'react'
import { Button } from '@mantine/core';

const ApiUser = () => {
    const [user,setUsers] = useState([])

    const getUsers = async () =>{  // async parent await is children in same function 
        const user = await fetch (`https://dummyjson.com/users`)   // full data na aaunjel waait garxw then it will start its task
        const finalResponse = await user.json()    // user.json maa chai exact value hunxw so , 
        setUsers(finalResponse.users)
    }

    useEffect(()=>{
        getUsers()    // normal function call for the auto show data when page is render holds data 
    },[])






  return (
    <>
    <h1>Users Information</h1>

    {user.slice(0,4).map((item,index)=>(
           

        <div
        key={item.id}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-200 max-w-2xl mx-auto"
        >
            <Button variant="filled">Button</Button>;
        {/* Header */}
        <div className="bg-slate-900 p-6 flex items-center gap-5">
            <img
            src={item.image}
            alt=""
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
            />

            <div className="text-white">
            <h2 className="text-2xl font-bold">
                {item.firstName} {item.lastName}
            </h2>
            <p className="text-slate-300 text-sm mt-1">
                {item.company.title}
            </p>
            <span className="inline-block mt-3 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                {item.role}
            </span>
            </div>
        </div>

        <div className="p-6 space-y-6">

            {/* Personal Details */}
            <div>
            <h3 className="text-lg font-bold text-slate-800 border-b pb-2 mb-4">
                Personal Details
            </h3>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
                <div>
                <p className="text-gray-400">First Name</p>
                <p className="font-semibold text-gray-800">{item.firstName}</p>
                </div>
                <div>
                <p className="text-gray-400">Last Name</p>
                <p className="font-semibold text-gray-800">{item.lastName}</p>
                </div>
                <div>
                <p className="text-gray-400">Age</p>
                <p className="font-semibold text-gray-800">{item.age}</p>
                </div>
                <div>
                <p className="text-gray-400">Gender</p>
                <p className="font-semibold text-gray-800">{item.gender}</p>
                </div>
                <div className="col-span-2">
                <p className="text-gray-400">Email</p>
                <p className="font-semibold text-gray-800 break-all">{item.email}</p>
                </div>
                <div className="col-span-2">
                <p className="text-gray-400">Phone</p>
                <p className="font-semibold text-gray-800">{item.phone}</p>
                </div>
            </div>
            </div>

            {/* Physical Details */}
            <div>
            <h3 className="text-lg font-bold text-slate-800 border-b pb-2 mb-4">
                Physical Details
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-slate-50 p-3 rounded-xl">
                <p className="text-xs text-gray-400">Height</p>
                <p className="font-bold text-slate-800">{item.height} cm</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl">
                <p className="text-xs text-gray-400">Weight</p>
                <p className="font-bold text-slate-800">{item.weight} kg</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl">
                <p className="text-xs text-gray-400">Blood Group</p>
                <p className="font-bold text-slate-800">{item.bloodGroup}</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl">
                <p className="text-xs text-gray-400">Eye Color</p>
                <p className="font-bold text-slate-800">{item.eyeColor}</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl">
                <p className="text-xs text-gray-400">Hair Color</p>
                <p className="font-bold text-slate-800">{item.hair.color}</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl">
                <p className="text-xs text-gray-400">Hair Type</p>
                <p className="font-bold text-slate-800">{item.hair.type}</p>
                </div>
            </div>
            </div>

            {/* Address */}
            <div>
            <h3 className="text-lg font-bold text-slate-800 border-b pb-2 mb-4">
                Address
            </h3>

            <div className="bg-slate-50 rounded-xl p-4">
                <p className="font-semibold text-slate-800">
                {item.address.address}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                {item.address.city}, {item.address.state}
                </p>
                <p className="text-sm text-gray-500">
                {item.address.postalCode}, {item.address.country}
                </p>
            </div>
            </div>

            {/* Company */}
            <div>
            <h3 className="text-lg font-bold text-slate-800 border-b pb-2 mb-4">
                Company Information
            </h3>

            <div className="bg-blue-50 rounded-xl p-4 space-y-3">
                <div>
                <p className="text-xs text-gray-400">Company Name</p>
                <p className="font-semibold text-slate-800">{item.company.name}</p>
                </div>
                <div>
                <p className="text-xs text-gray-400">Department</p>
                <p className="font-semibold text-slate-800">{item.company.department}</p>
                </div>
                <div>
                <p className="text-xs text-gray-400">Job Title</p>
                <p className="font-semibold text-slate-800">{item.company.title}</p>
                </div>
            </div>
            </div>

            {/* Education */}
            <div>
            <h3 className="text-lg font-bold text-slate-800 border-b pb-2 mb-4">
                Education
            </h3>
            <p className="bg-slate-50 rounded-xl p-4 text-sm font-medium text-slate-700">
                {item.university}
            </p>
            </div>

        </div>
        </div>


        )
    )}

    
    
    
    </>
   
  )
}

export default ApiUser