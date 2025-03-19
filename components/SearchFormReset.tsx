"use client";

import { FormInput, X } from "lucide-react";
import Link from "next/link";

const SearchFormReset = () => {
  const reset = () => {
    // const fromInput = document.querySelector(
    //   ".search-input"
    // ) as HTMLInputElement;
    const form = document.querySelector("search-form") as HTMLFormElement;
    if (form) {
      form.reset();
    }
    // if (fromInput) {
    //   fromInput.value = "";
    // }
  };

  return (
    <button type="reset" onClick={reset}>
      <Link href={"/"} className="search-btn text-white">
        <X className="size-5" />
      </Link>
    </button>
  );
};

export default SearchFormReset;
