"use client";
import { CloseIcon } from "@chakra-ui/icons";
import {
	Button,
	Checkbox,
	Flex,
	Heading,
	IconButton,
	Input,
	List,
	ListItem,
	Stack,
	UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Todo() {
	const [todos, setTodos] = useState([
		{
			todo: "Learn NextJs 13",
			completed: true,
		},
		{
			todo: "Learn ChakraUi",
			completed: false,
		},
		{ todo: "Friends Party", completed: false },
		{
			todo: "Learn Solidity",
			completed: false,
		},
		{ todo: "Solve a Rubik's cube", completed: true },
	]);
	const [todo, setTodo] = useState("");
	const AddTodo = () => {
		const newTodo = { todo: todo, completed: false };
		const newTodos = [...todos, newTodo];
		setTodos(newTodos);
		setTodo("");
	};
	const DelTodo = (e: any) => {
		const newtodo = todos.filter((t) => {
			return !(t.todo === e.todo);
		});
		setTodos(newtodo);
	};
	const handler = (x: any) => {
		let newTodo = todos.map((t) => {
			if (t.todo === x.todo) {
				t.completed = !t.completed;
			}
			return t;
		});
		setTodos(newTodo);
	};
	return (
		<>
			<Flex
				alignItems='center'
				justifyContent='center'
				height='100vh'
				bgColor={"#32B99D"}>
				<Flex
					alignItems={"center"}
					direction={"column"}
					bgColor={"white"}
					p={10}
					rounded={4}>
					<Heading m={5}>Todo App</Heading>
					<Stack direction={"row"}>
						<Input
							type={"text"}
							value={todo}
							onChange={(e) => {
								setTodo(e.target.value);
							}}
						/>
						<Button size={"md"} onClick={AddTodo}>
							Add
						</Button>
					</Stack>
					<Stack direction={"column"} mt={7}>
						{todos.map((t) => {
							return (
								<>
									<Stack direction={"row"}>
										<li key={t.todo}>
											<Checkbox
												isChecked={t.completed}
												onChange={() => {
													handler(t);
												}}>
												{t.todo}
												{""}
												<IconButton
													aria-label='Delete'
													icon={<CloseIcon />}
													size={"xs"}
													ml={4}
													onClick={() => DelTodo(t)}
												/>
											</Checkbox>
										</li>
									</Stack>
								</>
							);
						})}
					</Stack>
				</Flex>
			</Flex>
		</>
	);
}
