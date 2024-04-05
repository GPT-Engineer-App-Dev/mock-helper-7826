// Complete the Index page component here
// Use chakra-ui
import { useState } from "react";
import { Button, Heading, Input, List, ListItem, HStack, VStack } from "@chakra-ui/react";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">
        My Todo List
      </Heading>
      <HStack>
        <Input placeholder="Add a new todo..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <Button onClick={addTodo} colorScheme="blue">
          Add Todo
        </Button>
      </HStack>
      <List spacing={3}>
        {todos.map((todo, index) => (
          <ListItem key={index}>{todo}</ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Index;
