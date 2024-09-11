"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdVerified } from "react-icons/md";
import { ImCross } from "react-icons/im";
import axios from "axios";
import Loader from "./Loader";
function Form({ isOpen, setIsOpen, formid }) {
  const [productInfo, setProductInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!formid) {
      return;
    } else {
      axios
        .get("/api/getform?id=" + formid)
        .then((response) => {
          const data = response.data;
          const formattedDate = data.date
            ? new Date(data.date).toISOString().split("T")[0]
            : "";
          const iataDate = data.iatadate
            ? new Date(data.iatadate).toISOString().split("T")[0]
            : "";
          setProductInfo({ ...data, date: formattedDate, iatadate: iataDate });
          // setProductInfo(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching form data:", error);
          setLoading(false);
        });
    }
  }, [formid]);
  // console.log("idd -->", formid);
  // console.log("prodduct info", productInfo);
  // if (!productInfo) {
  //   return <Loader />;
  // }
  // console.log(
  //   "verifiedByProposeremail -->",
  //   productInfo.verifiedByProposeremail
  // );
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="w-full h-full bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-white p-6 rounded-lg w-full h-full max-w-lg shadow-xl cursor-default relative overflow-y-scroll"
          >
            <div className="w-full min-h-fit  p-10 shadow-2xl rounded-3xl">
              {loading ? (
                <Loader />
              ) : (
                <div>
                  <form>
                    <div className="space-y-12">
                      <div className=" pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                          <div className="col-span-full">
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Name of the Company / Firm
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                id="name"
                                name="name"
                                type="text"
                                value={productInfo.name}
                                className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="col-span-full">
                            <label
                              htmlFor="date"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Establishment / Incorporation Date
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                id="date"
                                name="date"
                                type="date"
                                value={productInfo.date}
                                className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="col-span-full">
                            <label
                              htmlFor="address"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Full Address
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                id="address"
                                name="address"
                                type="text"
                                value={productInfo.address}
                                className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="col-span-full">
                            <label
                              htmlFor="number"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Mobile Number
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                id="number"
                                name="number"
                                type="number"
                                value={productInfo.number}
                                className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="col-span-full">
                            <label
                              htmlFor="telnumber"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Telephone Number
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                id="telnumber"
                                name="telnumber"
                                type="text"
                                value={productInfo.telnumber}
                                className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="col-span-full">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Email Id of the office applying this application
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                id="email"
                                name="email"
                                type="email"
                                value={productInfo.email}
                                className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="col-span-full">
                            <label
                              htmlFor="hoaddress"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Full address of the Head Office / Registered
                              Office of the Company
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                id="hoaddress"
                                name="hoaddress"
                                type="text"
                                value={productInfo.hoaddress}
                                className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="col-span-full">
                            <label
                              htmlFor="gstin"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              GSTIN of Head Office / Registered Office
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                id="gstin"
                                name="gstin"
                                type="text"
                                value={productInfo.gstin}
                                className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="col-span-full">
                            <label
                              htmlFor="iata"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Are you an IATA Accredited Air Cargo Sales Agent?
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                id="iata"
                                name="iata"
                                type="text"
                                value={productInfo.iata}
                                className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="col-span-full">
                            <label
                              htmlFor="iatanumber"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              IATA Approval Number
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                id="iatanumber"
                                name="iatanumber"
                                type="text"
                                value={productInfo.iatanumber}
                                className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="col-span-full">
                            <label
                              htmlFor="iatadate"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              IATA Approval Date
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                id="iatadate"
                                name="iatadate"
                                type="date"
                                value={productInfo.iatadate}
                                className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="col-span-full">
                            <label
                              htmlFor="proposerName"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Proposer Name
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                id="proposerName"
                                name="proposerName"
                                type="text"
                                value={productInfo.proposerName}
                                className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="col-span-full">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Proposer Email
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                id="proposeremail"
                                name="proposeremail"
                                type="email"
                                value={productInfo.proposeremail}
                                className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="col-span-full">
                            <label
                              htmlFor="iata"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Seconder Name
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                id="seconderName"
                                name="seconderName"
                                type="text"
                                value={productInfo.seconderName}
                                className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          {/* <div className="col-span-full">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Email
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                id="email"
                                name="eamil"
                                type="email"
                                value={productInfo.email}
                                className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div> */}

                          <div className="col-span-full">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Seconder Email
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                id="seconderemail"
                                name="seconderemail"
                                type="email"
                                value={productInfo.seconderemail}
                                className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="col-span-full">
                            <label
                              htmlFor="subject"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Region
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                id="region"
                                name="region"
                                type="text"
                                value={productInfo.region}
                                className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          {/* <div className="col-span-full">
                            <label
                              htmlFor="subject"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Subject
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                id="subject"
                                name="subject"
                                type="text"
                                value={productInfo.subject}
                                className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="col-span-full">
                            <label
                              htmlFor="subject"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Message
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                id="Message"
                                name="Message"
                                type="text"
                                value={productInfo.message}
                                className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="flex  text-black gap-4">
                    <div className="flex gap-4 py-8 ">
                      <p className="text-sm">Verified By Proposer</p>
                      {productInfo.verifiedByProposeremail ? (
                        <div className="flex items-center">
                          <MdVerified className="text-green-500" />
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <ImCross className="text-red-500" />
                        </div>
                      )}
                    </div>
                    <div className="flex gap-4 py-8">
                      <p className="text-sm">Verified By Seconder</p>
                      {productInfo.verifiedBySeconderemail ? (
                        <div className="flex items-center">
                          <MdVerified className="text-green-500" />
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <ImCross className="text-red-500" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    // <div className="w-full h-full p-10 shadow-2xl rounded-3xl">
    //   <form>
    //     <div className="space-y-12">
    //       <div className=" pb-12">
    //         <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    //           <div className="col-span-full">
    //             <label
    //               htmlFor="subject"
    //               className="block text-sm font-medium leading-6 text-gray-900"
    //             >
    //               Name
    //               <span className="text-red-500">*</span>
    //             </label>
    //             <div className="mt-2">
    //               <input
    //                 id="name"
    //                 name="name"
    //                 type="text"
    //                 value="ishant"
    //                 className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
    //               />
    //             </div>
    //           </div>

    //           <div className="col-span-full">
    //             <label
    //               htmlFor="email"
    //               className="block text-sm font-medium leading-6 text-gray-900"
    //             >
    //               Email
    //               <span className="text-red-500">*</span>
    //             </label>
    //             <div className="mt-2">
    //               <input
    //                 id="email"
    //                 name="eamil"
    //                 type="email"
    //                 className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
    //               />
    //             </div>
    //           </div>

    //           <div className="col-span-full">
    //             <label
    //               htmlFor="subject"
    //               className="block text-sm font-medium leading-6 text-gray-900"
    //             >
    //               Subject
    //               <span className="text-red-500">*</span>
    //             </label>
    //             <div className="mt-2">
    //               <input
    //                 id="subject"
    //                 name="subject"
    //                 type="text"
    //                 className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
    //               />
    //             </div>
    //           </div>

    //           <div className="col-span-full">
    //             <label
    //               htmlFor="subject"
    //               className="block text-sm font-medium leading-6 text-gray-900"
    //             >
    //               Message
    //               <span className="text-red-500">*</span>
    //             </label>
    //             <div className="mt-2">
    //               <input
    //                 id="Message"
    //                 name="Message"
    //                 type="text"
    //                 className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </form>
    // </div>
  );
}

export default Form;
