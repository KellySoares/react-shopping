import React from "react";

import Item from "../components/item";
import Card from "../components/card";

import { Grid, Paper, Typography, List, makeStyles } from "@material-ui/core";

import useProducts from "../hooks/products-hooks";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '5px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
}));

const HomePage = () => {

    const { prodState } = useProducts();

    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.root} >
            <Grid item={true} xs={3} >
                <Paper className={classes.paper}>
                    <Typography variant='h5'>
                        Categorias
                    </Typography>
                    <List>{prodState.category.map(category => {
                        return (
                            <Item key={category.id} name={category.name} details={category.details} />
                        )
                    }
                    )}
                    </List>
                </Paper>
            </Grid>
            <Grid container xs={9} spacing={3} className={classes.root} item={true}>
                {prodState.products.map(item => {
                    return (
                        <Card key={item.id_product} product={item}>
                            {item.name_product}
                        </Card>
                    )
                })}



            </Grid>
        </Grid>
    )
}
/*
const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps)(HomePage);*/
export default HomePage;