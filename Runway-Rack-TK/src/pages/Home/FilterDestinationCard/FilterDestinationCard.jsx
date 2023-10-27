import React from 'react';
import CommonHeader from '../../shared/CommonHeader/CommonHeader';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './FilterDestinationCard.css';
import Flights from '../../shared/Flights/Flights';
import CarsRentals from '../../shared/CarRentals/CarsRentals';
import Taxes from '../../shared/Taxes/Taxes';


const FilterDestinationCard = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <div>
            <CommonHeader smallCaption="FLYNEXT PACKAGE" largeCaption="Your Great Destination" textAlign="center"></CommonHeader>


            <div style={{ textAlign: "center" }} >
                <Box sx={{ width: '100% ' }}>
                    <TabContext value={value}>
                        <Box sx={{
                            textAlign: "center", display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <TabList sx={{
                                width: "100%",
                                mx: 'auto',
                                display: 'flex',
                                justifyContent: 'center', // Center-align the tab labels

                                textAlign: 'center',
                                alignItems: 'center'

                            }}
                                onChange={handleChange}
                                aria-label="lab API tabs example"
                            >
                                <Tab label="Flight" value="1" />
                                <Tab label="Car Rentals" value="2" />
                                <Tab label="Texis" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Flights></Flights>
                        </TabPanel>
                        <TabPanel value="2">
                            <CarsRentals></CarsRentals>
                        </TabPanel>
                        <TabPanel value="3">
                            <Taxes></Taxes>
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>
            
        </div>
        
    );
};

export default FilterDestinationCard;



