import React, { useState } from 'react';
import { FaUniversity } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  // States for user input
  const [inputName, setInputName] = useState("");
  const [inputId, setInputId] = useState("");
  const [inputPass, setInputPass] = useState("");

  // Static Credentials
  const STATIC_NAME = "Rahul Sharma";
  const STATIC_ID = "EDU12345";
  const STATIC_PASS = "user123";

  const handleAction = () => {
    if (isLogin) {

      // LOGIN CHECK
      if (inputId === STATIC_ID && inputPass === STATIC_PASS) {
window.isLoggedIn = true;
        // NAVIGATE TO HOME PAGE
        navigate("/home");

      } else {
        alert("Invalid ID or Password!");
      }

    } else {

      // SIGNUP CHECK
      if (
        inputName === STATIC_NAME &&
        inputId === STATIC_ID &&
        inputPass === STATIC_PASS
      ) {

        alert("Registration Successful! Now please login.");
        setIsLogin(true);

      } else {
        alert("Please enter the correct demo details.");
      }
    }
  };

  const loginImageUrl =
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/a_teacher_uses_a_puppet_as_a_teaching_material_in_government_model_sanskriti_primary_school_in_sector_20_panchkula_haryana-sixteen_nine.jpg?VersionId=ccs5M4ZMN1kPE7I5Z.C9VuvaptMfHI12";

  const signupImageUrl =
    "https://img.jagranjosh.com/imported/images/E/Articles/teachers_4.jpg";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">

        {/* Left Side */}
        <div className="w-full md:w-[50%] relative flex flex-col items-center justify-center p-6 text-white text-center overflow-hidden">

          <img
            src={isLogin ? loginImageUrl : signupImageUrl}
            alt="Portal"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          />

          <div className="absolute inset-0 bg-[#003366]/60"></div>

          <div className="relative z-10 flex flex-col items-center">

            <h1 className="text-4xl font-bold tracking-wider uppercase mb-2">
              {isLogin ? "Government" : "Join Our"}
            </h1>

            <h2 className="text-xl font-medium opacity-90 mb-10">
              {isLogin ? "Teacher Portal" : "Educator Registration"}
            </h2>

            <div className="border-t border-blue-400/30 pt-8 mt-4">

              <p className="italic font-light text-blue-100 max-w-xs leading-relaxed">
                {isLogin
                  ? '"Education is the most powerful weapon which you can use to change the world."'
                  : '"Shape the future by joining our community of dedicated educators today."'}
              </p>

              <span className="block mt-4 text-sm font-semibold tracking-widest text-blue-300 uppercase">
                {isLogin ? "Empowering Educators" : "Start Your Journey"}
              </span>

            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[55%] p-4 lg:p-6 flex flex-col justify-center bg-white">

          <div className="max-w-sm mx-auto w-full">

            <div className="flex items-center gap-3 mb-4">

              <div className="bg-[#0B3D91] p-2 rounded-lg">
                <FaUniversity className="text-white text-xl" />
              </div>

              <h3 className="text-3xl font-bold text-gray-800">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h3>

            </div>

            <p className="text-gray-500 mb-8">
              {isLogin
                ? "Please enter your credentials to access the portal."
                : "Register to get started with the portal."}
            </p>

            <form
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >

              {!isLogin && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    onChange={(e) => setInputName(e.target.value)}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                    placeholder="Rahul Sharma"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Employee ID
                </label>

                <input
                  type="text"
                  onChange={(e) => setInputId(e.target.value)}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                  placeholder="e.g., EDU12345"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  onChange={(e) => setInputPass(e.target.value)}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                  placeholder="Enter secure password"
                />
              </div>

              <button
                onClick={handleAction}
                className="w-full bg-[#003366] text-white py-3 rounded-xl font-bold text-lg hover:bg-blue-950 transition-all shadow-lg shadow-blue-900/20"
              >
                {isLogin ? "Login to Portal" : "Sign Up"}
              </button>

            </form>

            <div className="mt-8 text-center">

              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-blue-700 hover:underline font-semibold cursor-pointer"
              >
                {isLogin
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Login"}
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;