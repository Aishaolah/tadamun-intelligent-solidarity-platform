import React from 'react'
export default function Login() {
    return (
        <div
        className="flex justify-center items-center"
        style={{
            width: "1280px",
            height: "832px",
            background: "#EFEBE3",
            margin: "0 auto",
        }}
        >
        <div
            className="flex flex-col justify-center items-center gap-8 rounded-[25px]"
            style={{
            width: "518px",
            height: "494px",
            background: "rgba(30, 50, 49, 0.75)",
            borderRadius: "25px",
            boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.25)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
        >
            <h2
            style={{
                color: "#EFEBE3",
                fontFamily: "Aref Ruqaa",
                fontSize: "40px",
                fontWeight: 700,
            }}
            >
            LOG IN
            </h2>

            <form className="flex flex-col gap-4 items-start">
            <label
                style={{
                color: "#FFF",
                fontFamily: "Acme",
                fontSize: "24px",
                fontWeight: 400,
                opacity: 0.3,
                }}
            >
                Enter your email or username:
            </label>
            <input
                type="text"
                className="px-4 py-3 w-[463px] h-[52px] rounded-[15px] border"
                style={{
                border: "1px solid #909498",
                background: "#FFF",
                }}
            />

            <label
                style={{
                color: "#FFF",
                fontFamily: "Acme",
                fontSize: "24px",
                fontWeight: 400,
                opacity: 0.3,
                }}
            >
                Enter your password:
            </label>
            <input
                type="password"
                className="px-4 py-3 w-[463px] h-[52px] rounded-[15px] border"
                style={{
                border: "1px solid #909498",
                background: "#FFF",
                }}
            />

            <div className="flex items-center gap-3 mt-2">
                <input
                type="checkbox"
                style={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "5px",
                    border: "0.5px solid #B07E56",
                    background: "#FFF",
                }}
                />
                <label
                style={{
                    color: "#FFF",
                    fontFamily: "Acme",
                    fontSize: "20px",
                    fontWeight: 400,
                    opacity: 0.3,
                }}
                >
                Remember me
                </label>
            </div>

            <button
                type="submit"
                className="mt-6 w-[205px] h-[53px] rounded-[30px] border text-white self-center"
                style={{
                border: "1px solid #EFEBE3",
                background: "#52605E",
                fontFamily: "Poppins",
                fontSize: "15px",
                fontWeight: 700,
                transition: "all 0.3s ease",
                }}
            >
                Log in
            </button>
            </form>
        </div>
        </div>
    );
    }