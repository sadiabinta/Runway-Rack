import React from 'react';
import CommonHeader from '../../shared/CommonHeader/CommonHeader';
import { Container, Grid } from '@mui/joy';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

// right side grid mui components import
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
// import Typography from '@mui/joy/Typography';

const LatestUpdate = () => {
    return (
        <div>
            <CommonHeader smallCaption={"OUR NEWS FEEDS"} largeCaption={"Latest News Update"} textAlign={"center"}></CommonHeader>
            <Container>
                <Grid container spacing={4}>
                    <Grid item  xs={12} md={6}>
                        <Card sx={{ minHeight: '380px', width: "100%" }}>
                            <CardCover>
                                <img
                                    src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
                                    srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
                                    loading="lazy"
                                    alt=""
                                />
                            </CardCover>
                            <CardCover
                                sx={{
                                    background:
                                        'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                                }}
                            />
                            <CardContent sx={{ justifyContent: 'flex-end' }}>
                                <Typography level="title-lg" textColor="#fff">
                                    Yosemite National Park
                                </Typography>
                                <Typography
                                    startDecorator={<LocationOnRoundedIcon />}
                                    textColor="neutral.300"
                                >
                                    California, USA
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>


                    {/* right side card...... */}


                    <Grid item  xs={12} md={6}>
                        <Card
                            variant="outlined"
                            orientation="horizontal"
                            sx={{
                                width: "100%",
                                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                            }}
                        >
                            <AspectRatio ratio="1" sx={{ width: "50%",height:"120px"}}>
                                <img
                                    src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                                    srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                                    loading="lazy"
                                    alt=""
                                />
                            </AspectRatio>
                            <CardContent>
                                <Typography level="title-lg" id="card-description">
                                    Yosemite Park
                                </Typography>
                                <Typography level="body-sm" aria-describedby="card-description" mb={1}>
                                    <Link
                                        overlay
                                        underline="none"
                                        href="#interactive-card"
                                        sx={{ color: 'text.tertiary' }}
                                    >
                                        California, USA
                                    </Link>
                                </Typography>
                                <Chip
                                    variant="outlined"
                                    color="primary"
                                    size="sm"
                                    sx={{ pointerEvents: 'none' }}
                                >
                                    Cool weather all day long
                                </Chip>
                            </CardContent>
                        </Card>

                        <Card
                            variant="outlined"
                            orientation="horizontal"
                            sx={{
                                width: "100%",
                                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                            }}
                        >
                            <AspectRatio ratio="1" sx={{ width: "50%", height: "120px" }}>
                                <img
                                    src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                                    srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                                    loading="lazy"
                                    alt=""
                                />
                            </AspectRatio>
                            <CardContent>
                                <Typography level="title-lg" id="card-description">
                                    Yosemite Park
                                </Typography>
                                <Typography level="body-sm" aria-describedby="card-description" mb={1}>
                                    <Link
                                        overlay
                                        underline="none"
                                        href="#interactive-card"
                                        sx={{ color: 'text.tertiary' }}
                                    >
                                        California, USA
                                    </Link>
                                </Typography>
                                <Chip
                                    variant="outlined"
                                    color="primary"
                                    size="sm"
                                    sx={{ pointerEvents: 'none' }}
                                >
                                    Cool weather all day long
                                </Chip>
                            </CardContent>
                        </Card>

                        <Card
                            variant="outlined"
                            orientation="horizontal"
                            sx={{
                                width: "100%",
                                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                            }}
                        >
                            <AspectRatio ratio="1" sx={{ width: "50%", height: "30%" }}>
                                <img
                                    src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                                    srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                                    loading="lazy"
                                    alt=""
                                />
                            </AspectRatio>
                            <CardContent>
                                <Typography level="title-lg" id="card-description">
                                    Yosemite Park
                                </Typography>
                                <Typography level="body-sm" aria-describedby="card-description" mb={1}>
                                    <Link
                                        overlay
                                        underline="none"
                                        href="#interactive-card"
                                        sx={{ color: 'text.tertiary' }}
                                    >
                                        California, USA
                                    </Link>
                                </Typography>
                                <Chip
                                    variant="outlined"
                                    color="primary"
                                    size="sm"
                                    sx={{ pointerEvents: 'none' }}
                                >
                                    Cool weather all day long
                                </Chip>
                            </CardContent>
                        </Card>

                    </Grid>
                    
                </Grid>
            </Container>
        </div>
    );
};

export default LatestUpdate;