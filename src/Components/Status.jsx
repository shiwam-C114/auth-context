import React, { useContext } from "react";
import { useToast } from "@chakra-ui/react";
import AuthContext from "../context/AuthContext";
import TokenContext from "../context/TokenContext";

function Status() {
  const toast = useToast();
  const [isAuth, toggleAuth] = useContext(AuthContext);
  const [token, setToken] = useContext(TokenContext);

  return (
    <>
      {token.token
        ? isAuth
          ? !toast.isActive("in")
            ? toast({
                title: "Logged in.",
                description: `You have been logged in successfully, your token is ${token.token}`,
                status: "success",
                duration: 2000,
                isClosable: true,
                id: "in",
              })
            : ""
          : !toast.isActive("out")
          ? toast({
              title: "Logged out.",
              description: "You have been logged out successfully.",
              status: "error",
              duration: 2000,
              isClosable: true,
              id: "out",
            })
          : ""
        : ""}
    </>
  );
}

export default Status;
