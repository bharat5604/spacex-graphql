import { Dialog, Transition } from "@headlessui/react";
import { compareAsc, format } from "date-fns";
import { Fragment, useState } from "react";

export default function Compare({ openModal, isOpen, closeModal, data }: any) {
  const [compareLeft, setCompareLeft] = useState({});
  const [compareRight, setCompareRight] = useState({});
  console.log("data1111", data);

  return (
    <>
      <div className=" inset-0 flex items-center justify-center"></div>
      <div className="mt-4 text-center cursor-pointer"></div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full max-w-[90%] min-h-screen
                 transform overflow-hidden rounded-2xl bg-gray-700 p-6 text-left align-middle shadow-xl transition-all"
                >
                  <Dialog.Title
                    as="h1"
                    className="text-center leading-6 text-5xl text-blue-700 font-bold"
                  >
                    Compare
                  </Dialog.Title>
                  <div className="absolute top-4 right-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      x
                    </button>
                  </div>
                  <div className="mt-6">
                    <div className="flex justify-between">
                      <div className="w-full">
                        <select
                          name=""
                          id=""
                          className="w-full h-10 rounded-xl px-2 shadow-none outline-none"
                          onChange={(e: any) => {
                            // setCompareLeft(e.target.value);
                            data?.filter((item: any) => {
                              if (item?.id == e.target.value) {
                                setCompareLeft(item);
                              }
                            });
                          }}
                        >
                          <option value="">select</option>
                          {data?.map((item: any) => (
                            <option value={item?.id} key={item?.id}>
                              {item?.mission_name}
                            </option>
                          ))}
                        </select>
                        <div className="mt-4">
                          {compareLeft?.id ? (
                            <div className="shadow p-3 rounded-lg bg-gray-900">
                              <h1 className="text-white text-center font-bold mb-2">
                                {compareLeft?.mission_name}
                              </h1>
                              <h2 className="text-blue-700 text-center mb-2">
                                {compareLeft?.launch_site?.site_name_long}
                              </h2>
                              <h2 className="text-white text-center  mb-2">
                                {compareLeft?.launch_date_local}
                                {/* {format(
                                new Date(compareRight?.launch_date_local),
                                "YYYY-mm-dd"
                              )} */}
                              </h2>
                              <h2 className="text-white">
                                Video URL :
                                <a
                                  href={compareLeft?.links?.video_link}
                                  target="_blank"
                                  className="text-blue-600"
                                >
                                  {" "}
                                  {compareLeft?.links?.video_link}
                                </a>
                              </h2>
                              <h2 className="font-bold text-3xl text-white my-4 text-center">
                                Ships
                              </h2>
                              <div className="grid grid-cols-1 text-left gap-4 ">
                                {compareLeft?.ships?.map((ship: any) => (
                                  <div className="">
                                    <div className="bg-gray-600 shadow-2xl rounded-2xl p-4">
                                      <h2 className="text-white">
                                        {" "}
                                        <strong>Name</strong> : {ship?.name}
                                      </h2>
                                      <h2 className="text-white">
                                        {" "}
                                        <strong>Home Port</strong> :{" "}
                                        {ship?.home_port}
                                      </h2>
                                      <img src={`/${ship?.image}`} alt="" />
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className=" my-3"></div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="w-full"></div>
                      <div className="w-full">
                        <select
                          name=""
                          id=""
                          className="w-full h-10 rounded-xl px-2 shadow-none outline-none"
                          onChange={(e: any) => {
                            data.filter((item: any) => {
                              if (item?.id == e.target.value) {
                                setCompareRight(item);
                              }
                            });
                          }}
                        >
                          <option value="">select</option>
                          {data?.map((item: any) => (
                            <option value={item?.id} key={item?.id}>
                              {item?.mission_name}
                            </option>
                          ))}
                        </select>
                        <div className="mt-4 text-center">
                          {compareRight?.id ? (
                            <div className="shadow p-3 rounded-lg bg-gray-900">
                              <h1 className="text-white text-center font-bold mb-2">
                                {compareRight?.mission_name}
                              </h1>
                              <h2 className="text-blue-700 text-center mb-2">
                                {compareRight?.launch_site?.site_name_long}
                              </h2>
                              <h2 className="text-white text-center  mb-2">
                                {compareRight?.launch_date_local}
                                {/* {format(
                                new Date(compareRight?.launch_date_local),
                                "YYYY-mm-dd"
                              )} */}
                              </h2>
                              <h2 className="text-white">
                                Video URL :
                                <a
                                  href={compareRight?.links?.video_link}
                                  target="_blank"
                                  className="text-blue-600"
                                >
                                  {" "}
                                  {compareRight?.links?.video_link}
                                </a>
                              </h2>
                              <h2 className="font-bold text-3xl text-white my-4 text-center">
                                Ships
                              </h2>
                              <div className="grid grid-cols-1 text-left gap-4 ">
                                {compareRight?.ships?.map((ship: any) => (
                                  <div className="">
                                    <div className="bg-gray-600 shadow-2xl rounded-2xl p-4">
                                      <h2 className="text-white">
                                        {" "}
                                        <strong>Name</strong> : {ship?.name}
                                      </h2>
                                      <h2 className="text-white">
                                        {" "}
                                        <strong>Home Port</strong> :{" "}
                                        {ship?.home_port}
                                      </h2>
                                      <img src={`/${ship?.image}`} alt="" />
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className=" my-3"></div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
