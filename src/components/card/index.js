import React from "react";
import { Grid, Paper, Typography, Button, makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/cart';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
}));


const Card = (props) => {
    const cart = useSelector(state => state.cart.value);
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Grid item xs={3} >
            <Paper className={classes.paper}>
                <Grid container direction='column' >
                    <Grid item >
                        <img width="140px" src={props.product.image} alt={props.product.name_product} />
                        <Typography variant='h6'>
                            {props.children}
                        </Typography>
                        <Typography variant='subtitle1'>
                            R$ {props.product.price.toFixed(2)}
                        </Typography>
                    </Grid>

                    <Button
                        variant="contained"
                        onClick={() => dispatch(cartActions.Add(cart, props.product))}>
                        Adicionar
                    </Button>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Card;