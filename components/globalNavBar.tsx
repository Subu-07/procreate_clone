import React from "react";

function GlobalNavBar() {
  return (
    <nav >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                className="hidden size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              {/* <img className="h-8 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"> */}

              <svg
                  
                  className="fill-alpha-w10 w-25"
                  width="150"   
                  height="25"
                  viewBox="0 0 150 25"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Procreate®"
                >
                  <path
                    
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M148.977 2.79157C148.977 4.43411 147.703 5.62734 146.156 5.62734C144.609 5.62734 143.357 4.44884 143.357 2.81367C143.357 1.1785 144.632 0 146.178 0C147.725 0 148.977 1.16377 148.977 2.79157ZM148.462 2.80631C148.462 1.46576 147.408 0.493497 146.171 0.493497C144.934 0.493497 143.858 1.46576 143.858 2.81367C143.858 4.16158 144.911 5.12648 146.149 5.12648C147.386 5.12648 148.462 4.15422 148.462 2.80631ZM146.804 2.90942L147.585 4.22787H146.966L146.311 2.95362H145.538V4.22787H145.015V1.28162H146.51C147.07 1.28162 147.467 1.62044 147.467 2.08447C147.467 2.48222 147.202 2.79894 146.804 2.90206V2.90942ZM145.545 2.50431H146.466C146.76 2.50431 146.966 2.34227 146.966 2.10657C146.966 1.90033 146.782 1.74565 146.51 1.74565H145.538V2.50431H145.545ZM10.5181 15.3723C15.6137 15.3723 18.9204 12.0964 18.9223 7.75988C18.9204 3.41606 15.6137 0.250625 10.5181 0.250625H0V24.3657H5.40637V15.3723H10.5181ZM9.69317 4.30909C12.1738 4.30909 13.6172 5.89065 13.6191 7.75259C13.6172 9.68073 12.1738 11.2991 9.69317 11.2991H5.40637V4.30909H9.69317ZM41.4832 24.8075C47.059 24.8075 50.6093 21.0583 50.6093 15.5783C50.6093 10.1719 47.0296 6.41547 41.4832 6.41547C35.9369 6.41547 32.3867 10.1057 32.3867 15.5783C32.3867 21.051 35.9075 24.8075 41.4832 24.8075ZM41.4759 20.9184C38.7211 20.9184 37.1375 18.6792 37.1375 15.5783C37.1375 12.5437 38.6843 10.3045 41.4759 10.3045C44.2674 10.3045 45.8511 12.4774 45.8511 15.5783C45.8511 18.6792 44.2306 20.9184 41.4759 20.9184ZM60.9764 24.7412C55.8079 24.7394 52.6127 20.9172 52.6127 15.7477C52.6127 10.577 55.8167 6.75428 60.9801 6.75428C65.4215 6.75428 68.2131 9.44274 68.8024 13.0961H65.9077C65.4215 10.8569 63.8747 9.17021 60.9801 9.17021C57.4298 9.17021 55.3674 11.9618 55.3674 15.7477C55.3674 19.5337 57.4372 22.3252 60.9801 22.3252C64.0442 22.3252 65.6646 20.4617 66.0771 17.9869H68.8981C68.4489 21.8749 65.6293 24.7396 60.9764 24.7412ZM89.7134 6.75428C84.7195 6.75428 81.3461 10.5476 81.3461 15.8508L81.3534 15.8582C81.3534 20.9626 84.4912 24.7485 89.6545 24.7485C93.5435 24.7485 96.4382 22.5388 97.4031 18.856H94.2654C93.4404 21.3309 91.5106 22.3326 89.5808 22.3326C86.583 22.3326 84.5133 19.9535 84.307 16.4769V16.337H97.5357V15.7477C97.5357 10.577 94.7073 6.75428 89.7134 6.75428ZM89.684 9.16284C92.8143 9.16284 94.6115 11.2989 94.6778 14.1936H84.3807C84.8963 11.0926 86.723 9.16284 89.684 9.16284ZM114.182 13.1329V24.3655H111.427V21.6476H111.361C110.536 22.9587 108.429 24.5423 105.299 24.5423C101.926 24.5423 99.6865 22.6493 99.6865 19.6147C99.6865 16.3443 102.132 13.899 109.056 13.899H111.435V13.1403C111.435 10.6949 109.888 9.17758 107.369 9.17758C104.99 9.17758 103.406 10.4887 103.274 12.5879H100.452C100.556 9.00817 103.207 6.76902 107.376 6.76902C111.545 6.76902 114.197 9.21441 114.197 13.1403L114.182 13.1329ZM111.427 17.7143V16.0939H109.048C103.951 16.0939 102.434 17.6112 102.434 19.541C102.434 21.2646 103.774 22.2589 105.91 22.2589C108.938 22.2589 111.42 20.0861 111.42 17.7143H111.427ZM137.273 6.75428C132.279 6.75428 128.906 10.5476 128.906 15.8508L128.913 15.8582C128.913 20.9626 132.051 24.7485 137.214 24.7485C141.103 24.7485 143.998 22.5388 144.963 18.856H141.825C141 21.3309 139.071 22.3326 137.141 22.3326C134.143 22.3326 132.073 19.9535 131.867 16.4769V16.337H145.096V15.7477C145.096 10.577 142.267 6.75428 137.273 6.75428ZM137.244 9.16284C140.374 9.16284 142.171 11.2989 142.238 14.1936H131.941C132.456 11.0926 134.283 9.16284 137.244 9.16284ZM80.9115 7.071C77.8989 7.3509 75.5935 8.61042 74.3929 11.3431V7.14466H71.5719V24.3655H74.3929V16.963C74.3929 12.2343 76.5658 10.1056 80.9115 10.1425V7.071ZM25.4851 11.2694C26.4794 8.37472 28.5639 7.04154 31.6575 6.75428V6.76165V11.6377C27.1055 11.5125 25.4851 13.538 25.4851 17.7806V24.3581H20.6311V6.8574H25.4851V11.2694ZM128.28 9.54586V9.55322L128.287 9.54586H128.28ZM128.28 7.14466V9.54586H121.982V18.6719C121.982 20.911 123.183 22.119 125.459 22.119C126.136 22.119 126.917 22.0306 127.757 21.7433V24.2477C127.072 24.476 126.298 24.6012 125.459 24.6012C121.599 24.6012 119.154 22.3326 119.154 18.6792V9.55322H115.537V7.15203H116.65H117.04H118.056C118.66 7.15203 119.154 6.65853 119.154 6.05455V1.6278H121.975V7.14466H128.28Z"
                  ></path>
                </svg>
              
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                
                <a
                  href="#"
                  className="rounded-md  px-3 py-2 text-sm font-medium text-alpha-w50 "
                >
                  Apps
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-alpha-w50  hover:bg-gray-700 hover:text-white"
                >
                  Learning
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-alpha-w50  hover:bg-gray-700 hover:text-white"
                >
                  Company
                </a>                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <a
            href="#"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Team
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
}

export default GlobalNavBar;
