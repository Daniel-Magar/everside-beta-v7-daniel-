import React, { useEffect, useRef, useState } from "react";
// import TopCommentsQ1Data from "../../../mock_API/NPS/NPS Main Dashboard/Comments.json";
import { useRecoilState } from "recoil";
import PuffLoader from "react-spinners/PuffLoader";
import SearchIcons from "../../../assets/img/global-img/searchIcon.svg";
import totalCommentsApiData from "../../../recoil/atoms/totalCommentsApiData";
import PositiveIcon from "../../../assets/img/NPS Dashboard/Positive.svg";
import NegativeIcon from "../../../assets/img/NPS Dashboard/Negative.svg";
import ExtremeIcon from "../../../assets/img/NPS Dashboard/Extreme.svg";
import NeutralIcon from "../../../assets/img/NPS Dashboard/Neutral.svg";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";
import totalComments from "../../../recoil/atoms/totalComments";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import nssAPIdata from "../../../recoil/atoms/nssAPIdata";
import { useDetectClickOutside } from "react-detect-click-outside";
import chevron from "../../../assets/img/NPS Dashboard/chevron.svg";
import positiveComments from "../../../recoil/atoms/positiveComments";
import negativeComments from "../../../recoil/atoms/negativeComments";
import extremeComments from "../../../recoil/atoms/extremeComments";
import neutralComments from "../../../recoil/atoms/neutralComments";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { BASE_API_LINK } from "../../../utils/BaseAPILink";
import startDateValue from "../../../recoil/atoms/StartDateAtom";
import startMonthValue from "../../../recoil/atoms/StartMonthAtom";
import endDateValue from "../../../recoil/atoms/EndDateAtom";
import endMonthValue from "../../../recoil/atoms/EndMonth";
import newRegionGlobalValue from "../../../recoil/atoms/newRegionGlobalValue";
import ClinicValue from "../../../recoil/atoms/ClinicValue";
import clientValue from "../../../recoil/atoms/clientValue";
import providerComponentAPIData from "../../../recoil/atoms/providerComponentAPIData";
import selectedProviderAtom from "../../../recoil/atoms/selectedProviderAtom";
import startDateValueProvider from "../../../recoil/atoms/StartDateAtomProvider";
import startMonthValueProvider from "../../../recoil/atoms/StartMonthAtomProvider";
import endDateValueProvider from "../../../recoil/atoms/EndDateAtomProvider";
import endMonthValueProvider from "../../../recoil/atoms/EndMonthProvider";
import providerSentimentCountAtom from "../../../recoil/atoms/providerSentimentCountAtom";

