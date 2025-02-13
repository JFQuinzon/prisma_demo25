"use state";
import { useEffect, useState } from "react";
import { DEMO_DATA_QUERY } from "../../gqls/demoData/DemoData";
import { useLazyQuery } from "@apollo/client";

export default function DemoDataController() {
  const [tableData, setTableData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  // const [tableSummary, setTableSummary] = useState<any[]>([]);
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(5);

  const defaultFilters = {
    name: "",
  };

  const [filters, setFilters] = useState(defaultFilters);

  // QUERY
  const [queryFunc, queryResults] = useLazyQuery(DEMO_DATA_QUERY, {
    context: {
      requestTrackerId: "queryFunc[demoData_query]",
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    queryFunc({
      variables: {
        data: {
          skip: skip,
          take: take,
        },
      },
    }).then(async (res) => {
      const { data } = res;
      console.log("data", data);
      if (data || queryResults.data) {
        setTableData(data.DemoDataQuery.items);
        setTotalData(data.DemoDataQuery.totalCount);
      }
    });
  }, [queryFunc, queryResults.data, skip, take]);

  return {
    tableData,
    filters,
    setFilters,
    defaultFilters,
    skip,
    setSkip,
    take,
    setTake,
    totalData,
  };
}
