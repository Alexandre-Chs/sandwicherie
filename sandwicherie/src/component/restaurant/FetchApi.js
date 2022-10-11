import React from "react";
import axios from "axios";

const { isLoading, isFetching, error, data, status } = useQuery();

async function fetchPosts() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
}

export default fetchPosts;
