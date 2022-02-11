import React from "react";
import { useState } from "react";
import { Grid, Paper, TextField, Button, makeStyles } from "@material-ui/core";
import dateFormat from 'dateformat';

import useMessage from "../../hooks/message-hooks";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left'
    },
}));


const Message = (props) => {
    const classes = useStyles();

    const [message, setMessage] = useState(props.value.message);
    const [author, setAuthor] = useState(props.value.author);
    const [email, setEmail] = useState(props.value.email);

    const { sendUpdate, sendDelete } = useMessage();

    const Update = (item) => {
        return sendUpdate(item, author, email, message);
    }

    const Delete = (item) => {

        return sendDelete(item);
    }

    return (<>
        <Grid item xs={12} className="mt-2">
            <Paper className={classes.paper}>
                <Grid container direction='column' >
                    <div className="card mt-2" >
                        <Grid item >
                            <div className="card-body">
                                <h5 className="card-title">{props.value.author}</h5>
                                <TextField id="email" label="Email" defaultValue={props.value.email} onChange={(event) => { setEmail(event.target.value) }} fullWidth />
                                <TextField id="message" label="Mensagem" multiline maxRows={5} defaultValue={props.value.message} onChange={(event) => { setMessage(event.target.value) }} fullWidth />
                                <p className="card-text"><small className="text-muted">{dateFormat(props.value.created_at, "dddd, mmmm dd, yyyy, h:MM:ss TT")}</small></p>
                            </div>
                            <Button onClick={() => Update(props.value)} className="m-2" variant="contained" color="primary">
                                Alterar
                            </Button>
                            <Button onClick={() => Delete(props.value)} className="m-2" variant="contained" color="primary">
                                Excluir
                            </Button>
                        </Grid>
                    </div>
                </Grid>
            </Paper>
        </Grid >

    </>
    )
}

export default Message;