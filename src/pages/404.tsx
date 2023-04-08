import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

//import img404 from '../images/error-404.svg';

function NotFound() {

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ maxWidth: 600, width: "100%" }}>
        <Paper sx={{ padding: 2 }}>
          <h1 style={{ textAlign: "center" }}>Page not found 😅 </h1>
          <Grid container justifyContent="center" alignItems="center" xs={12} sm={12} md={12}>
            {/* <img style={{ maxWidth: 400, width: "100%" }} loading="lazy" src={img404} alt="404" /> */}
          </Grid>
          <p style={{ textAlign: "center" }}>we could not find this page</p>
          <Grid container justifyContent="center" alignItems="center" xs={12} sm={12} md={12}>
            <Button variant="outlined">Back Home</Button>
          </Grid>
        </Paper>
      </Box>
    </Box>
  )

}

export default NotFound;