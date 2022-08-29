import React, { useEffect, useState } from "react";
import axios from "axios";

const Server = () => {
  const [test, setTest] = useState();
  useEffect(() => {
    axios.get("http://localhost:8000").then((res) => {
      setTest(res.data.msg);
    });
  }, []);

  return <div>{test}</div>;
};

export default Server;
