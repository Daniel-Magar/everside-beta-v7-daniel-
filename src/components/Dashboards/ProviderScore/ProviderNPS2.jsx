import React, { useEffect, useRef, useState } from "react";
// import MockApiNPSData from "../../../../mock_API/NPS/NPS Main Dashboard/NPSCard.json";
import CountUp from "react-countup";
// import PromoterIcon from "../../../../assets/img/NPS Dashboard/greenMan.svg";
import PromoterIcon from "../../../assets/img/NPS Dashboard/greenMan.svg";

import PassiveIcon from "../../../assets/img/NPS Dashboard/darkGrayMan.svg";
import DetractorIcon from "../../../assets/img/NPS Dashboard/redMan.svg";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { useRecoilState } from "recoil";
import PuffLoader from "react-spinners/PuffLoader";
import npsAPIdata from "../../../recoil/atoms/npsAPIdata";
import LoaderStatus from "../../../recoil/atoms/Loader";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import {
  exportComponentAsPNG,
  exxportComponentAsPDF,
} from "react-component-export-image";
import providerComponentAPIData from "../../../recoil/atoms/providerComponentAPIData";
// import CountUp from "react-countup";
// import PromoterIcon from "../../../../assets/img/NPS Dashboard/greenMan.svg";
// import PassiveIcon from "../../../../assets/img/NPS Dashboard/darkGrayMan.svg";
// import DetractorIcon from "../../../../assets/img/NPS Dashboard/redMan.svg";
// import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
// import { useRecoilState } from "recoil";
// import PuffLoader from "react-spinners/PuffLoader";
// import npsAPIdata from "../../../../recoil/atoms/npsAPIdata";
// import LoaderStatus from "../../../../recoil/atoms/Loader";
// import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
// import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
// import {
//   exportComponentAsPNG,
//   exxportComponentAsPDF,
// } from "react-component-export-image";

