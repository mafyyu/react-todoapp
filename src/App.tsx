import { Button, Container, HStack, Heading, Input, List, ListItem, Text } from "@yamada-ui/react"
import { useState } from "react"


function App() {
  const [todoname,settodoname]=useState("")
  const [todos,settodos]=useState<string[]>([])
  return (
    <>
      <Container>
        <Heading
        color={"red"}>
          ToDoApp
        </Heading>
        <HStack
        gap={0}>
          <Input
          value={todoname}
          onChange = {(e)=>settodoname(e.target.value)}
          borderTopRightRadius={0}
          borderBottomRightRadius={0}
          type="text"
          placeholder="enter your todo"/>
          <Button
          onClick={()=>{
            console.log(todoname)
            if (todoname==="") return
            settodos([...todos,todoname])
            settodoname("")
          }}
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
          >
            add
          </Button>
        </HStack>
        {
          todos.length === 0 ?
            <Text>No todo.</Text>
            :
            <List>
              {todos.map((todo, i) => (
                <ListItem key={i}>{todo}</ListItem>
              ))}
            </List>
        }
      </Container>
    </>
  )
}

export default App
