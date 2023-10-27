import React from 'react';
import CommonHeader from '../../shared/CommonHeader/CommonHeader';
import { Container } from '@mui/joy';



// card mui import components

import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const Flightoption = () => {
    return (
        <Container>
            <CommonHeader smallCaption={"WHY AIR GEAIR"} largeCaption={"Our Great Flight Options"} textAlign={"left"}></CommonHeader>

            {/* slider card...... */}

            {/* TODO:   It will be slider card...... */}
            <div>
                <Box
                    sx={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
                        gap: 2,
                    }}
                >
                    <Card size="lg" variant="outlined">
                        <Chip size="sm" variant="outlined" color="neutral">
                            BASIC
                        </Chip>
                        <Typography level="h2">Professional</Typography>
                        <Divider inset="none" />
                        <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
                            <ListItem>
                                <ListItemDecorator>
                                    <Check />
                                </ListItemDecorator>
                                Virtual Credit Cards
                            </ListItem>
                            <ListItem>
                                <ListItemDecorator>
                                    <Check />
                                </ListItemDecorator>
                                Financial Analytics
                            </ListItem>
                            <ListItem>
                                <ListItemDecorator>
                                    <Check />
                                </ListItemDecorator>
                                Checking Account
                            </ListItem>
                            <ListItem>
                                <ListItemDecorator>
                                    <Check />
                                </ListItemDecorator>
                                API Integration
                            </ListItem>
                        </List>
                        <Divider inset="none" />
                        <CardActions>
                            <Typography level="title-lg" sx={{ mr: 'auto' }}>
                                3.990€{' '}
                                <Typography fontSize="sm" textColor="text.tertiary">
                                    / month
                                </Typography>
                            </Typography>
                            <Button
                                variant="soft"
                                color="neutral"
                                endDecorator={<KeyboardArrowRight />}
                            >
                                Start now
                            </Button>
                        </CardActions>
                    </Card>

                    <Card size="lg" variant="outlined">
                        <Chip size="sm" variant="outlined" color="neutral">
                            BASIC
                        </Chip>
                        <Typography level="h2">Professional</Typography>
                        <Divider inset="none" />
                        <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
                            <ListItem>
                                <ListItemDecorator>
                                    <Check />
                                </ListItemDecorator>
                                Virtual Credit Cards
                            </ListItem>
                            <ListItem>
                                <ListItemDecorator>
                                    <Check />
                                </ListItemDecorator>
                                Financial Analytics
                            </ListItem>
                            <ListItem>
                                <ListItemDecorator>
                                    <Check />
                                </ListItemDecorator>
                                Checking Account
                            </ListItem>
                            <ListItem>
                                <ListItemDecorator>
                                    <Check />
                                </ListItemDecorator>
                                API Integration
                            </ListItem>
                        </List>
                        <Divider inset="none" />
                        <CardActions>
                            <Typography level="title-lg" sx={{ mr: 'auto' }}>
                                3.990€{' '}
                                <Typography fontSize="sm" textColor="text.tertiary">
                                    / month
                                </Typography>
                            </Typography>
                            <Button
                                variant="soft"
                                color="neutral"
                                endDecorator={<KeyboardArrowRight />}
                            >
                                Start now
                            </Button>
                        </CardActions>
                    </Card>

                    <Card size="lg" variant="outlined">
                        <Chip size="sm" variant="outlined" color="neutral">
                            BASIC
                        </Chip>
                        <Typography level="h2">Professional</Typography>
                        <Divider inset="none" />
                        <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
                            <ListItem>
                                <ListItemDecorator>
                                    <Check />
                                </ListItemDecorator>
                                Virtual Credit Cards
                            </ListItem>
                            <ListItem>
                                <ListItemDecorator>
                                    <Check />
                                </ListItemDecorator>
                                Financial Analytics
                            </ListItem>
                            <ListItem>
                                <ListItemDecorator>
                                    <Check />
                                </ListItemDecorator>
                                Checking Account
                            </ListItem>
                            <ListItem>
                                <ListItemDecorator>
                                    <Check />
                                </ListItemDecorator>
                                API Integration
                            </ListItem>
                        </List>
                        <Divider inset="none" />
                        <CardActions>
                            <Typography level="title-lg" sx={{ mr: 'auto' }}>
                                3.990€{' '}
                                <Typography fontSize="sm" textColor="text.tertiary">
                                    / month
                                </Typography>
                            </Typography>
                            <Button
                                variant="soft"
                                color="neutral"
                                endDecorator={<KeyboardArrowRight />}
                            >
                                Start now
                            </Button>
                        </CardActions>
                    </Card>


                    </Box>
            </div>



        </Container>
    );
};

export default Flightoption;