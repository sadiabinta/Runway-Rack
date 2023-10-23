import React from 'react';
import Button from '@mui/joy/Button';
import { Box, Card, CardContent, CardCover, Chip, Container, Grid, Typography } from '@mui/joy';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import crew from '../../../assets/crew.jpg'
import { createTheme } from '@mui/material/styles';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LanguageIcon from '@mui/icons-material/Language';

const DestinationBanner = () => {


    const theme = createTheme({
        palette: {
            gold: {
                light: '#CD7E0F', // Replace with your light gold color value
            },
        },
    });




    return (
       

        <Box
            component="div"
            sx={{
                position: 'relative',
                width: '100%',
                minHeight: '590px',
                backgroundImage: `url(${crew})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(to right, rgba(78, 16, 48,1), rgba(88, 33, 53, 0.2))`,

                }}
            >
                <Box mt={10} ml={20 } color="white">
                    <Box px="5px" mb="7px" py="10px" width="15%">

                        <Typography variant="h1" sx={{ color: 'white', textAlign: "center", fontWeight: "700", fontSize: "24px", borderRadius: "10px", backgroundColor: theme.palette.gold.light }}>OFFER DEALS</Typography>

                    </Box>
                    <Box>
                        <Typography variant="h1" sx={{ color: 'white', fontWeight: "700", fontSize: "44px", borderRadius: "10px",  }}>Your Great Destination</Typography>
                    </Box>
                    <Box width="55%">
                        <Typography variant="h1" sx={{ color: 'white', fontWeight: "700", fontSize: "24px", borderRadius: "10px", }}>Get rewarded for your travels - unlock instant savings of 10% or more with a free <span style={{ color: theme.palette.gold.light }}>RunwayRacks.com</span> account</Typography>
                    </Box>
                    <Box my="20px" >
                        <Grid container spacing={6} my="10" width="70%">
                            <Grid width="100%" color="red" item my="20px" display="flex" justifyContent="space-between" borderRadius="10px" p="20px" bgcolor="white" border="1px solid black" md={6}>
                                <div ml="6px">
                                    <Typography variant="h1" sx={{color:"black" ,fontWeight: "700", fontSize: "44px", borderRadius: "10px",  }} >5378+</Typography>
                                    <Typography variant="h6" sx={{ color: "black", fontWeight: "500", fontSize: "24px", borderRadius: "10px", }}>Happy Customers</Typography>

                                </div>
                                <div >
                                    <PeopleAltIcon style={{ fontSize: '120px', color: '#4F1030' }} />
                                </div>
                            </Grid>
                            <Grid width="100%" color="red" item my="20px" display="flex" justifyContent="space-between" borderRadius="10px" p="20px" bgcolor="white" border="1px solid black" md={6}>
                                <div ml="6px">
                                    <Typography variant="h1" sx={{ color: "black", fontWeight: "700", fontSize: "44px", borderRadius: "10px", }} >100%</Typography>
                                    <Typography variant="h6" sx={{ color: "black", fontWeight: "500", fontSize: "24px", borderRadius: "10px", }}>Client statisfied</Typography>

                                </div>
                                <div >
                                    <LanguageIcon style={{ fontSize: '120px', color: '#4F1030' }} />
                                </div>
                            </Grid>

                        </Grid>
                    </Box>
                    <Box width="65%">
                        <Typography variant="h1" sx={{ color: 'white', fontWeight: "700", fontSize: "24px", borderRadius: "10px", }}>Discover the latest offers & news and start planning <a href="#" style={{ color: 'white',padding:"8px" ,textAlign: "center", fontWeight: "700", fontSize: "24px", borderRadius: "10px", backgroundColor: theme.palette.gold.light }}>CONTACT US </a> </Typography>
                    </Box>
                </Box>
            </Box>

            
        </Box>
    );
};

export default DestinationBanner;