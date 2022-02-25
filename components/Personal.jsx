import React, { useState, useEffect } from "react";
import ReactFlagsSelect from 'react-flags-select';

function Personal() {
  const [selected, setSelected] = useState('');

    useEffect(() => {
      console.log(selected)
    }, [selected])
    
  const registerUser = (event) => {
    event.preventDefault();
  };
  


  
    return (
        <>
          <div className="">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="mt-5 md:mt-0 md:col-span-6">
  
                <div className="md:col-span-6 text-center p-5">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Personal Information
                    </h3>
                    <p className="mt-1 text-sm text-gray-900">
                      Use a permanent address where you can receive mail.
                    </p>
                  </div>
                </div>
  
                <form onSubmit={registerUser} action="#" method="POST">
                  <div className="shadow overflow-hidden sm:rounded-md ">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 focus:ring-slate-700 focus:border-slate-700 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md bg-white" required
                          />
                        </div>
  
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 focus:ring-slate-700 focus:border-slate-700 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md bg-white" required
                          />
                        </div>
  
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email Address
                          </label>
                          <input
                            type="text"
                            name="email-address"
                            id="email-address"
                            autoComplete="email"
                            className="mt-1 focus:ring-slate-700 focus:border-slate-700 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md bg-white" required
                          />
                        </div>
  
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Cellphone
                          </label>
                          <input
                            type="text"
                            name="email-address"
                            id="email-address"
                            autoComplete="email"
                            className="mt-1 focus:ring-slate-700 focus:border-slate-700 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md bg-white" required
                          />
                        </div>
  
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Country
                          </label>
                          {/* <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="mt-1 block w-full py-2 px-3 border border-gray-500 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm text-gray-700"
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                          </select> */}
                          <div className='border-gray-500 bg-white rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 sm:text-sm text-gray-700'>
                              <ReactFlagsSelect
                              selected={selected}
                              onSelect={code => setSelected(code)}
                              searchable={true}
                              id="flags-select"
                              className="border-gray-500 bg-white focus:ring-slate-700 focus:border-slate-700 sm:text-sm text-gray-700"/>
                          </div>
                        </div>
  
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="street-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Street Address
                          </label>
                          <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            className="mt-1 focus:ring-slate-700 focus:border-slate-700 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md bg-white" required
                          />
                        </div>
  
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="mt-1 focus:ring-slate-700 focus:border-slate-700 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md bg-white" required
                          />
                        </div>
  
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="region"
                            className="block text-sm font-medium text-gray-700"
                          >
                            State / Province
                          </label>
                          <input
                            type="text"
                            name="region"
                            id="region"
                            autoComplete="address-level1"
                            className="mt-1 focus:ring-slate-700 focus:border-slate-700 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md bg-white" required
                          />
                        </div>
  
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="postal-code"
                            className="block text-sm font-medium text-gray-700"
                          >
                            ZIP / Postal code
                          </label>
                          <input
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            autoComplete="postal-code"
                            className="mt-1 focus:ring-slate-700 focus:border-slate-700 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md bg-white" required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-white text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-slate-800 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-slate-900 mb-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
  
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>
        </>
    );
  }





export default Personal;
