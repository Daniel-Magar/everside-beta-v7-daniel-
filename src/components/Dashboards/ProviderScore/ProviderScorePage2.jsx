import React, { useEffect, useState } from "react";
import ProviderTotalCard from "./ProviderTotalCard";
import ProviderInfo from "./ProviderInfo";
import ProviderNPS from "./ProviderNPS";
import ProviderAllGraph from "./ProviderAllGraph";
import ProviderComments from "./ProviderComments";
import ProviderFilter from "./ProviderFilter";
import ProviderFilter2 from "./ProviderFilter2";
import regionStatusProvider from "../../../recoil/atoms/regionStatusProvider";
import startDateValueProvider from "../../../recoil/atoms/StartDateAtomProvider";
import startMonthValueProvider from "../../../recoil/atoms/StartMonthAtomProvider";
import endDateValueProvider from "../../../recoil/atoms/EndDateAtomProvider";
import endMonthValueProvider from "../../../recoil/atoms/EndMonthProvider";
import { useRecoilState } from "recoil";
import allDataRecievedProvider from "../../../recoil/atoms/allDataRecievedProvider";
import axios from "axios";
import { BASE_API_LINK } from "../../../utils/BaseAPILink";
import regionGlobalProvider from "../../../recoil/atoms/regionGlobalProvider";
import flushRegionProvider from "../../../recoil/atoms/flushRegionProvider";
import callClinicProvider from "../../../recoil/atoms/callClinicProvider";
import clinicProviderAPI from "../../../recoil/atoms/clinicProviderAPI";
import clientAPIdataProvider from "../../../recoil/atoms/clientAPIdataProvider";
import flushClinicProvider from "../../../recoil/atoms/flushClinicProvider";
import flushClientProvider from "../../../recoil/atoms/flushClientProvider";
import FormatColorResetOutlinedIcon from "@mui/icons-material/FormatColorResetOutlined";
import SelectProvider from "./SelectProvider";
import AllFilterDataProvider from "../../../recoil/atoms/AllFilterDataProvider";
import providerComponentAPIData from "../../../recoil/atoms/providerComponentAPIData";
import selectedProviderAtom from "../../../recoil/atoms/selectedProviderAtom";
import providersApiDataProviderPage from "../../../recoil/atoms/providersApiDataProviderPage";
import activeInnerPage from "../../../recoil/atoms/activeInnerPage";
import ProviderInfo2 from "./ProviderInfo2";
import ProviderComments2 from "./ProviderComments2";
import ProviderNPS2 from "./ProviderNPS2";
import ProviderSentiment from "./ProviderSentiment";
import ProviderTop from "./ProviderTop";

const ProviderScorePage2 = () => {
  const [callRegion, setCallRegion] = useRecoilState(regionStatusProvider);
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
  const [allDataRecievedStatus, setAllDataRecievedStatus] = useRecoilState(
    allDataRecievedProvider
  );
  const [allFilterData, setAllFilterData] = useRecoilState(
    AllFilterDataProvider
  );

  const [regionGlobal, setRegionGlobal] = useRecoilState(regionGlobalProvider);
  const [flushRegionValue, setFlushRegionvalue] =
    useRecoilState(flushRegionProvider);
  const [callClinicAtom, setCallClinicAtom] =
    useRecoilState(callClinicProvider);
  const [clinicAPIData, setClinicAPIData] = useRecoilState(clinicProviderAPI);
  const [clientAPIdata, setClientDataProvider] = useRecoilState(
    clientAPIdataProvider
  );
  const [flushClinicStatus, setFlushClinicStatus] =
    useRecoilState(flushClinicProvider);
  const [flushClientStatus, setFlushClientStatus] =
    useRecoilState(flushClientProvider);
  const [providerAPIDATA, setProviderAPIDATA] = useRecoilState(
    providersApiDataProviderPage
  );
  const [providerComponentApi, setProviderComponentApi] = useRecoilState(
    providerComponentAPIData
  );

  const [activePageValue, setActivePageValue] = useRecoilState(activeInnerPage);

  const [selectedProvider, setSelectedProvider] =
    useRecoilState(selectedProviderAtom);

  // local variables
  const [usernameLocal, setUsernameLocal] = useState();

  // getting username from session storage
  useEffect(() => {
    setUsernameLocal(sessionStorage?.getItem("username"));
  }, [sessionStorage?.getItem("username")]);

  // Call Region
  useEffect(async () => {
    if (callRegion === true && usernameLocal) {
      // adding username in form data
      const formdata = new FormData();
      formdata.append("username", usernameLocal);

      const firstAPIdata = await axios.post(
        BASE_API_LINK +
          "filterDateProvider?start_month=" +
          finalStartMonth +
          "&start_year=" +
          finalStartDate +
          "&end_month=" +
          finalEndMonth +
          "&end_year=" +
          finalEndDate,
        formdata,
        {
          headers: {
            authorization: sessionStorage.getItem("token"),
            Accept: "application/json",
          },
        }
      );

      if (firstAPIdata) {
        setAllFilterData(firstAPIdata?.data);
        setProviderAPIDATA(firstAPIdata?.data);
        setSelectedProvider(firstAPIdata?.data?.provider[0]);
        setRegionGlobal(firstAPIdata?.data?.region);
        setClinicAPIData(firstAPIdata?.data?.clinic);
        setClientDataProvider(firstAPIdata?.data?.client);
        setAllDataRecievedStatus(true);
        setFlushRegionvalue(true);
        setFlushClinicStatus(true);
        setFlushClientStatus(true);
        setTimeout(() => {
          setFlushRegionvalue(false);
          setFlushClinicStatus(false);
          setFlushClientStatus(false);
        }, 500);
      }
    }
  }, [callRegion, usernameLocal]);
  return (
    <div className=" min-h-[90vh]">
      <ProviderFilter2 />
      <SelectProvider />
      {providerComponentApi ? (
        <div>
          {providerComponentApi?.Message === "TRUE" ? (
            <div class="flex flex-cols-2 gap-4">
              <div className=" flex-[70%]">
                <div>
                  <ProviderInfo2 />
                </div>

                <div className="my-5">
                  <ProviderComments2 />
                </div>
              </div>
              <div className="">
                <div>
                  <ProviderNPS2 />
                </div>
                <div className="my-2">
                  <ProviderSentiment />
                </div>
                <div className="my-2">
                  <ProviderTop />
                </div>
              </div>
            </div>
          ) : (
            // <div class="grid grid-cols-5 gap-3">
            //   <div class="bg-blue-100 col-span-3">

            //   </div>
            //   <div class="bg-red-100 col-span-2">2nd col</div>
            // </div>
            // <div class="grid grid-cols-2 gap-4">
            //   <div className="border border-red-500">first</div>
            //   <div className="border border-red-500">second</div>
            // </div>
            // <div class="grid grid-cols-2 gap-4">
            //   <div className="border border-red-500">first</div>
            //   <div className="border border-red-500">second</div>
            // </div>
            <div>2</div>
          )}
        </div>
      ) : (
        <div className="min-h-[80vh]  w-full text-3xl text-gray-400 flex justify-center items-center">
          Select a provider to display analytics
        </div>
      )}
    </div>
  );
};

export default ProviderScorePage2;
