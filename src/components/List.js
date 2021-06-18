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
const ListCom = ({ Item }) => {

    
	return (
		<>
			<List>
				<ListItem >
					<ListItemText primary={Item} secondary="⏰ Deadline" />
				</ListItem>
			</List>
		</>
	);
};

export default ListCom;
