"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../utils/send-email";

const Button = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  let [isEmailSent, setIsEmailSent] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  // TODO : ICI ON VEUT CONTINUER A STYLISER LE BOUTON DU FORMULAIRE
  // TODO : ON VEUT AVOIR UN EFFET DE PUSLSATION SI LE MAIL EST BIEN ENVOYE
  const onSubmit = async (data) => {
    const res = await sendEmail(data);
    if (res === true) {
      setIsEmailSent(true);
      console.log("🚀🚀 ~ isEmailSent:", isEmailSent);

      setTimeout(() => {
        reset();
        closeForm();
        setIsEmailSent(false);
      }, "3000");
    }
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
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 z-20 ">
        <button
          className="bg-black text-white border-[1px] border-black rounded-full p-2 w-24 "
          onClick={handleClick}
        >
          Contact
        </button>
      </div>

      {isClicked && (
        <div
          className={`fixed bottom-4 right-7 z-50 w-80 p-4 bg-white border-2 border-gray-300 rounded-2xl shadow-lg ${
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
            <h1 className="text-lg mb-4">Contactez-moi</h1>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nom
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 mb-3   border-b-[1px] focus:border-gray-700  rounded-none outline-none "
              {...register("name", { required: true })}
            />

            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              required
              className="w-full p-2 mb-3   border-b-[1px] focus:border-gray-700  rounded-none outline-none "
              {...register("email", { required: true })}
            />

            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              required
              className="w-full p-2 mb-3 border-b-[1px]  focus:border-gray-700 outline-none"
              {...register("message", { required: true })}
            />

            <button
              type="submit"
              className={`${
                isEmailSent ? "bg-green-400" : "bg-black"
              } text-white border-[1px]  rounded-full p-2 w-full`}
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
