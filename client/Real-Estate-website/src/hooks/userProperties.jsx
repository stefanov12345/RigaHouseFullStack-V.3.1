import React from "react";
import { getAllProperties } from "../utils/api";
import {useQuery} from "react-query";

const userProperties = () => { 
  const { data, isLoading, isError, refretch } = useQuery(
    "allProperties",
    getAllProperties,
    { refetchOnWindowFocus: false }
  );
  return {
    data,
    isError,
    isLoading,
    refretch,
  };
}; 

export default userProperties;
