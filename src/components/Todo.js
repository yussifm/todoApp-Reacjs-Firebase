import React, { useState, useEffect } from "react";
import ListCom from "./List";
import { ItemsList } from "../Data/data";
import { Button, Input, FormControl, InputLabel } from "@material-ui/core";
import { TextFields } from "@material-ui/icons";
import FDb from "../config/firebase";
import firebase from "firebase";

const Todo = () => {
	const [TodoItem, setTodo] = useState([]);
	const [Task, setTask] = useState("");

	useEffect(() => {
		FDb.collection("todos")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				console.log(snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo })));
				setTodo(snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
				)})
	}, []);

	const HandleSubmit = (e) => {
		e.preventDefault();
		if (Task) {
			// setTask(Task);
			// const newTask = {id:new Date().getTime().toString,task:Task, isCompleted:false};
			FDb.collection("todos").add({
				todo: Task,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			});

			// setTodo((todo) => {
			// 	return [Task, ...todo];
			// });
			setTask("");
		} else {
			alert("empty input");
		}
	};

	return (
		<>
			<div className="header">
				<h2>ToDo</h2>
			</div>
			<div className="todo__input">
				<form onSubmit={HandleSubmit}>
					<FormControl>
						<InputLabel>📝 Add a todo</InputLabel>
						<Input
							type="text"
							name="Task"
							id="Task"
							value={Task}
							onChange={(e) => setTask(e.target.value)}
						/>
						<Button
							disabled={!Task}
							color="primary"
							variant="outlined"
							type="submit"
							className="btn btn-add"
							// onClick={HandleSubmit}
						>
							Add +
						</Button>
					</FormControl>
				</form>
			</div>
			<div className="item__list">
				{TodoItem.map((item) => {
					return <ListCom Item={item} key={item.id}/>;
				})}
			</div>
		</>
	);
};

export default Todo;
