import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/ChatBox";
import MyChats from "../components/Mychats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import { Grid } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";


const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Flex justifyContent="space-between" p={4} flexDir={{ base: "column", md: "row" }} h="90%">
  {user && <MyChats fetchAgain={fetchAgain} />}
  <Spacer /> 
  {user && <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
</Flex>
    </div>
  );
};

export default Chatpage;