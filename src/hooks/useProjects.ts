import axios from "axios";
import React, { useEffect, useState } from "react";
import { Graph } from "../components/ProjectCard";

const useProjects = () => {
  const [graphs, setGraphs] = useState<Graph[]>([]);
  const [error, setError] = useState("");
  const [isloading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get<Graph[]>("http://localhost:8080/user/1/graph/all")
      .then((res) => {
        console.log(res.data);
        setGraphs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, []);
  return { graphs, error, isloading };
};

export default useProjects;
