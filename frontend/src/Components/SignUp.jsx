"use client";
import React from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { auth, db, googleProvider, facebookProvider, signInWithPopup } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

export default function SignUp() {
    const handleGoogleSignIn = async () => {
        try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        await setDoc(doc(db, "users", user.uid), {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            provider: "google",
        });
        console.log("User saved:", user);
        } catch (error) {
        console.error(error.message);
        }
    };

    const handleFacebookSignIn = async () => {
        try {
        const result = await signInWithPopup(auth, facebookProvider);
        const user = result.user;
        await setDoc(doc(db, "users", user.uid), {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            provider: "facebook",
        });
        console.log("User saved:", user);
        } catch (error) {
        console.error(error.message);
        }
    };

    return (
        <div
        className="flex justify-center items-center"
        style={{ width: "1280px", height: "832px", background: "#EFEBE3", margin: "0 auto" }}
        >
        <div
            className="rounded-l-[25px] transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-2xl"
            style={{
            width: "481px",
            height: "739px",
            flexShrink: 0,
            borderRadius: "25px 0 0 25px",
            background: "url('/tadamun-p-1.png') lightgray 50% / cover no-repeat",
            }}
        ></div>

        <div
            className="flex flex-col justify-center items-center gap-6 rounded-r-[25px]"
            style={{
            width: "517px",
            height: "739px",
            background: "rgba(30, 50, 49, 0.75)",
            flexShrink: 0,
            boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.25)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
        >
            <h2 style={{ color: "#EFEBE3", fontFamily: "Aref Ruqaa", fontSize: "40px", fontWeight: 700 }}>
            sign up
            </h2>

            <form className="flex flex-col gap-4 items-center">
            <input type="text" placeholder="FULL NAME" className="px-4 py-3 w-[463px] h-[52px] rounded-[15px] border" style={{ border: "1px solid #909498", background: "#FFF" }} />
            <input type="email" placeholder="EMAIL" className="px-4 py-3 w-[463px] h-[52px] rounded-[15px] border" style={{ border: "1px solid #909498", background: "#FFF" }} />
            <input type="password" placeholder="password" className="px-4 py-3 w-[463px] h-[52px] rounded-[15px] border" style={{ border: "1px solid #909498", background: "#FFF" }} />
            <input type="password" placeholder="confirm password" className="px-4 py-3 w-[463px] h-[52px] rounded-[15px] border" style={{ border: "1px solid #909498", background: "#FFF" }} />
            <select className="px-4 py-3 w-[463px] h-[52px] rounded-[15px] border cursor-pointer transition-all duration-300 ease-in-out shadow-sm hover:shadow-md focus:shadow-lg focus:outline-none" style={{ border: "1px solid #909498", background: "#EFEBE3", color: "#1E3231BF", fontWeight: 500, fontFamily: "Poppins", fontSize: "15px" }}>
                <option value="donor">Donor</option>
                <option value="needy">Needy</option>
                <option value="company">Company</option>
            </select>
            <button type="submit" className="mt-4 w-[205px] h-[53px] rounded-[30px] border text-white" style={{ border: "1px solid #EFEBE3", background: "#52605E", fontFamily: "Poppins", fontSize: "15px", fontWeight: 700 }}>
                Create Account
            </button>
            </form>

            <div className="flex flex-col items-center mt-4">
            <p style={{ color: "#EFEBE3", fontSize: "14px", marginBottom: "10px" }}>or sign up with</p>
            <div className="flex gap-4">
                <button onClick={handleGoogleSignIn} className="flex items-center justify-center w-[45px] h-[45px] rounded-full bg-white hover:scale-105 transition" style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.25)" }}>
                <FaGoogle color="#DB4437" size={22} />
                </button>
                <button onClick={handleFacebookSignIn} className="flex items-center justify-center w-[45px] h-[45px] rounded-full bg-white hover:scale-105 transition" style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.25)" }}>
                <FaFacebookF color="#4267B2" size={22} />
                </button>
            </div>
            <p style={{ color: "#EFEBE3", fontSize: "14px", marginTop: "15px" }}>
                Already have an account? <a href="/login" style={{ color: "#B2C9C8", fontWeight: "600" }}>Login</a>
            </p>
            </div>
        </div>
        </div>
    );
}
