"use client";
import React, { useEffect, useState } from "react";
import { BsPostcard } from "react-icons/bs";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { MdDelete } from "react-icons/md";
function Delete() {
  const router = useRouter();
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    } else {
      axios.get("/api/getform?id=" + id).then((response) => {
        setProductInfo(response.data);
      });
    }
  }, [id]);

  function goback() {
    router.push("/formdata");
  }
  async function deleteOneblog() {
    await axios.delete("/api/getform?id=" + id);
    goback();
  }
  return (
    <>
      <div className="relative max-w-screen-2xl m-auto h-full pt-28 ml-32 p-8 z-[5]">
        <div className="flex  justify-between relative">
          <div>
            <h2 className="text-[#7e37d8] text-2xl font-extrabold">
              Delete <span className="text-black">{productInfo?.name}</span>
            </h2>
            <h3 className="text-sm tracking-[4px] block uppercase text-[#7e37d8] font-bold">
              ADMIN PANEL
            </h3>
          </div>

          <div className="flex items-center gap-4 text-xl text-[#571f9e]">
            <BsPostcard />
            <span>/</span>
            <span>Edit Froms</span>
          </div>
        </div>
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ height: "calc(100vh - 250px)" }}
        >
          <div className="w-[450px] h-[320px] bg-white flex flex-col items-center justify-center p-5 py-6 rounded-lg gap-[13px] relative overflow-hidden shadow-[2px_2px_20px_rgba(0,0,0,0.062)]">
            <MdDelete className="w-40 h-40 text-red-500" />
            <p className="text-xl font-extrabold">Are you sure?</p>
            <p className="text-center font-semibold text-gray-500">
              If you delete this form content it will be permenent deleted
            </p>
            <div className="flex gap-5">
              <button
                onClick={deleteOneblog}
                className="w-[120px] h-[50px] bg-[#7b57ff] transition duration-200 border-none text-gray-100 cursor-pointer font-semibold text-base rounded-full hover:bg-[#9173ff]"
              >
                Delete
              </button>
              <button
                onClick={goback}
                className="w-[120px] h-[50px] bg-gray-300 transition duration-200 text-gray-800 border-none cursor-pointer font-semibold text-base rounded-full hover:bg-gray-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delete;
