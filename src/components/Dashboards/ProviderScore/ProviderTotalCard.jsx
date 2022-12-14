import React from "react";
import { useRecoilState } from "recoil";
import providerComponentAPIData from "../../../recoil/atoms/providerComponentAPIData";

const ProviderTotalCard = () => {
  // GLobal variable
  const [providerComponentApi, setProviderComponentApi] = useRecoilState(
    providerComponentAPIData
  );
  return (
    <div className="h-[300px] w-full flex-1  lg:flex-[0.2]  rounded-md grid grid-cols-4 lg:grid-cols-2 gap-2 ">
      <div className="flex justify-center flex-col items-center  text-xl rounded-md border p-4">
        <h1 className="text-[#000C08] opacity-40 text-[10px] md:text-[14px]">
          Patient
        </h1>
        <h3 className="text-sm sm:text-base md:text-xl font-semibold mt-2 text-[#000C08] opacity-80">
          {providerComponentApi?.provider_total_card?.member_count}
        </h3>
      </div>
      <div className="flex justify-center flex-col items-center  text-xl rounded-md border p-4">
        <h1 className="text-[#000C08] opacity-40 text-[10px] md:text-[14px]">
          Encounter
        </h1>
        <h3 className="text-sm sm:text-base md:text-xl font-semibold mt-2 text-[#000C08] opacity-80">
          {providerComponentApi?.provider_info?.encounter}
        </h3>
      </div>
      <div className="flex justify-center flex-col items-center  text-xl rounded-md border p-4">
        <h1 className="text-[#000C08] opacity-40 text-[10px] md:text-[14px]">
          Surveys
        </h1>
        <h3 className="text-sm sm:text-base md:text-xl font-semibold mt-2 text-[#000C08] opacity-80">
          {providerComponentApi?.provider_total_card?.member_count}
        </h3>
      </div>
      <div className="flex justify-center flex-col items-center  text-xl rounded-md border p-4">
        <h1 className="text-[#000C08] opacity-40 text-[10px] md:text-[14px]">
          NPS Response
        </h1>
        <h3 className="text-sm sm:text-base md:text-xl font-semibold mt-2 text-[#000C08] opacity-80">
          {providerComponentApi?.provider_total_card?.comment_count}
        </h3>
      </div>
    </div>
  );
};

export default ProviderTotalCard;
