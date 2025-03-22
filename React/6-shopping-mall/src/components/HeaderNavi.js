import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderNavi() {
  const navigate = useNavigate();

  return (
    <div>
      <nav
        className="flex items-center justify-between flex-wrap bg-teal-500 p-3"
        style={{ backgroundColor: "#C6E7FF" }}
      >
        <div className="flex items-center flex-shrink-0 mr-6">
          <svg
            class="w-6 h-6 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m4 12 2.66667-1 2.66666 1L12 11l2.6667 1 2.6666-1L20 12m-1 5H5v1c0 1.1046.89543 2 2 2h10c1.1046 0 2-.8954 2-2v-1ZM5 9.00003h14v-1c0-2.20914-1.7909-4-4-4H9c-2.20914 0-4 1.79086-4 4v1ZM18.5 14h-13c-.82843 0-1.5.6716-1.5 1.5 0 .8285.67157 1.5 1.5 1.5h13c.8284 0 1.5-.6715 1.5-1.5 0-.8284-.6716-1.5-1.5-1.5Z"
            />
          </svg>

          <a className="font-semibold text-xl tracking-tight" href="/">
            Burger Mall
          </a>
        </div>

        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 text-center inline-flex"
          onClick={() => {
            navigate("/cart");
          }}
        >
          장바구니{" "}
          {localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))?.length != 0
              ? JSON.parse(localStorage.getItem("cart"))?.length
              : ""
            : ""}
          <svg
            class="w-6 h-6 text-gray-800 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
}
