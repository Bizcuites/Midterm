import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "./Components/Table";
import Navbar from "./Components/Navbar";
const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces"
    );

    console.log(response.data);
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);

  console.log("data:", data);

  return (
    <div>
      <Navbar />
      <Table total={data} />
    </div>
  );
};

export default App;
