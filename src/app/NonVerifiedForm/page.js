// "use client";
// import React, { useState } from "react";
// import { BsPostcard } from "react-icons/bs";
// import { FaEdit } from "react-icons/fa";
// import { RiDeleteBin6Fill } from "react-icons/ri";
// import useFetchData from "../hooks/useFetchData";
// import { MdFormatListBulleted, MdVerified } from "react-icons/md";
// import { AnimatePresence, motion } from "framer-motion";
// import Form from "../Components/Form";
// import Link from "next/link";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// function page() {
//   const router = useRouter();
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [formid, setFormid] = useState("");
//   const [perpage] = useState(4);
//   const { alldata, loading } = useFetchData("/api/getform");
//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const filteredform =
//     searchQuery.trim() === ""
//       ? alldata
//       : alldata.filter((form) =>
//           form.name.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//   const all = filteredform.length;
//   const indexOfLastForm = currentPage * perpage;
//   const indexOfFirstForm = (currentPage - 1) * perpage;
//   const currentForms = filteredform.slice(indexOfFirstForm, indexOfLastForm);

//   const NonverifiedForms = currentForms.filter((e) => e.verified === false);

//   const pageNumber = [];
//   for (let i = 1; i <= Math.ceil(all / perpage); i++) {
//     pageNumber.push(i);
//   }

//   // async function handleClick(formid) {
//   // if(!formid){
//   //     return ;
//   // }else {
//   //     await axios.put('/api/getform?id='+formid,{...data,formid});
//   // }
//   // }
//   const handleVerify = async (formId) => {
//     try {
//       const response = await axios.put("/api/getform/?id=" + formId, {
//         verified: true,
//       });
//       if (response.status === 200) {
//         // Optionally, refresh the data or update the state to reflect changes
//         router.push("/formdata");
//         alert("Form verified successfully!");
//       }
//     } catch (error) {
//       console.error("Error verifying form:", error);
//       alert("Failed to verify form.");
//     }
//   };
//   return (
//     <>
//       <div className="relative max-w-screen-2xl m-auto h-full p-8 z-[5]">
//         <div className="flex  justify-between relative">
//           <div>
//             <h2 className="text-[#121533] text-2xl font-extrabold">
//               Non Verified Forms data
//               {/* <span className="text-black">Blogs</span> */}
//             </h2>
//             {/* <h3 className="text-sm tracking-[4px] block uppercase text-[#7e37d8] font-bold">
//           ADMIN PANEL
//         </h3> */}
//           </div>

//           <div className="flex items-center gap-4 text-xl text-[#121533]">
//             <BsPostcard />
//             <span>/</span>
//             <span>Forms</span>
//           </div>
//         </div>
//         <div className="w-full h-full py-10">
//           <div className="flex gap-8 items-center mb-4">
//             <h2 className="font-semibold text-lg">Search data:</h2>
//             <input
//               className="w-96 h-9 p-2 border-[1px] border-[#999] outline-[#121533] shadow-sm shadow-[#999] rounded-lg"
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="search by title..."
//             />
//           </div>
//           <table className="w-full text-white text-left  ">
//             <thead>
//               <tr className="">
//                 <th className=" bg-[#121533] p-3 text-lg border-2 border-white">
//                   #
//                 </th>
//                 <th className=" bg-[#121533] p-3 text-lg border-2 border-white ">
//                   Name
//                 </th>
//                 <th className=" bg-[#121533] p-3 text-lg border-2 border-white">
//                   email
//                 </th>
//                 <th className=" bg-[#121533] p-3 text-lg border-2 border-white">
//                   View / Delete
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="border border-black bg-[#f0f0f0] text-[#121533]">
//               {NonverifiedForms.length === 0 ? (
//                 <tr>
//                   <td colSpan={4} className="text-center">
//                     No Published Forms
//                   </td>
//                 </tr>
//               ) : (
//                 NonverifiedForms.map((form, index) => (
//                   <tr key={form._id}>
//                     <td className="p-4 px-2 border-2 border-white">
//                       {indexOfFirstForm + index + 1}
//                     </td>
//                     <td className="p-4 px-2 border-2 border-white">
//                       {form.name}
//                     </td>
//                     <td className="p-4 px-2 border-2 border-white">
//                       {form.email}
//                     </td>
//                     <td className="p-4 px-2 border-2 border-white">
//                       <div className="flex items-center gap-4 justify-center">
//                         {/* <Link href={"/blogs/edit/" + blog._id}> */}
//                         <button
//                           className="text-[15px] inline-flex gap-[10px] p-2 px-4 rounded-[10px] font-bold border border-[#555] text-[#444] transition duration-300 ease hover:text-white hover:bg-[#ff5555] hover:border-[#ff5555]"
//                           title="edit"
//                           onClick={() => {
//                             setIsOpen(true);
//                             setFormid(form._id);
//                           }}
//                         >
//                           <MdFormatListBulleted />
//                         </button>
//                         {/* </Link> */}
//                         <Link href={"/formdata/delete/" + form._id}>
//                           <button
//                             className="text-[15px] inline-flex gap-[10px] p-2 px-4 rounded-[10px] font-bold border border-[#555] text-[#444] transition duration-300 ease hover:text-white hover:bg-[#ff5555] hover:border-[#ff5555]"
//                             title="delete"
//                           >
//                             <RiDeleteBin6Fill />
//                           </button>
//                         </Link>
//                         <button
//                           className="text-[15px] inline-flex gap-[10px] p-2 px-4 rounded-[10px] font-bold border border-[#555] text-[#444] transition duration-300 ease hover:text-white hover:bg-[#ff5555] hover:border-[#ff5555]"
//                           title="verify"
//                           onClick={() => handleVerify(form._id)}
//                         >
//                           <MdVerified />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//           {NonverifiedForms.length === 0 ? (
//             ""
//           ) : (
//             <div className="flex items-center justify-center my-12">
//               <button
//                 onClick={() => paginate(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className="bg-gray-200 border-none text-gray-800 py-3 px-5 font-semibold mr-1 rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed active:bg-blue-500 active:text-white"
//               >
//                 Previous
//               </button>
//               {pageNumber
//                 .slice(
//                   Math.max(currentPage - 3, 0),
//                   Math.min(currentPage + 2, pageNumber.length)
//                 )
//                 .map((number) => (
//                   <button
//                     key={number}
//                     onClick={() => paginate(number)}
//                     className={`${
//                       currentPage === number ? "active" : ""
//                     } bg-gray-200 border-none text-gray-800 py-3 px-5 font-semibold mr-1 rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed active:bg-blue-500 active:text-white`}
//                   >
//                     {number}
//                   </button>
//                 ))}
//               <button
//                 onClick={() => paginate(currentPage + 1)}
//                 // disabled={currentForms.length < perpage}
//                 disabled={currentPage === pageNumber.length}
//                 className="bg-gray-200 border-none text-gray-800 py-3 px-5 font-semibold mr-1 rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed active:bg-blue-500 active:text-white"
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//       <Form isOpen={isOpen} setIsOpen={setIsOpen} formid={formid} />
//     </>
//   );
// }

