import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';



export default function Contact() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors)

  const submitFunction = async(formData, e) =>{ 
    let axios_config = {
        method: 'post',
        url: '/api/contact',
        headers: {
            'Content-Type':'application/json'
        },
        data: formData,
    };
    
    try {
      const response = await axios(axios_config);
      if (response.status==200) {
          e.target.reset();
          alert("Message sent!");
        }
    } catch (err) {
        console.error(err);
    }   
 }



  return (
    <div className="min-h-screen w-full bg-gray-100 flex justify-center">
      <div className="w-full min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Logo"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Contact me!</h2>
          
          </div>
          <form onSubmit={handleSubmit(submitFunction)} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label className="sr-only">
                  Name
                </label>
                <input
                  {...register("name", {required:'Name is required' ,minLength: {value: 4, message: 'Name must be at least 4 characters'}})}

                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                  id="name"
                  type="text"
                />
              </div>
              <div>
                <label className="sr-only">
                  Email
                </label>
                <input
                  {...register("email", {required:'Email is required'})}

                  className="rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                  id="email"
                  type="email"
                />
              </div>
              <div>
                <label className="sr-only">
                  Message
                </label>
                 <textarea
                  {...register("message", {required:'Message is required', minLength: {value: 10, message: 'Message must be at least 10 characters'}})}
                  className="rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Message"
                   id="message"
                 ></textarea>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                </span>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
