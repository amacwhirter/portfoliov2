import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Home() {
    return (
        <Grid container justifyContent={'center'}>
            <Grid item>
                <Typography color={'primary'} variant={'body2'}
                            style={{
                                fontWeight: 'bold',
                                fontFamily:
                                    'Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace'
                            }}>Hi, my name is</Typography>
            </Grid>
        </Grid>
    );
}
