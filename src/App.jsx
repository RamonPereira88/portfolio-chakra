import { Box, Flex, Heading, IconButton, useColorMode, VStack } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%" justify={"space-between"}>
        <Heading 
          ml={8}
          size="md"
          fontWeight={"medium"}
          color={"cyan.500"}
        >
          Ramon Pereira
        </Heading>
        <Box>
          <IconButton size={"lg"} ml={3} color={"cyan.500"} _hover={{ color: "#0077b5"}} icon={<BsLinkedin />} isRound />
          <IconButton size={"lg"} ml={3} color={"cyan.500"} _hover={{ color: "#c13584"}} icon={<RiInstagramFill />} isRound />
          <IconButton size={"lg"} ml={3} color={"cyan.500"} _hover={{ color: "#1877f2"}} icon={<BsFacebook />} isRound />
          <IconButton size={"lg"} ml={3} color={"cyan.500"} _hover={{ color: "#00acee"}} icon={<BsTwitter />} isRound />
          <IconButton size={"lg"} ml={3} color={"cyan.500"} _hover={isDark ? {color: "#fff"} : { color: "#0d1117"}} icon={<BsGithub />} isRound />
          <IconButton size={"lg"} ml={3} color={"cyan.500"} _hover={{ color: "#e62117"}} icon={<BsYoutube />} isRound /> 
          <IconButton size={"lg"} ml={3} mr={5} color={"cyan.500"} icon={isDark ? <IoSunnySharp /> : <IoMoonSharp />} isRound onClick={toggleColorMode} />
        </Box>
      </Flex>
    </VStack>
  );
}

export default App;
