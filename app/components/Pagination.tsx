"use client";
import React from "react";

interface PaginationProps {
  prev: number;
  next: number;
}

function Pagination({ prev, next }: PaginationProps) {
  return (
    <div className="flex items-center gap-5  justify-center mt-5">
      <svg
        onClick={() => {
          prev -= 7;
          console.log(prev);
        }}
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 cursor-pointer"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <svg
        onClick={() => {
          next += 7;
        }}
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 cursor-pointer"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default Pagination;