const ProviderComments2 = () => {
  const [inputData, setInputData] = useState("");
  const [expandComment, setExpandComment] = useState("");
  const [clickCount, setClickCount] = useState(false);
  const [searchStatus, setSearchStatus] = useState(false);
  const [totalViewedComments, setTotalViewedComments] = useState(49);
  const [totalNoComments, setTotalNoComments] = useRecoilState(totalComments);
  const [ascSort, setAscSort] = useState(false);
  const [showSentiments, setShowSentiments] = useState(false);
  const [selectedSentiments, setSelectedSentiments] = useState([]);
  const [nssApiData, setNssApiData] = useRecoilState(nssAPIdata);
  const [apiData, setApiData] = useState();
  const [totalFilteredComments, setTotalFilteredComments] = useState();

  const [positiveCommentAtom, setPositiveCommentAtom] =
    useRecoilState(positiveComments);
  const [negativeCommentAtom, setNegativeCommentAtom] =
    useRecoilState(negativeComments);
  const [extremeCommentAtom, setExtremeCommentAtom] =
    useRecoilState(extremeComments);
  const [neutralCommentAtom, setNeutralCommentAtom] =
    useRecoilState(neutralComments);

  const [usernameLocal, setUsernameLocal] = useState();

  const [finalStartDate, setFinalStartDate] = useRecoilState(
    startDateValueProvider
  );
  const [finalStartMonth, setFinalStartMonth] = useRecoilState(
    startMonthValueProvider
  );
  const [finalEndDate, setFinalEndDate] = useRecoilState(endDateValueProvider);
  const [finalEndMonth, setFinalEndMonth] = useRecoilState(
    endMonthValueProvider
  );
  const [selectedClinicValue, setSelectedClinicValue] =
    useRecoilState(ClinicValue);
  const [newRegionGlobal, setNewRegionGlobal] =
    useRecoilState(newRegionGlobalValue);
  const [selectedClientValue, setSelectedClientValue] =
    useRecoilState(clientValue);

  const [providerComponentApi, setProviderComponentApi] = useRecoilState(
    providerComponentAPIData
  );

  const [selectedProvider, setSelectedProvider] =
    useRecoilState(selectedProviderAtom);

  useEffect(() => {
    setUsernameLocal(sessionStorage?.getItem("username"));
  }, [sessionStorage?.getItem("username")]);

  function handleLoadMore() {
    setTotalViewedComments(totalViewedComments + 50);
  }

  const handleInput = (e) => {
    setInputData(e.target.value);

    setTotalFilteredComments(
      apiData?.filter((filtered_value) => {
        return filtered_value?.review
          ?.toLowerCase()
          ?.includes(e.target.value?.toLowerCase());
      }).length
    );
  };

  // SENTIMENT COUNT
  const [providerSentiment, setProviderSentiment] = useRecoilState(
    providerSentimentCountAtom
  );
  //   truncating description if it contains more then desired no. of characters
  function truncate(string, n) {
    return (
      <span>
        {string?.length > n && (
          <span>
            {string.substr(0, n - 1)}{" "}
            <span className="text-[10px] text-gray-500 cursor-pointer">
              {" "}
              ... Read more
            </span>
          </span>
        )}
        {string?.length <= n && <span>{string}</span>}
      </span>
    );
  }

  const [apiDataCopy, setApiDataCopy] = useState();

  const [allCommentsAPIData, setAllCommentsAPIData] =
    useRecoilState(totalCommentsApiData);

  const sentimentList = ["Positive", "Negative", "Neutral", "Extreme"];

  const closeToggle = () => {
    setShowSentiments(false);
  };

  const ref = useDetectClickOutside({ onTriggered: closeToggle });

  useEffect(() => {
    if (ascSort === true) {
      setApiData(apiData?.map((data) => data)?.reverse());
    }
    if (ascSort === false) {
      setApiData(apiData?.map((data) => data)?.reverse());
    }
  }, [ascSort]);

  useEffect(() => {
    setApiData(providerComponentApi?.provider_comments);
  }, [providerComponentApi]);

  // function to remove selected text from array
  function arrayRemove(arr, value) {
    return arr.filter(function (geek) {
      return geek != value;
    });
  }

  useEffect(() => {
    setTotalFilteredComments(apiData?.length);
  }, [apiData]);

  // const [setimentCount, setSentimentCount] = useState({});
  useEffect(() => {
    const count = {};
    for (let i = 0; i <= apiData?.length; i++) {
      const element = apiData[i]?.label;

      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
    console.log("Sentiment Counts:", count);
    setProviderSentiment(count);

    // let positive = count.Positive;
    // let negative = count.Negative;
    // let neutral = count.Neutral;
    // let extrmes = count.Extremes;
  }, [apiData]);

  return (
    <div className="w-[100%]   border  p-2  rounded-lg bg-white">
      {!apiData && (
        <div className="h-full w-full bg-[#ffffff] z-[200] rounded-lg flex justify-center items-center">
          <PuffLoader color="#00ac69" size={50} width={100} />
        </div>
      )}

      {apiData && (
        <div>
          <div className=" pt-2  flex justify-between items-end mb-2">
            <h1 className=" text-left font-bold  flex-1 px-2 opacity-80 text-[#000C08]  text-lg">
              Comments
              <span
                className={` ${
                  inputData ? " " : " hidden"
                } ml-1 sm:ml-5 text-[#0b271c]  rounded-md bg-green-100 border text-xs sm:text-sm p-1 sm:px-2`}
              >
                {totalFilteredComments}
              </span>
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
                  "providerCommentDownload?" +
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
                  "&provider=" +
                  selectedProvider
                }
              >
                <FileDownloadOutlinedIcon
                  fontSize="small"
                  className="cursor-pointer text-gray-400"
                />
              </a>
            </div>
          </div>
          <div className=" h-[500px]  ">
            {apiData?.length === 0 ? (
              <div className="h-full w-full flex justify-center items-center text-gray-400">
                No Comments
              </div>
            ) : (
              <div className="h-[500px] overflow-y-scroll ">
                <div className="text-[12px] p-3 pb-0 w-full  ">
                  <div className=" sticky bg-white top-0 z-[5] ">
                    <div className=" grid grid-cols-[60px_minmax(150px,700px)_minmax(150px,1fr)] gap-1   min-w-[600px]  text-[12px] text-gray-500 uppercase font-normal bg-white border-b-2 ">
                      <div className=" text-gray-400   capitalize  font-normal">
                        Date
                      </div>
                      <div className=" text-gray-400   capitalize  font-normal">
                        Comments
                      </div>
                      <div className=" text-gray-400   capitalize font-normal">
                        Topic
                      </div>
                    </div>
                  </div>

                  <div>
                    {apiData
                      ?.filter((filtered_value) => {
                        if (inputData === "") {
                          return filtered_value;
                        } else if (
                          filtered_value?.review
                            ?.toLowerCase()
                            ?.includes(inputData.toLowerCase())
                        ) {
                          return {
                            filtered_value,
                          };
                        }
                      })
                      .map((data, index) => {
                        return (
                          <div key={data?.id} className="w-full ">
                            {index <= totalViewedComments && (
                              <div className=" grid  grid-cols-[60px_minmax(150px,700px)_minmax(150px,1fr)] gap-1 items-center  border-b py-2 min-h-[60px] min-w-[600px]">
                                <div className="  text-gray-400  capitalize  font-normal text-[12px]  ">
                                  {data?.timestamp}
                                </div>
                                <div className=" text-gray-400   text-left font-normal  ">
                                  {/* {data?.review} */}
                                  <div
                                    className="w-full text-[#000c08b3] text-[12px] font-semibold"
                                    onClick={() => {
                                      setExpandComment(data?.id);
                                      setClickCount(!clickCount);
                                    }}
                                  >
                                    {expandComment == data?.id && clickCount
                                      ? data?.review
                                      : truncate(data?.review, 100)}
                                  </div>
                                </div>

                                <div className=" text-gray-400    font-normal ">
                                  {data?.topic}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>

                {totalFilteredComments > totalViewedComments && (
                  <div className=" flex  justify-center items-center p-2">
                    <div
                      className="flex flex-col justify-center items-center cursor-pointer "
                      onClick={handleLoadMore}
                    >
                      <DoubleArrowRoundedIcon className="text-gray-400 rotate-90 " />
                      <div className="text-xs text-gray-500">Load More</div>
                    </div>
                  </div>
                )}

                {totalViewedComments >= totalFilteredComments &&
                  totalFilteredComments >= 1 &&
                  totalFilteredComments < totalViewedComments && (
                    <div className=" flex  justify-center items-center p-2">
                      <div className="text-xs text-gray-500">--End--</div>
                    </div>
                  )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProviderComments2;
