import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

function Information() {
  const registerUser = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className=" md:mt-0 md:col-span-6">
          
            <div className="md:col-span-6 text-center p-5">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Profile
                </h3>
                <p className="mt-1 text-sm text-gray-900">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>
            </div>

            <form onSubmit={registerUser} action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-slate-900 space-y-6 sm:p-6">
                  <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="company-website"
                        className="text-sm font-medium text-gray-200 flex p-2 "
                      >
                        Website {" "}
                        <CgWebsite color="white" className="flex text-lg" />
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-sky-500 bg-slate-700 text-gray-200 text-sm">
                          http://
                        </span>
                        <input
                          type="text"
                          name="company-website"
                          id="company-website"
                          className="focus:ring-sky-500 focus:border-sky-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-sky-500 bg-slate-700 text-gray-200"
                          placeholder="www.example.com"
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="company-website"
                        className="text-sm font-medium text-gray-200 flex p-2 "
                      >
                        LinkedIn{" "}
                        <AiFillLinkedin color="white" className="flex text-lg" />
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-sky-500 bg-slate-700 text-gray-200 text-sm">
                          http://
                        </span>
                        <input
                          type="text"
                          name="company-website"
                          id="company-website"
                          className="focus:ring-sky-600 focus:border-sky-600 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-sky-500 bg-slate-700 text-gray-200"
                          placeholder="www.example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-200"
                    >
                      About
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="shadow-sm focus:ring-sky-500 focus:border-sky-500 mt-1 block w-full sm:text-sm border border-sky-500 rounded-md bg-slate-700 text-gray-200"
                        placeholder="Tell me about you"
                        defaultValue={""}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-200">
                      Brief description for your profile. URLs are hyperlinked.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200">
                      Photo
                    </label>
                    <div className="mt-1 flex items-center">
                      <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg
                          className="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <button
                        type="button"
                        className="ml-5 bg-sky-500 py-2 px-3 border border-sky-500 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-200 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                      >
                        Change
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200">
                      Cover photo
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-900 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-900"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-sky-500 rounded-md font-medium text-gray-200 hover:bg-sky-600 py-1 px-1"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1 text-gray-200">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-200">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-3 bg-slate-900 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                  >
                    Save
                  </button>
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
