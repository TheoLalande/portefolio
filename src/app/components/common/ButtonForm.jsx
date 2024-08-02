"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../utils/send-email";

const Button = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const handleClick = () => {
    setIsClicked(true);
  };

  const onSubmit = (data) => {
    console.log(data);
    sendEmail(data);
    reset();
    closeForm();
  };

  const closeForm = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClicked(false);
      setIsClosing(false);
    }, 500); // Same duration as the animation
  };

  return (
    <div>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 z-50">
        <button
          className="bg-black text-white border-[1px] border-black rounded-full p-2 w-24"
          onClick={handleClick}
        >
          Contact
        </button>
      </div>

      {isClicked && (
        <div
          className={`fixed bottom-0 right-4 z-50 w-80 p-4 bg-white border-2 border-gray-300 rounded-md shadow-lg ${
            isClosing ? "animate-slide-down" : "animate-slide-up"
          }`}
        >
          <button
            className="absolute top-2 right-2 text-black"
            onClick={closeForm}
          >
            X
          </button>
          <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-lg mb-2">Contactez-nous</h1>

            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Entrez votre Email"
              name="email"
              required
              className="w-full p-2 mb-3 border rounded bg-gray-100 focus:bg-gray-200 outline-none"
              {...register("email", { required: true })}
            />

            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              placeholder="Votre message"
              name="message"
              required
              className="w-full p-2 mb-3 border rounded bg-gray-100 focus:bg-gray-200 outline-none"
              {...register("message", { required: true })}
            />

            <button
              type="submit"
              className="bg-black text-white border-[1px] border-black rounded-full p-2 w-full"
            >
              Envoyer
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Button;
