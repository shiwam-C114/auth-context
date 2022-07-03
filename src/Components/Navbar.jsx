import React, { useContext } from "react";
import {
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import AuthContext from "../context/AuthContext";
import TokenContext from "../context/TokenContext";
import LoadingContext from "../context/LoadingContext";

const initState = { email: "", password: "" };

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [state, setState] = React.useState(initState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const [token, setToken] = useContext(TokenContext);
  const [loading, toggleLoading] = useContext(LoadingContext);
  function doLogin() {
    toggleLoading(true);
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: state.email, password: state.password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.token === "QpwL5tke4Pnpja7X4") {
          toggleLoading(false);
          toggleAuth(!isAuth);
          setToken(data);
        }
      });
    onClose();
  }

  const [isAuth, toggleAuth] = useContext(AuthContext);
  return (
    <div>
      <Flex
        justifyContent={"center"}
        padding="20px"
        bg={isAuth ? "green.600" : "red.600"}
        borderRadius={"10px"}
        margin=" 5px 10px"
      >
        <Button
          onClick={
            isAuth
              ? () => {
                  toggleAuth(!isAuth);
                  setToken({});
                }
              : onOpen
          }
          colorScheme={isAuth ? "orange" : "teal"}
        >
          {isAuth ? "Logout" : "Login"}
        </Button>
      </Flex>

      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Enter your Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  ref={initialRef}
                  placeholder="Email"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={doLogin} colorScheme="blue" mr={3}>
                Login
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
}

export default Navbar;
