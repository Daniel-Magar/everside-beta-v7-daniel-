import React, { useEffect, useRef, useState } from "react";

import { useRecoilState } from "recoil";
import providerComponentAPIData from "../../../recoil/atoms/providerComponentAPIData";
import ProviderInfoDate from "../../../recoil/atoms/ProviderInfoDate";

const ProviderInfo2 = () => {
  const [providerComponentApi, setProviderComponentApi] = useRecoilState(
    providerComponentAPIData
  );

  const [starArray, setStarArray] = useState([]);

  useEffect(() => {
    setStarArray(providerComponentApi?.provider_star);
  }, [providerComponentApi]);

  const [providerInfoDateFromRecoil, setProviderInfoDateFromRecoil] =
    useRecoilState(ProviderInfoDate);
  useEffect(() => {
    console.log("Date Selected ATom:", providerInfoDateFromRecoil);
  }, [providerInfoDateFromRecoil]);

  useEffect(() => {
    console.log("Provider Info");
    console.log(providerComponentApi);
  }, [providerComponentApi]);

  return (
    <>
      <div className="w-[100%]   border  p-2  rounded-lg bg-white">
        {!providerComponentApi && (
          <div className="h-full w-full bg-[#ffffff] z-[200] rounded-lg flex justify-center items-center">
            <PuffLoader color="#00ac69" size={50} width={100} />
          </div>
        )}
        <div className="h-[100px] overflow-x-scroll lg:overflow-hidden">
          <div className="text-[12px] p-3 pb-0 w-full  ">
            <div className=" sticky bg-white top-0 z-[5] ">
              <div className=" grid grid-cols-[minmax(150px,800px)_minmax(120px,200px)_minmax(100px,200px)_minmax(100px,700px)_minmax(100px,700px)_minmax(150px,1fr)] gap-1   min-w-[700px]  text-[12px] text-gray-500  font-normal bg-white border-b-2 ">
                <div className=" text-gray-400   capitalize  font-normal">
                  Provider
                </div>
                <div className=" text-gray-400 capitalize  font-normal">
                  Date
                </div>
                <div className=" text-gray-400 capitalize font-normal">
                  Patient
                </div>
                <div className=" text-gray-400 capitalize font-normal">
                  Encounter
                </div>
                <div className=" text-gray-400 capitalize font-normal">
                  Surveys
                </div>
                <div className=" text-gray-400 capitalize font-normal">
                  NPS Response
                </div>
              </div>
              <div className=" grid grid-cols-[minmax(150px,800px)_minmax(120px,200px)_minmax(100px,200px)_minmax(100px,700px)_minmax(100px,700px)_minmax(150px,1fr)] gap-1   min-w-[600px]  text-[12px] text-gray-500  font-normal bg-white ">
                <div className="  text-gray-600  capitalize  font-normal text-[14px]  ">
                  {providerComponentApi?.provider_info?.name}, (
                  {providerComponentApi?.provider_info?.type})
                </div>
                <div className="  text-gray-600  capitalize  font-normal text-[14px]  ">
                  {providerInfoDateFromRecoil}
                </div>
                <div className="  text-gray-600  capitalize  font-normal text-[14px]  ">
                  {providerComponentApi?.provider_total_card?.member_count}
                </div>
                <div className="  text-gray-600  capitalize  font-normal text-[14px]  ">
                  {providerComponentApi?.provider_info?.encounter}
                </div>
                <div className="  text-gray-600  capitalize  font-normal text-[14px]  ">
                  {providerComponentApi?.provider_total_card?.member_count}
                </div>
                <div className="  text-gray-600  capitalize  font-normal text-[14px]  ">
                  {providerComponentApi?.provider_total_card?.comment_count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-[100%]   border  p-4  rounded-lg bg-white">
        <div className=" grid grid-cols-6 text-gray-500 uppercase font-normal bg-white border-b-2 ">
          <div className="text-sm sm:text-base md:text-xl font-semibold  text-gray-400  capitalize   cursor-pointer hover:text-gray-600 transition">
            Provider
          </div>

          <div className=" text-[12px] text-sm sm:text-base md:text-xl font-semibold  text-gray-400   capitalize ">
            Date
          </div>

          <div className="text-[12px] text-sm sm:text-base md:text-xl font-semibold  text-gray-400   capitalize ">
            Patient
          </div>
          <div className="text-[12px] text-sm sm:text-base md:text-xl font-semibold  text-gray-400   capitalize ">
            Encounter
          </div>
          <div className="text-[12px] text-sm sm:text-base md:text-xl font-semibold  text-gray-400   capitalize  ">
            Surveys
          </div>
          <div className="text-[12px] text-sm sm:text-base md:text-xl font-semibold  text-gray-400   capitalize ">
            NPS Response
          </div>
        </div>
        <div className=" grid grid-cols-6 items-center  ">
          <div className=" text-[12px] text-sm sm:text-base md:text-xl font-semibold  text-gray-700  capitalize  cursor-pointer hover:text-gray-600 transition ">
            {providerComponentApi?.provider_info?.name}
          </div>

          <div className=" text-[12px] text-sm sm:text-base md:text-xl font-semibold  text-gray-700   capitalize ">
            {providerInfoDateFromRecoil}
          </div>

          <div className=" text-[12px] text-sm sm:text-base md:text-xl font-semibold  text-gray-700   capitalize ">
            {providerComponentApi?.provider_total_card?.member_count}
          </div>
          <div className=" text-[12px] text-sm sm:text-base md:text-xl font-semibold  text-gray-700   capitalize ">
            {providerComponentApi?.provider_total_card?.member_count}
          </div>
          <div className=" text-[12px] text-sm sm:text-base md:text-xl font-semibold  text-gray-700   capitalize ">
            {providerComponentApi?.provider_total_card?.member_count}
          </div>
          <div className=" text-[12px] text-sm sm:text-base md:text-xl font-semibold  text-gray-700   capitalize ">
            {providerComponentApi?.provider_total_card?.comment_count}
          </div>
        </div>
      </div> */}
      {/* <table class="shadow-lg border-collapse border-none overflow-hidden bg-white w-full ">
          <tr className="rounded">
            <th class="bg-blue-100 border text-left px-6 py-3">Provider</th>
            <th class="bg-blue-100 border text-left px-6 py-3">Date</th>
            <th class="bg-blue-100 border text-left px-6 py-3">Patients</th>
            <th class="bg-blue-100 border text-left px-6 py-3">Encounters</th>
            <th class="bg-blue-100 border text-left px-6 py-3">Survey</th>
            <th class="bg-blue-100 border text-left px-6 py-3">NPS Response</th>
          </tr>
          <tr>
            <td class=" px-6 py-3">Dr. Batman</td>
            <td class=" px-6 py-3">July 2022</td>
            <td class=" px-6 py-3">135</td>
            <td class=" px-6 py-3">135</td>
            <td class=" px-6 py-3">9</td>
            <td class=" px-6 py-3">9</td>
          </tr>
        </table> */}
    </>
  );
};

export default ProviderInfo2;
