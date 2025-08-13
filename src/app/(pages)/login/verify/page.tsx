'use client'
import { appwriteService } from "@/appwrite/config";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Verify = () => {
    const QueryPrams = useSearchParams();
    const router = useRouter()
    const userId = QueryPrams.get("userId");
    const secret = QueryPrams.get("secret");
    const [timer, setTimer] = useState<number>(5)
    const [status, setStatus] = useState<boolean|null>(null)
   // 1. Run verification
    useEffect(() => {
        async function verify() {
            if (!userId || !secret) {
                setStatus(false);
                return;
            }
            const result = await appwriteService.isVerified({ userId, secret });
            setStatus(!!result);
        }
        verify();
    }, [userId, secret]);

    // 2. Countdown after success
    useEffect(() => {
        if (status === true && timer > 0) {
            const id = setTimeout(() => {
                setTimer(prev => prev - 1);
            }, 1000);
            return () => clearTimeout(id);
        }
    }, [status, timer]);

    // 3. Redirect when timer hits 0
    useEffect(() => {
        if (status === true && timer === 0) {
            router.push('/');
        }
    }, [status, timer, router]);

     if (status === null) {
        return (
            <div className="bg-white p-10 m-2 sm:p-12 rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md text-center mx-auto">
                <p className="text-lg font-semibold text-gray-700">Verifying your account...</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-10 m-2 sm:p-12 rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md text-center transform hover:scale-105 transition-transform duration-300 ease-in-out mx-auto">
            {status ? (
                // Success state
                <>
                    {/* Success SVG Icon */}
                    <div className="mx-auto w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-green-100 flex items-center justify-center mb-6 sm:mb-8 shadow-inner">
                        <svg
                            className="w-16 h-16 sm:w-20 sm:h-20 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-green-700 mb-4 tracking-tight">
                        Verification Successful!
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
                        Your account has been successfully verified. You can now access all features.
                    </p>
                    <button
                        onClick={() =>router.push("/admin")} // Replace with actual navigation logic
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    >
                        Go to Dashboard
                    </button>
                    <h1 className="text-xl text-black font-bold">You will be redirected to the home page in {timer}</h1>
                </>
            ) : (
                // Failed state
                <>
                    {/* Failed SVG Icon */}
                    <div className="mx-auto w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-red-100 flex items-center justify-center mb-6 sm:mb-8 shadow-inner">
                        <svg
                            className="w-16 h-16 sm:w-20 sm:h-20 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-red-700 mb-4 tracking-tight">
                        Verification Failed!
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
                        Unfortunately, your account could not be verified. Please try again or contact support.
                    </p>
                    <div className="space-y-4">
                        <button
                            onClick={() => router.push('/login')} // Replace with actual retry logic
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                        >
                            Retry Verification
                        </button>

                    </div>
                </>
            )}
        </div>


    )
};

export default Verify;
