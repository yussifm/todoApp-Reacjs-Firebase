import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import IconButton from "@material-ui/core/IconButton";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import FDb from "../config/firebase";

const ListCom = ({ Item }) => {
	return (
		<>
			<List className="todo">
				<ListItem>
					<ListItemText primary={Item.todo} secondary="⏰ Deadline" />
				</ListItem>
				<ListItemSecondaryAction>
					<DeleteRoundedIcon
						onClick={(e) => FDb.collection("todos").doc(Item.id).delete()}
					/>
				</ListItemSecondaryAction>
			</List>
		</>
	);
};

export default ListCom;
