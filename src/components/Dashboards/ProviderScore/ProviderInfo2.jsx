import React, { useEffect, useRef, useState } from "react";

import { useRecoilState } from "recoil";
import providerComponentAPIData from "../../../recoil/atoms/providerComponentAPIData";

const ProviderInfo2 = () => {
  const [providerComponentApi, setProviderComponentApi] = useRecoilState(
    providerComponentAPIData
  );

  const [starArray, setStarArray] = useState([]);

  useEffect(() => {
    console.log("%%%%%%%%%%", providerComponentApi);

    setStarArray(providerComponentApi?.provider_star);
  }, [providerComponentApi]);
  return (
    <>
      <div className="w-[100%]   border  p-2  rounded-lg bg-white">
        <div className=" grid grid-cols-[minmax(150px,200px)_minmax(150px,120px)_minmax(100px,120px)_minmax(100px,120px)_minmax(100px,120px)_minmax(80px,100px)] gap-1   min-w-[600px]  text-[12px] text-gray-500 uppercase font-normal bg-white border-b-2 ">
          <div
            onClick={() => setAscSort(!ascSort)}
            className=" text-gray-400  capitalize  font-normal cursor-pointer hover:text-gray-600 transition  "
          >
            {" "}
            Provider
          </div>

          <div className=" text-gray-400   capitalize font-normal  ">Date</div>

          <div className=" text-gray-400   capitalize font-normal  ">
            Patient
          </div>
          <div className=" text-gray-400   capitalize font-normal  ">
            Encounter
          </div>
          <div className=" text-gray-400   capitalize font-normal  ">
            Surveys
          </div>
          <div className=" text-gray-400   capitalize font-normal  ">
            NPS Response
          </div>
        </div>
        <div className=" grid grid-cols-[minmax(150px,200px)_minmax(150px,120px)_minmax(100px,120px)_minmax(100px,120px)_minmax(100px,120px)_minmax(80px,100px)] gap-1 items-center py-2 min-h-[60px] min-w-[600px] ">
          <div
            onClick={() => setAscSort(!ascSort)}
            className=" text-gray-700  capitalize  font-normal cursor-pointer hover:text-gray-600 transition  "
          >
            {providerComponentApi?.provider_info?.name}
          </div>

          <div className=" text-gray-700   capitalize font-normal  ">
            {providerComponentApi?.provider_info?.name}
          </div>

          <div className=" text-gray-700   capitalize font-normal  ">
            {providerComponentApi?.provider_total_card?.member_count}
          </div>
          <div className=" text-gray-700   capitalize font-normal  ">
            {providerComponentApi?.provider_total_card?.member_count}
          </div>
          <div className=" text-gray-700   capitalize font-normal  ">
            {providerComponentApi?.provider_total_card?.member_count}
          </div>
          <div className=" text-gray-700   capitalize font-normal  ">9</div>
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
