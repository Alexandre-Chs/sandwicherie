import axios from "axios";
import React, { useEffect, useState } from "react";

const RestaurantCommand = () => {
  const [command, setCommand] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios.get("http://localhost:8000/command").then((res) => {
        const commands = res.data.data;
        let arr = [];
        command.map((element) => {
          arr.push(element);
        });
        setCommand(command.concat(commands));
      });
    }
    fetchData();
  }, []);

  console.log(command);
  return (
    <div>
      {command.map((element) => (
        <div>
          <p>Date de création : {element.createdAt}</p>
          <p>Telephone: {element.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCommand;
