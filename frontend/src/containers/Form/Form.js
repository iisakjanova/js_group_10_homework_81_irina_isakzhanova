import React, {useState} from 'react';
import {Button, Grid, makeStyles, TextField} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    form: {
        alignItems: "center"
    },
    input: {
        width: "100%",
        marginBottom: theme.spacing(2),
    }
}));

const Form = ({onSubmit}) => {
    const classes = useStyles();

    const [state, setState] = useState({
        originalUrl: '',
    });

    const handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setState(prev => {
            return {...prev, [name]: value};
        });
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        onSubmit({...state});
    };

    return (
        <Grid
            item
            container
            direction="column"
            component="form"
            onSubmit={handleFormSubmit}
            className={classes.form}
        >
            <Grid item className={classes.input}>
                <TextField
                    required
                    fullWidth
                    label="Enter URL here"
                    name="originalUrl"
                    variant="outlined"
                    value={state.originalUrl}
                    onChange={handleInputChange}
                />
            </Grid>
            <Grid item>
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                >
                    Shorten!
                </Button>
            </Grid>
        </Grid>
    );
};

export default Form;