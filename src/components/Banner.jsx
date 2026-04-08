import React from "react";

function Bannersection({ banerdata }) {
    return (
        <div
            className="relative w-full h-[400px] flex items-center justify-center text-center text-white bg-cover bg-center"
            style={{
                backgroundImage: `url(${banerdata?.image})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 px-4 max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {banerdata?.title}
                </h1>

                <p className="text-lg md:text-xl mb-6">
                    {banerdata?.text}
                </p>

                {banerdata?.button && (
                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition">
                        {banerdata.button}
                    </button>
                )}
            </div>
        </div>
    );
}

export default Bannersection;