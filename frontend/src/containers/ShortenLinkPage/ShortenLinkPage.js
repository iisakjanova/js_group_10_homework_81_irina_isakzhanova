import React from 'react';
import {Grid, makeStyles, Typography} from "@material-ui/core";
import Form from "../Form/Form";

const useStyles = makeStyles(theme => ({
    root: {
       padding: theme.spacing(2),
    },
    title: {
        textAlign: 'center',
    },
}));

const ShortenLinkPage = () => {
    const classes = useStyles();

    const handleFormSubmit = (data) => {
        console.log(data);
    };

    return (
        <Grid container direction="column" spacing={2} className={classes.root}>
            <Grid item>
                <Typography variant="h2" className={classes.title}>
                    Shorten your link
                </Typography>
            </Grid>
            <Form onSubmit={handleFormSubmit} />
        </Grid>
    );
};

export default ShortenLinkPage;