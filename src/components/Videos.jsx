import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
  const videosArr = [
    'https://mazwai.com/videvo_files/video/free/2019-12/small_watermarked/190915_A_04_Drone_17_preview.webm?v=1458313',
    'https://mazwai.com/videvo_files/video/free/2018-01/small_watermarked/171124_H1_006_preview.webm?v=1262197',
    'https://mazwai.com/videvo_files/video/free/2017-08/small_watermarked/170724_15_Setangibeach_preview.webm',
    'https://mazwai.com/videvo_files/video/free/2017-09/small_watermarked/170804_C_Lombok_064_preview.webm?v=1962828',
    'https://mazwai.com/videvo_files/video/free/2019-12/small_watermarked/190915_A_04_Drone_05_preview.webm?v=1962828',
    'https://mazwai.com/videvo_files/video/free/2019-12/small_watermarked/190915_A_04_Drone_18_preview.webm',
    'https://mazwai.com/videvo_files/video/free/2019-12/small_watermarked/190915_A_04_Drone_02_preview.webm?v=1458313',
  ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          autoPlay
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{ width: '100%' }}
        ></video>

        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample Video 1</Heading>
          <Text>
            This is a sample video for testing and demo. this is called
            description.
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        spacing={'8'}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme="purple"
            onClick={() => setVideoSrc(item)}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
