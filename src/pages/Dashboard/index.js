import React, { useEffect, useState,useContext } from "react";
import Main from "../../stories/containers/Main/Main";
import { getCategoryData } from "../../services/apis/menu";
import { AppContext } from "../../context/app";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const { appState } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategoryData();
      setData(data);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <Main AppName={appState.appName?appState.appName:"AppName"} Categorydata={data} />
    </>
  );
};

export default Dashboard;
