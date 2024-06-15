import React from 'react';
import {
  Box,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
  VStack,
  HStack,
  useColorModeValue,
  Flex
} from "@chakra-ui/react";

const CustomSkeleton = () => {
  const skeletonBg = useColorModeValue("gray.200", "gray.700");

  return (
    <Flex minHeight='100vh' width='100%' justify='center' alignItems='center' bg={skeletonBg}>
      <Box
        padding={6}
        boxShadow="lg"
        bg="white"
        borderRadius="md"
        width='100%'
        height='100vh'
        animation="scale-up-center 0.5s ease-in-out"
      >
       
        <VStack pt='100px' spacing={4} align="stretch">
          <Skeleton height="40px" width="80%" borderRadius="md" />
          <Skeleton height="20px" width="60%" borderRadius="md" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="20px" />
          <HStack width="100%" justifyContent="space-between">
            <Skeleton height="40px" width="30%" borderRadius="md" />
            <Skeleton height="40px" width="30%" borderRadius="md" />
            <Skeleton height="40px" width="30%" borderRadius="md" />
          </HStack>
        </VStack>
        <VStack pt='100px' spacing={4} align="stretch">
          <Skeleton height="40px" width="80%" borderRadius="md" />
          <Skeleton height="20px" width="60%" borderRadius="md" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="20px" />
          <HStack width="100%" justifyContent="space-between">
            <Skeleton height="40px" width="30%" borderRadius="md" />
            <Skeleton height="40px" width="30%" borderRadius="md" />
            <Skeleton height="40px" width="30%" borderRadius="md" />
          </HStack>
        </VStack>
      </Box>
    </Flex>
  );
};

export default CustomSkeleton;
