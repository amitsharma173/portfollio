import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { RiContactsBook3Fill } from "react-icons/ri";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bxojgeea", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        {/* Contact Header */}
        <div className="flex space-x-1 text-1xl md:text-2xl">
          <h1 className="text-red-600 font-semibold text-2xl mb-2 flex mt-2 gap-2 hover:scale-110 duration-200 cursor-pointer">
            <RiContactsBook3Fill className="hover:scale-110 duration-200 rounded-full mt-1 cursor-pointer" />
            <span>Contact ME</span>
          </h1>
        </div>
        <span>Please fill out the form below to contact me</span>

        {/* Flex container for Form and Contact Details */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-5 space-y-10 md:space-y-0 md:space-x-10">
          
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
            className="bg-slate-200 w-full md:w-1/2 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">FullName</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                placeholder="Enter your Query"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>

          {/* Contact Details */}
          <div className="bg-slate-100 w-full md:w-1/2 px-8 py-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-2">
              <strong>Phone: </strong> +91-90417-29456
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email: </strong> amit_sharma173@yahoo.in
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Address: </strong> Jalandhar City, Punjab- India
            </p>
            <p className="text-gray-700">
              You can reach me via phone or email. Looking forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
