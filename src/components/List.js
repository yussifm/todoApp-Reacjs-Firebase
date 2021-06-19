import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { Button, Input, FormControl, InputLabel } from "@material-ui/core";

import {
	EditRounded,
	DeleteRounded,
	CheckCircleRounded,
} from "@material-ui/icons";
import React, { useState, useEffect } from "react";

import FDb from "../config/firebase";

const ListCom = ({ Item }) => {
	const [EditInput, setEditInput] = useState("");
	const [open, setopen] = useState(false);

	const HandleEdit = (e) => {
		e.preventDefault();
		FDb.collection("todos").doc(Item.id).update({
			todo: EditInput,
		});
		setopen(false);
		setEditInput("");
	};

	return (
		<>
			<List className="todo">
				<ListItem>
					<ListItemText primary={Item.todo} secondary="⏰ Deadline" />
				</ListItem>
				<ListItemSecondaryAction>
					<DeleteRounded
						style={{ color: "red" }}
						onClick={(e) => FDb.collection("todos").doc(Item.id).delete()}
					/>
					<EditRounded
						style={{ color: "lightgreen" }}
						onClick={() => setopen(!open)}
					/>
				</ListItemSecondaryAction>
				{open && (
					<form>
						<FormControl>
							<InputLabel>📝 Edit a todo</InputLabel>
							<Input
								type="text"
								name="Task"
								id="Task"
								value={EditInput}
								onChange={(e) => setEditInput(e.target.value)}
							/>
							<Button
								color="primary"
								variant="outlined"
								type="submit"
								className="btn btn-add"
								onClick={HandleEdit}
							>
								Edit
							</Button>
						</FormControl>
					</form>
				)}
			</List>
		</>
	);
};

export default ListCom;