// export default page;

"use client";
import React, { useState, useEffect } from "react";
import { BsPostcard } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import useFetchData from "../hooks/useFetchData";
import { MdFormatListBulleted, MdVerified } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import Form from "../Components/Form";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import Loader from "../Components/Loader";
import { sendContactForm } from "../lib/api";

function page() {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [formid, setFormid] = useState("");
  const [perpage] = useState(4);
  const { alldata } = useFetchData("/api/getform");
  const [region, setRegion] = useState("All");
  const [verifying, setVerifying] = useState(null);
  // if (!alldata) {
  //   return <Loader />;
  // }
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // console.log("all data-->", alldata);
  const filteredform =
    searchQuery.trim() === ""
      ? alldata
      : alldata.filter((form) =>
          form.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
  // let NonverifiedForms;
  // if (user?.region === "All") {
  //   NonverifiedForms = filteredform.filter((e) => e.verified === false);
  // } else {
  //   NonverifiedForms = filteredform.filter(
  //     (e) => e.verified === false && e.region === user?.region
  //   );
  // }
  // const NonverifiedForms = filteredform.filter((e) => {
  //   return (
  //     e.verified === false &&
  //     (user?.region === "All" || e.region === user?.region)
  //   );
  // });
  const NonverifiedForms = filteredform.filter((e) => {
    return (
      e.verified === false &&
      (user?.region === "All"
        ? region === "All" || e.region === region
        : e.region === user?.region)
    );
  });
  // const NonverifiedForms = filteredform.filter(
  //   (e) => e.verified === false && e.region === user?.region
  // );

  const indexOfLastForm = currentPage * perpage;
  const indexOfFirstForm = indexOfLastForm - perpage;
  const currentForms = NonverifiedForms.slice(
    indexOfFirstForm,
    indexOfLastForm
  );

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(NonverifiedForms.length / perpage); i++) {
    pageNumber.push(i);
  }

  const handleVerify = async (formId, form) => {
    setVerifying(formId);
    try {
      const response = await axios.put("/api/getform/?id=" + formId, {
        verified: true,
      });
      if (response.status === 200) {
        // Optionally, refresh the data or update the state to reflect changes
        await sendContactForm(form);
        router.push("/formdata");
        alert("Member Verified Successfully!");
      }
    } catch (error) {
      console.error("Error verifying form:", error);
      alert("Failed to verify form.");
    } finally {
      setVerifying(null);
    }
  };
  // const handleSendMail = async (form) => {
  //   try {
  //     // console.log(form);
  //     await sendContactForm(form);
  //     console.log("message sent");
  //   } catch (error) {
  //     alert(error);
  //   }
  // };
  useEffect(() => {
    if (!isAuthenticated) {
      // window.location.href = "/login";
      router.push("/login");
    } else if (alldata) {
      setLoading(false);
    }
  }, [isAuthenticated, alldata]);

  if (loading || !isAuthenticated || !alldata) {
    return <Loader />;
  }
  return (
    <>
      <div className="relative max-w-screen-2xl m-auto h-full p-8 z-[5]">
        <div className="flex  justify-between relative">
          <div>
            <h2 className="text-[#121533] text-2xl font-extrabold">
              Active Members Application Form
              <br />
              (Non Verified Forms Data)
              {/* <span className="text-black">Blogs</span> */}
            </h2>
            {/* <h3 className="text-sm tracking-[4px] block uppercase text-[#7e37d8] font-bold">
          ADMIN PANEL
        </h3> */}
          </div>

          <div className="flex items-center gap-4 text-xl text-[#121533]">
            <BsPostcard />
            <span>/</span>
            <span>Forms</span>
          </div>
        </div>
        <div className="w-full h-full py-10">
          <div className="flex flex-col lg:flex-row  items-center mb-4 gap-4">
            <div className="w-full flex gap-8 items-center ">
              <h2 className="w-36 lg:w-28  font-semibold text-lg">
                Search data:
              </h2>
              <input
                className="w-full lg:w-96 h-9 p-2 border-[1px] border-[#999] outline-[#121533] shadow-sm shadow-[#999] rounded-lg"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="search by title..."
              />
            </div>
            {user?.region === "All" ? (
              <div className="w-full flex gap-8 items-center justify-end">
                <label
                  for="country"
                  class="block w-36 lg:w-20 font-semibold text-lg  text-gray-900 "
                >
                  Region :
                </label>
                <div class="w-full lg:w-80">
                  <select
                    id="region"
                    name="region"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    class="block items-center w-full h-9 p-2 rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#121533]  sm:text-sm sm:leading-6"
                  >
                    <option value="All">All</option>
                    <option value="North">North</option>
                    <option value="South">South</option>
                    <option value="East">East</option>
                    <option value="West">West</option>
                  </select>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <table className="w-full text-white text-left  ">
            <thead>
              <tr className="">
                <th className=" bg-[#121533] p-3 text-lg border-2 border-white">
                  #
                </th>
                <th className=" bg-[#121533] p-3 text-lg border-2 border-white ">
                  Name
                </th>
                <th className=" bg-[#121533] p-3 text-lg border-2 border-white">
                  email
                </th>
                <th className=" bg-[#121533] p-3 text-lg border-2 border-white">
                  View / Delete
                </th>
              </tr>
            </thead>
            <tbody className="border border-black bg-[#f0f0f0] text-[#121533]">
              {currentForms.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center">
                    No Published Forms
                  </td>
                </tr>
              ) : (
                currentForms.map((form, index) => (
                  <tr key={form._id}>
                    <td className="p-4 px-2 border-2 border-white">
                      {indexOfFirstForm + index + 1}
                    </td>
                    <td className="p-4 px-2 border-2 border-white">
                      {form.name}
                    </td>
                    <td className="p-4 px-2 border-2 border-white">
                      {form.email}
                    </td>
                    <td className="p-4 px-2 border-2 border-white">
                      <div className="flex items-center gap-4 justify-center">
                        <button
                          className="text-xl lg:text-[15px] flex flex-col lg:flex-row items-center  gap-[10px] p-2 px-4 rounded-[10px] font-bold border border-[#555] text-[#444] transition duration-300 ease hover:text-white hover:bg-[#ff5555] hover:border-[#ff5555]"
                          title="view"
                          onClick={() => {
                            setIsOpen(true);
                            setFormid(form._id);
                          }}
                        >
                          <MdFormatListBulleted />
                          <p className="text-sm">View Full Application</p>
                        </button>

                        <Link href={"/formdata/delete/" + form._id}>
                          <button
                            className="text-xl lg:text-[15px] flex flex-col lg:flex-row items-center gap-[10px] p-2 px-4 rounded-[10px] font-bold border border-[#555] text-[#444] transition duration-300 ease hover:text-white hover:bg-red-600 hover:border-red-600"
                            title="delete"
                          >
                            <RiDeleteBin6Fill />
                            <p className="text-sm">Delete Data</p>
                          </button>
                        </Link>

                        <button
                          className="text-xl lg:text-[15px] flex flex-col lg:flex-row items-center gap-[10px] p-2 px-4 rounded-[10px] font-bold border border-[#555] text-[#444] transition duration-300 ease hover:text-white hover:bg-green-500 hover:border-green-500"
                          title="verify"
                          onClick={() => handleVerify(form._id, form)}
                        >
                          <MdVerified />
                          <p className="text-sm">
                            {verifying === form._id ? (
                              <span>verifying....</span>
                            ) : (
                              <span>Approve Now</span>
                            )}
                          </p>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          {NonverifiedForms.length > 4 && (
            <div className="flex items-center justify-center my-12">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-gray-200 border-none text-gray-800 py-3 px-5 font-semibold mr-1 rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {pageNumber.map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`${
                    currentPage === number ? "active" : ""
                  } bg-gray-200 border-none text-gray-800 py-3 px-5 font-semibold mr-1 rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white`}
                >
                  {number}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === pageNumber.length}
                className="bg-gray-200 border-none text-gray-800 py-3 px-5 font-semibold mr-1 rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
      <Form isOpen={isOpen} setIsOpen={setIsOpen} formid={formid} />
    </>
  );
}

export default page;
