import React from 'react';
import {Grid, Link, Typography} from "@material-ui/core";

import {apiURL} from "../../config";

const ShortLink = ({url}) => {
    return (
        url ?
            <>
                <Grid item>
                    <Typography variant="h6">Your link now looks like this:</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6">
                        <Link target="_blank" href={apiURL + '/links/' + url}>{apiURL + '/' + url}</Link>
                    </Typography>
                </Grid>
            </>
            : null
    );
};

export default ShortLink;