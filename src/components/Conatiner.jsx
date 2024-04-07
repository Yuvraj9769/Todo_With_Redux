import React from "react";

const Conatiner = ({ children }) => {
  return (
    <div className="w-[96vw] md:max-w-[70%] flex flex-col items-center gap-7 border border-[#8a8a8a] rounded-md bg-slate-900 py-4 px-3 lg:gap-10 shadow-lg shadow-slate-700">
      {children}
    </div>
  );
};

export default Conatiner;
