'use client'
import { useRouter } from "next/navigation";

const CheckMail = () => {
    const rotuer = useRouter()
  return (
    <div className="bg-gray-800 p-8 sm:p-12 rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md text-center transform hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-700 mx-auto mt-2" >
      {/* Mail Icon SVG */}
      <div className="mx-auto w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-blue-900 flex items-center justify-center mb-6 sm:mb-8 shadow-inner">
        <svg
          className="w-16 h-16 sm:w-20 sm:h-20 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 12H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z"
          ></path>
        </svg>
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
        Check Your Mailbox!
      </h2>
      <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
        We have sent a verification link to your email address. Please check your inbox (and spam folder) to activate your account.
      </p>
      <div className="space-y-4">
    
        <button
          onClick={() =>rotuer.push("/login")} // Replace with actual navigation to login
          className="w-full bg-transparent border-2 border-blue-600 text-blue-400 hover:bg-blue-900 hover:text-white font-bold py-3 px-6 rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default CheckMail;
