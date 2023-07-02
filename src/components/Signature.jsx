import React from "react";

const Signature = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-70px]">
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-2xl">
          Sashimi
        </h3>
        <img
          src="https://media.istockphoto.com/id/109836388/photo/sushi.webp?b=1&s=170667a&w=0&k=20&c=gvSUdNKnoCRQS17jMEr39ILzsesLyIHnz6KPh7au0qI="
          alt="food img"
          className="w-[500px] h-[300px] border-4 shadow-lg border-white  m-auto"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-2xl">
          Sus
        </h3>
        <img
          src="https://media.istockphoto.com/id/1320922361/photo/woman-taking-tasty-sushi-roll-with-salmon-from-set-at-table-closeup.webp?b=1&s=170667a&w=0&k=20&c=0c_1yejNq9Y1_hgl3fu4ygspGhf_8yUelIgyctEapEA="
          alt="food img"
          className="w-[500px] h-[300px] border-4 shadow-lg border-white m-auto"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-2xl">
          Seafo
        </h3>
        <img
          src="https://images.unsplash.com/photo-1611519685019-46269a13fe91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="food img"
          className="w-[500px] h-[300px] border-4 shadow-lg border-white m-auto"
        />
      </div>
    </div>
  );
};

export default Signature;
