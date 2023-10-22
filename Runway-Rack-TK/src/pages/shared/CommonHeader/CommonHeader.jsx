import { Typography } from '@mui/joy';
import React from 'react';

const CommonHeader = ({ smallCaption, largeCaption, textAlign }) => {
    return (
        <div style={{ textAlign: textAlign , padding:"30px 0 30px 0"}}>
            <Typography variant='danger' level='h5' sx={{color:"gold" ,my:"0px", letterSpacing:"2px"}} >
                {smallCaption}
            </Typography>
            <Typography variant='h1' level="h1" sx={{ color: "#21283F",py:"0px", fontWeight:"700" }} >
                {largeCaption}
            </Typography>

            
            
        </div>
    );
};

export default CommonHeader;