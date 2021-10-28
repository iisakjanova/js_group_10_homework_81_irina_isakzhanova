import React from 'react';
import {Grid, makeStyles, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

import Form from "../Form/Form";
import {addLink} from "../../store/actions/actions";
import ShortLink from "../../components/ShortLink/ShortLink";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(5),
        textAlign: 'center',
    },
    error: {
        color: "red",
    },
}));

const ShortenLinkPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const link = useSelector(state => state.link);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);

    const handleFormSubmit = (data) => {
        dispatch(addLink(data));
    };

    let errorMessage = null;

    if (error) {
        errorMessage = (
            <Typography variant="subtitle1" className={classes.error}>{error}</Typography>
        )
    }

    return (
        <Grid container direction="column" spacing={3} className={classes.root}>
            <Grid item>
                <Typography variant="h2">
                    Shorten your link
                </Typography>
            </Grid>
            <Form onSubmit={handleFormSubmit} />
            <ShortLink url={link.shortUrl} />
            {errorMessage}
        </Grid>
    );
};

export default ShortenLinkPage;