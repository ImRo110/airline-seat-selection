import { useState, useEffect } from "react";
import { ArrowRightLeft } from "lucide-react";

const SearchBox = () => {
  return (
    <section className="mt-6">
      <div className="grid grid-cols-7 space-x-4 bg-white border-2-gray-300 border-solid p-4 rounded-3xl shadow-neutral-600 drop-shadow-md">
        <input
          type="text"
          className="border-2 rounded-2xl p-2 col-span-2"
          placeholder="BOM"
        />
        <div className="flex justify-center items-center hover:bg-amber-100 rounded-4xl cursor-pointer">
          <ArrowRightLeft />
        </div>
        <input
          type="text"
          className="border-2 rounded-2xl p-2 col-span-2"
          placeholder="NGP"
        />
        <input type="date" />
        <input type="date" placeholder="BOM" />
      </div>
    </section>
  );
};

export default SearchBox;
