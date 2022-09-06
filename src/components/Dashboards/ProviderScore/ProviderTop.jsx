import React, { useEffect, useState } from "react";

import providersApiData from "../../../recoil/atoms/providersApiData";
import { useRecoilState } from "recoil";
import PuffLoader from "react-spinners/PuffLoader";
import SearchIcons from "../../../assets/img/global-img/searchIcon.svg";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import startDateValue from "../../../recoil/atoms/StartDateAtom";
import startMonthValue from "../../../recoil/atoms/StartMonthAtom";
import endDateValue from "../../../recoil/atoms/EndDateAtom";
import endMonthValue from "../../../recoil/atoms/EndMonth";
import ClinicValue from "../../../recoil/atoms/ClinicValue";
import newRegionGlobalValue from "../../../recoil/atoms/newRegionGlobalValue";
import { BASE_API_LINK } from "../../../utils/BaseAPILink";
import clientValue from "../../../recoil/atoms/clientValue";
import providerSentimentCountAtom from "../../../recoil/atoms/providerSentimentCountAtom";

const ProviderTop = () => {
  const [apiData, setApiData] = useState();
  const [providerApiAtom, setProviderApiAtom] =
    useRecoilState(providersApiData);

  useEffect(() => {
    setApiData(providerApiAtom?.data);

    // console.log(
    //   "providerApiAtom?.data: 2222222222222222222222222222222222222222222222222222222"
    // );
    // console.log(providerApiAtom?.data);
  }, [providerApiAtom]);

  const [searchStatus, setSearchStatus] = useState(false);
  const [inputData, setInputData] = useState("");

  const handleInput = (e) => {
    setInputData(e.target.value);
  };

  const [usernameLocal, setUsernameLocal] = useState();

  useEffect(() => {
    setUsernameLocal(sessionStorage?.getItem("username"));
    <div>ProviderTop</div>;
  }, [sessionStorage?.getItem("username")]);

  const [finalStartDate, setFinalStartDate] = useRecoilState(startDateValue);
  const [finalStartMonth, setFinalStartMonth] = useRecoilState(startMonthValue);
  const [finalEndDate, setFinalEndDate] = useRecoilState(endDateValue);
  const [finalEndMonth, setFinalEndMonth] = useRecoilState(endMonthValue);
  const [selectedClinicValue, setSelectedClinicValue] =
    useRecoilState(ClinicValue);
  const [newRegionGlobal, setNewRegionGlobal] =
    useRecoilState(newRegionGlobalValue);

  const [selectedClientValue, setSelectedClientValue] =
    useRecoilState(clientValue);

  return (
    <div className=" rounded-lg bg-white transition-all w-[100%] p-2 h-[388px] border">
      {apiData?.data?.length === 0 && (
        <div className="flex 2 h-full w-full justify-center items-center text-gray-400">
          No Providers
        </div>
      )}

      <div>
        <div className=" pt-2  flex justify-between items-end mb-2">
          <h1 className=" text-left font-bold  flex-1 px-2 opacity-80 text-[#000C08]">
            Providers Top Comments
          </h1>
          <div className="flex items-center gap-2">
            <div className=" rounded-md  flex justify-end items-center ">
              <input
                type="text"
                placeholder="Search.."
                className={` outline-none  transition-all pl-2 text-xs  pb-1 w-[80px] sm:w-[100px] ${
                  searchStatus
                    ? "xl:w-[100%] ease-in  xl:border-b-[1px]"
                    : "xl:w-[0%] ease-out "
                }`}
                onChange={handleInput}
                value={inputData}
              />

              <img
                src={SearchIcons}
                alt="searchIcon"
                className="px-2 cursor-pointer"
                onClick={() => setSearchStatus(!searchStatus)}
              />
            </div>

            <a
              href={
                BASE_API_LINK +
                "providerDataDownload?" +
                "username=" +
                usernameLocal +
                "&start_year=" +
                finalStartDate +
                "&" +
                "start_month=" +
                finalStartMonth +
                "&" +
                "end_year=" +
                finalEndDate +
                "&" +
                "end_month=" +
                finalEndMonth +
                "&region=" +
                newRegionGlobal +
                "&clinic=" +
                selectedClinicValue +
                "&client=" +
                selectedClientValue
              }
            >
              <FileDownloadOutlinedIcon
                fontSize="small"
                className="cursor-pointer text-gray-400"
              />
            </a>
          </div>
        </div>

        <div className="h-[330px] overflow-y-scroll">
          <table className="">
            <thead className=" sticky top-0 bg-white">
              <tr className="text-xs text-gray-400   shadow">
                <th className=" font-normal text-left px-1">
                  Top Positive Topic
                </th>
                <th className="font-normal text-left  px-1">
                  Top Negative Topic
                </th>
                <th className="font-normal text-left  px-1">Survey Count</th>
                <th className=" font-normal text-left px-1">Score</th>
                <th className=" font-normal text-left px-1">NPS</th>
              </tr>
            </thead>

            <tbody>
              <tr className=" h-[50px] ">
                <td className="w-[15%] px-1">
                  <div className=" text-gray-500 text-xs flex  items-center ">
                    Professionalism
                  </div>
                </td>
                <td className="w-[20%] px-1">
                  <div className="text-gray-500 text-xs flex  items-center">
                    Unskilled
                  </div>
                </td>
                <td className="w-[5%] px-1">
                  <div className="text-sm text-gray-500  my-auto">5</div>
                </td>
                <td className="w-[5%] px-1">
                  <div className="text-sm text-gray-500  my-auto">6</div>
                </td>
                <td className="w-[24%] px-1">
                  <div className="w-[100%] flex justify-start items-center">
                    <div
                      style={{
                        width: "70%",
                      }}
                      className="bg-[#0094DE] h-[25px] min-w-[15%] py-1 text-white text-center rounded-r-md flex justify-end items-center pr-1"
                    >
                      70
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" h-[50px] ">
                <td className="w-[15%] px-1">
                  <div className=" text-gray-500 text-xs flex  items-center ">
                    Concerned
                  </div>
                </td>
                <td className="w-[20%] px-1">
                  <div className="text-gray-500 text-xs flex  items-center">
                    skilled
                  </div>
                </td>
                <td className="w-[5%] px-1">
                  <div className="text-sm text-gray-500  my-auto">8</div>
                </td>
                <td className="w-[5%] px-1">
                  <div className="text-sm text-gray-500  my-auto">9</div>
                </td>
                <td className="w-[24%] px-1">
                  <div className="w-[100%] flex justify-start items-center">
                    <div
                      style={{
                        width: "70%",
                      }}
                      className="bg-[#0094DE] h-[25px] min-w-[15%] py-1 text-white text-center rounded-r-md flex justify-end items-center pr-1"
                    >
                      70
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" h-[50px] ">
                <td className="w-[15%] px-1">
                  <div className=" text-gray-500 text-xs flex  items-center ">
                    Concerned
                  </div>
                </td>
                <td className="w-[20%] px-1">
                  <div className="text-gray-500 text-xs flex  items-center">
                    skilled
                  </div>
                </td>
                <td className="w-[5%] px-1">
                  <div className="text-sm text-gray-500  my-auto">8</div>
                </td>
                <td className="w-[5%] px-1">
                  <div className="text-sm text-gray-500  my-auto">9</div>
                </td>
                <td className="w-[24%] px-1">
                  <div className="w-[100%] flex justify-start items-center">
                    <div
                      style={{
                        width: "70%",
                      }}
                      className="bg-[#0094DE] h-[25px] min-w-[15%] py-1 text-white text-center rounded-r-md flex justify-end items-center pr-1"
                    >
                      70
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" h-[50px] ">
                <td className="w-[15%] px-1">
                  <div className=" text-gray-500 text-xs flex  items-center ">
                    Concerned
                  </div>
                </td>
                <td className="w-[20%] px-1">
                  <div className="text-gray-500 text-xs flex  items-center">
                    skilled
                  </div>
                </td>
                <td className="w-[5%] px-1">
                  <div className="text-sm text-gray-500  my-auto">8</div>
                </td>
                <td className="w-[5%] px-1">
                  <div className="text-sm text-gray-500  my-auto">9</div>
                </td>
                <td className="w-[24%] px-1">
                  <div className="w-[100%] flex justify-start items-center">
                    <div
                      style={{
                        width: "70%",
                      }}
                      className="bg-[#0094DE] h-[25px] min-w-[15%] py-1 text-white text-center rounded-r-md flex justify-end items-center pr-1"
                    >
                      70
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProviderTop;
