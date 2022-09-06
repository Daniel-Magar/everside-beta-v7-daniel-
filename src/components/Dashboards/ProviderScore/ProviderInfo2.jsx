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
  return (
    <>
      <div className="w-[100%]   border  p-4  rounded-lg bg-white">
        <div className=" grid grid-cols-6 text-gray-500 uppercase font-normal bg-white border-b-2 ">
          <div className=" text-gray-400  capitalize  font-normal cursor-pointer hover:text-gray-600 transition">
            Provider
          </div>

          <div className=" text-gray-400   capitalize font-normal">Date</div>

          <div className=" text-gray-400   capitalize font-normal">Patient</div>
          <div className=" text-gray-400   capitalize font-normal">
            Encounter
          </div>
          <div className=" text-gray-400   capitalize font-norma ">Surveys</div>
          <div className=" text-gray-400   capitalize font-normal">
            NPS Response
          </div>
        </div>
        <div className=" grid grid-cols-6 gap-1 items-center py-2 min-h-[60px] min-w-[600px] ">
          <div className=" text-gray-700  capitalize  font-normal cursor-pointer hover:text-gray-600 transition ">
            {providerComponentApi?.provider_info?.name}
          </div>

          <div className=" text-gray-700   capitalize font-normal ">
            {providerInfoDateFromRecoil}
          </div>

          <div className=" text-gray-700   capitalize font-normal ">
            {providerComponentApi?.provider_total_card?.member_count}
          </div>
          <div className=" text-gray-700   capitalize font-normal ">
            {providerComponentApi?.provider_total_card?.member_count}
          </div>
          <div className=" text-gray-700   capitalize font-normal ">
            {providerComponentApi?.provider_total_card?.member_count}
          </div>
          <div className=" text-gray-700   capitalize font-normal ">9</div>
        </div>
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
      </div>

      {/* <div className="w-full bg-blue-100 flex">
        <div></div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div> */}
    </>
  );
};

export default ProviderInfo2;
