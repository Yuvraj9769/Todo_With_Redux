import React from "react";

const Conatiner = ({ children }) => {
  return (
    <div className="w-screen md:max-w-[70%] flex flex-col items-center gap-7 border border-gray-800 rounded-md bg-slate-900 py-4 px-3 lg:gap-10 shadow-lg shadow-slate-400">
      {children}
    </div>
  );
};

export default Conatiner;
