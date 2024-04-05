// Complete the Index page component here
// Use chakra-ui
import { Heading, Input, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">
        My Todo List
      </Heading>
      <Input placeholder="Add a new todo..." />
    </VStack>
  );
};

export default Index;
