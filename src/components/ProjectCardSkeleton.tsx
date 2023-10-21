import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card
      width="200px"
      height="250px"
      borderRadius={14}
      overflow="hidden"
      marginBottom={10}
    >
      <Skeleton height={"200px"}></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
