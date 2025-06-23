import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button
        className="rounded-[40px] py-2 px-6 lg:py-3 lg:px-6 xl:py-4 xl:px-9 text-xs text-primary button-gradient font-semibold"
        type="submit"
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
