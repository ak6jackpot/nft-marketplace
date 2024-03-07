import React from "react";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer>
      <div className="w-full flex text-white font-plusJakartaSans bg-gray-800 py-4 px-4">
        <span>All Rights Reserved</span>
      </div>
    </footer>
  );
}
