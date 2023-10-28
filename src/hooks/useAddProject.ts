import axios from "axios";
import React, { useEffect, useState } from "react";
import { GraphToDB } from "../components/asideBar";

const useAddProject = (graph: GraphToDB, id: number) => {
  const [error, setError] = useState("");
  const [isloading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .post<GraphToDB>(`http://localhost:8080/user/${id}/graph/add`)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, [graph, id]);
  return { error, isloading };
};

export default useAddProject;
