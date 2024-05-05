import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import Login from "../components/Login"; // Corrected import path
import { useForm } from 'react-hook-form';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
    // Implement your signup logic here
  };

  const [showLoginModal, setShowLoginModal] = useState(false); // State to manage login modal visibility

  const handleCloseModal = () => {
    // Define a function to handle modal closure
    const modal = document.getElementById('my_modal_3');
    if (modal) {
      modal.close();
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div id="my_modal_3" className="relative border-[3px] shadow-md p-5 rounded-md w-[600px]">
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2" onClick={handleCloseModal}>
            X
          </Link>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg">Signup</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="enter your Fullname"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}
              /><br/>
              {errors.name && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br/>
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />  
              <br/>
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
        {showLoginModal && <Login />} {/* Render the Login component conditionally */}
      </div>
    </>
  );
}

export default Signup;
