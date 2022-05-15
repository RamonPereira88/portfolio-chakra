import { Box, Flex, Heading, IconButton, useColorMode, useColorModeValue, VStack } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';
import { BsGithub, BsLinkedin, BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { IoSunnySharp, IoMoonSharp } from 'react-icons/io5';

function App() {
  const { toggleColorMode, colorMode } = useColorMode();
  const bg = useColorModeValue('#eeeeee', '#020202');
  const color = useColorModeValue('#0095ff', 'cyan.500');
  const isDark = colorMode === 'dark';

  return (
    <Box bg={bg} color={color} h='100vh'>
      <VStack p={5}>
        <Flex w='100%' justify={'space-between'}>
          <Heading ml={8} size='md' fontWeight={'medium'} alignSelf='center'>
            Hugo Ramon Pereira
          </Heading>
          <Box>
            <Tooltip
              hasArrow
              label='LinkedIn'
              bg={!isDark ? '#0077b5' : 'cyan.500'}
              color={!isDark ? '#eeeeee' : '#020202'}
              aria-label='LinkedIn tooltip'
            >
              <IconButton
                size={'lg'}
                ml={3}
                color={'turquoise.500'}
                _hover={!isDark && { color: '#0077b5' }}
                icon={<BsLinkedin size={18} />}
                isRound
                variant='ghost'
              />
            </Tooltip>
            <Tooltip
              hasArrow
              label='Instagram'
              bg={!isDark ? '#c13584' : 'cyan.500'}
              color={!isDark ? '#eeeeee' : '#020202'}
              aria-label='LinkedIn tooltip'
            >
              <IconButton
                size={'lg'}
                ml={3}
                color={'turquoise.500'}
                _hover={!isDark && { color: '#c13584' }}
                icon={<RiInstagramFill size={22} />}
                isRound
                variant='ghost'
              />
            </Tooltip>
            <Tooltip
              hasArrow
              label='Facebook'
              bg={!isDark ? '#1877f2' : 'cyan.500'}
              color={!isDark ? '#eeeeee' : '#020202'}
              aria-label='LinkedIn tooltip'
            >
              <IconButton
                size={'lg'}
                ml={3}
                color={'turquoise.500'}
                _hover={!isDark && { color: '#1877f2' }}
                icon={<BsFacebook size={19} />}
                isRound
                variant='ghost'
              />
            </Tooltip>
            <Tooltip
              hasArrow
              label='Twitter'
              bg={!isDark ? '#00acee' : 'cyan.500'}
              color={!isDark ? '#eeeeee' : '#020202'}
              aria-label='LinkedIn tooltip'
            >
              <IconButton
                size={'lg'}
                ml={3}
                color={'turquoise.500'}
                _hover={!isDark && { color: '#00acee' }}
                icon={<BsTwitter size={20} />}
                isRound
                variant='ghost'
              />
            </Tooltip>
            <Tooltip
              hasArrow
              label='Github'
              bg={!isDark ? '#24292d' : 'cyan.500'}
              color={!isDark ? '#eeeeee' : '#020202'}
              aria-label='LinkedIn tooltip'
            >
              <IconButton
                size={'lg'}
                ml={3}
                color={'turquoise.500'}
                _hover={!isDark && { color: '#24292d' }}
                icon={<BsGithub size={21} />}
                isRound
                variant='ghost'
              />
            </Tooltip>
            <Tooltip
              hasArrow
              label='YouTube'
              bg={!isDark ? '#e62117' : 'cyan.500'}
              color={!isDark ? '#eeeeee' : '#020202'}
              aria-label='LinkedIn tooltip'
            >
              <IconButton
                size={'lg'}
                ml={3}
                color={'turquoise.500'}
                _hover={!isDark && { color: '#e62117' }}
                icon={<BsYoutube size={22} />}
                isRound
                variant='ghost'
              />
            </Tooltip>
            <Tooltip hasArrow label={isDark ? 'Light mode' : 'Dark mode'} aria-label='LinkedIn tooltip'>
              <IconButton
                size={'lg'}
                ml={3}
                mr={5}
                color={'turquoise.500'}
                icon={isDark ? <IoSunnySharp size={22} /> : <IoMoonSharp size={22} />}
                isRound
                onClick={toggleColorMode}
              />
            </Tooltip>
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
}

export default App;
