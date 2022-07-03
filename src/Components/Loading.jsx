import React, { useContext } from "react";
import { Spinner } from "@chakra-ui/react";
import LoadingContext from "../context/LoadingContext";

function Loading() {
    const [loading, toggleLoading] = useContext(LoadingContext)
  return (
    <div style={{ textAlign: "center", margin: "20vh 0" }}>
        {
            loading?
            <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            />:""
        }
    </div>
  );
}

export default Loading;
