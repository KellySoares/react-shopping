import React, { useState, useEffect } from "react";
import { Grid, TextField, Paper, Button, makeStyles } from "@material-ui/core";
import useMessage from "../hooks/message-hooks";
import Message from '../components/message';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left'
    },
    h2: {
        fontSize: '20px',
        fontWeight: 'bold'
    },
}));

const Contatos = () => {

    const classes = useStyles();

    const { messageState, sendMessage } = useMessage();


    const [author, setAuthor] = useState('');
    const [newMessage, setNewMessage] = useState('');
    const [email, setEmail] = useState('');

    const submitMessage = () => {
        return sendMessage(author, email, newMessage);

    }

    useEffect(() => {
        async function API() {
            setAuthor('');
            setNewMessage('');
            setEmail('');
        }
        API()

    }, [messageState.render]);

    return (<>
        <Grid item xs={12} className="mt-2">
            <Paper className={classes.paper}>
                <h2 className={classes.h2}>
                    Entre em contato!!
                </h2>
                <Grid container direction="row" xs={12} item={true}>
                    <TextField id="name" label="Name" value={author} onChange={(event) => { setAuthor(event.target.value) }} fullWidth />
                    <TextField id="email" label="Email" value={email} onChange={(event) => { setEmail(event.target.value) }} fullWidth />
                    <TextField id="message" label="Message" value={newMessage} onChange={(event) => { setNewMessage(event.target.value) }} fullWidth />
                </Grid>
                {messageState.error &&
                    <div className="alert alert-danger" role="alert">
                        <strong>{messageState.alert}</strong>
                    </div>}
                {messageState.sucess &&
                    <div className="alert alert-success" role="alert">
                        <strong>{messageState.alert}</strong>
                    </div>}
                <Button type="submit" onClick={submitMessage} className="mt-2" variant="contained" color="primary">
                    Enviar
                </Button>


                {messageState.messageNull ?
                    <div className="alert alert-info" role="alert">
                        <strong>{messageState.messages}</strong>
                    </div>
                    : <>{messageState.messages.map(item => {
                        return (<Message value={item} key={item.id} />)
                    })}

                    </>
                }
            </Paper>
        </Grid >

    </>
    )
}

export default Contatos;