const ProviderNPS2 = () => {
  //   Provider NPS
  const [apiData, setApiData] = useState();
  const [npsApiData, setNpsApiData] = useRecoilState(npsAPIdata);
  const [promoters, setPromoters] = useState(0);
  const [passives, setPassives] = useState(0);
  const [detractors, setDetractors] = useState(0);

  const [providerComponentApi, setProviderComponentApi] = useRecoilState(
    providerComponentAPIData
  );

  useEffect(() => {
    setApiData(npsApiData);
    // console.log("nps Data:");
    // console.log(npsApiData);
  }, [npsApiData]);

  useEffect(() => {
    setTimeout(() => {
      setPromoters(providerComponentApi?.provider_nps_pie?.promoter);
      setPassives(providerComponentApi?.provider_nps_pie?.passive);
      setDetractors(providerComponentApi?.provider_nps_pie?.detractor);
    }, 100);
  }, [providerComponentApi?.provider_nps_pie?.promoter]);

  useEffect(() => {
    console.log("promoters :");
    console.log(promoters);
  }, [promoters]);

  const [showInfoNps, setShowInfoNps] = useState(false);

  const loaderAnimation = {
    width: promoters + "%",
    minWidth: "5%",
  };

  const NPSComponentDetailedCardComponent = useRef();

  useEffect(() => {
    console.log("NSS new----");
    console.log(providerComponentApi?.provider_nps);
  }, [providerComponentApi]);

  return (
    <>
      <div
        className="p-2 md:p-5  w-full border  rounded-lg bg-white flex justify-center md:justify-center items-center relative  "
        ref={NPSComponentDetailedCardComponent}
      >
        {!providerComponentApi && (
          <div className="min-h-[130px] bg-[#ffffff] z-[00] rounded-lg flex justify-center items-center">
            <PuffLoader color="#00ac69" size={50} width={100} />
          </div>
        )}

        {providerComponentApi && (
          <div className="w-full  relative ">
            <div className=" font-bold  flex justify-between gap-2 items-center">
              <div className="opacity-80 my-3">Net Promoter Score</div>

              <div className="flex items-center flex-row-reverse gap-2">
                <div
                  className="relative  "
                  onMouseEnter={() => setShowInfoNps(!showInfoNps)}
                  onMouseLeave={() => setShowInfoNps(!showInfoNps)}
                >
                  <InfoRoundedIcon className="text-gray-300 opacity-80 hover:opacity-100" />

                  {/* NPS explanation */}
                  <div
                    className={` ${
                      showInfoNps ? "block" : "hidden"
                    } absolute top-[100%] right-0  bg-gray-50 z-[100] opacity-100 text-[10px] text-gray-500 p-4 rounded-lg shadow-lg`}
                  >
                    <h1 className="mb-2">How is NPS calculated ?</h1>
                    <div className="flex justify-center items-center  mx-auto  gap-2 h-full">
                      <div className="flex justify-between items-center w-full gap-2">
                        <div className="flex justify-center items-center flex-col ">
                          <img
                            src={PromoterIcon}
                            alt="Promoter"
                            className="w-[20px] "
                          />
                          <div className="opacity-70 text-[10px]">
                            Promoters%
                          </div>
                        </div>
                        <div className="text-xl">-</div>

                        <div className="flex justify-center items-center flex-col">
                          <img
                            src={DetractorIcon}
                            alt="Promoter"
                            className="w-[20px]"
                          />
                          <div className="opacity-70 text-[10px] ">
                            Detractors%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() =>
                    exportComponentAsPNG(NPSComponentDetailedCardComponent)
                  }
                >
                  <FileDownloadOutlinedIcon
                    fontSize="small"
                    className="text-gray-400"
                  />
                </button>
              </div>
            </div>
            <div className="flex  justify-between  gap-3 md:gap-5  mb-5">
              {/* <div className="flex justify-start items-center gap-3 md:gap-5"> */}

              <div className="grid grid-cols-3 gap-16 ">
                <div className="text-center flex flex-col justify-center items-center gap-2">
                  <img src={PromoterIcon} alt="promoters" />
                  <h1 className="text-sm md:text-xl font-medium opacity-80">
                    {providerComponentApi?.provider_nps?.promoter < 1 ? (
                      providerComponentApi?.provider_nps?.promoter + "%"
                    ) : (
                      <CountUp
                        start={0}
                        duration={1}
                        end={providerComponentApi?.provider_nps?.promoter}
                        separator=","
                        suffix="%"
                      />
                    )}
                  </h1>
                  <p className=" opacity-60 text-xs font-medium">Promoters</p>
                </div>

                <div className="text-center flex flex-col justify-center items-center gap-2">
                  <img src={PassiveIcon} alt="passives" />
                  <h1 className="text-sm md:text-xl font-medium opacity-80">
                    {providerComponentApi?.provider_nps.passive < 1 ? (
                      providerComponentApi?.provider_nps?.passive + "%"
                    ) : (
                      <CountUp
                        start={0}
                        duration={1}
                        end={providerComponentApi?.provider_nps?.passive}
                        separator=","
                        suffix="%"
                      />
                    )}
                  </h1>
                  <p className=" opacity-60 text-xs font-medium">Passives</p>
                </div>

                <div className="text-center flex flex-col justify-center items-center gap-2">
                  <img src={DetractorIcon} alt="detractors" />
                  <h1 className="text-sm md:text-xl font-medium opacity-80">
                    {providerComponentApi?.provider_nps?.detractors < 1 ? (
                      providerComponentApi?.provider_nps?.detractors + "%"
                    ) : (
                      <CountUp
                        start={0}
                        duration={1}
                        end={providerComponentApi?.provider_nps?.detractor}
                        separator=","
                        suffix="%"
                      />
                    )}
                  </h1>
                  <p className=" opacity-60 text-xs font-medium">Detractors</p>
                </div>
              </div>

              {/* Graph */}
              <div className="relative flex-[0.3]     ">
                {/* Pie graph */}
                {/* <div className="absolute  top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-[14px] opacity-40">NPS</h1>
                    <p className="opacity-80 text-[18px] font-semibold  ">
                      <CountUp
                        start={0}
                        duration={1}
                        end={providerComponentApi?.provider_nps?.nps}
                        separator=","
                        suffix="%"
                      />
                    </p>
                  </div>
                </div> */}

                {/* <div className=" w-[100%] md:min-w-[110px] ">
                  <ResponsiveContainer height={180} width="100%">
                    <PieChart key={providerComponentApi?.provider_nps_pie}>
                      <Tooltip cursor={false} content={<CustomTooltip />} />
                      <Pie
                        data={providerComponentApi?.provider_nps_pie}
                        dataKey="percentage"
                        nameKey="label"
                        cx="50%"
                        cy="50%"
                        strokeWidth={5}
                        innerRadius="60%"
                        outerRadius="100%"
                        cornerRadius={6}
                        paddingAngle={-1}
                        startAngle={-270}
                        endAngle={-630}
                        minAngle={15}
                      >
                        {providerComponentApi?.provider_nps_pie?.map(
                          (entry, index) => (
                            <Cell key={Math.random()} fill={entry?.color} />
                          )
                        )}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProviderNPS2;

function CustomTooltip({ active, payload, label }) {
  const [npsAPIdataValue, setNpsApiDataValue] = useRecoilState(npsAPIdata);

  const [providerComponentApi, setProviderComponentApi] = useRecoilState(
    providerComponentAPIData
  );
  const [apiData, setApiData] = useState();

  useEffect(() => {
    setApiData(providerComponentApi);
  }, [providerComponentApi]);

  if (active) {
    return (
      <div className="rounded-md bg-[#fafafa] text-[#1a1a1a] p-3 shadow-2xl shadow-[#000000] min-w-[150px]">
        {payload?.map((data) => (
          <div key={Math.random()} className="">
            <div className="">
              <div className="flex justify-between items-center mb-2">
                <h1 className="capitalize mr-5 text-[14px] font-semibold">
                  {data?.name}
                </h1>

                <div
                  style={{ background: data?.payload?.color }}
                  className={`h-[8px] w-[8px] rounded-full  `}
                ></div>
              </div>

              <div className="flex justify-between items-center  w-full">
                <span className="text-[11px] font-semibold">Percentage:</span>
                <span className="text-[11px] font-semibold">
                  {data?.value} %
                </span>
              </div>

              <div className="flex justify-between items-center  w-full">
                <span className="text-[11px] font-semibold">Total count:</span>
                <span className="text-[11px] font-semibold">
                  {data?.name === "Promoters"
                    ? providerComponentApi?.provider_nps?.promoter_count
                    : ""}
                  {data?.name === "Passives"
                    ? providerComponentApi?.provider_nps?.passive_count
                    : ""}
                  {data?.name === "Detractors"
                    ? providerComponentApi?.provider_nps?.detractor_count
                    : ""}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return null;
}
