import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

const Item = (props) => {
    return (
        <ListItem>
            <ListItemText
                primary={props.name}
                secondary={props.details}
            />
        </ListItem>
    )
}

export default Item;