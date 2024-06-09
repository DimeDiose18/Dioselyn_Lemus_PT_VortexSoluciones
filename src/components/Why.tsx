import { Grid, Card, CardContent, CardActions, Typography, Button } from "@mui/material"

const Why = () => {
    return (
        <>
            <Grid container spacing={2} className="py-3">
                <Grid item xs={12} md={12} lg={12}>
                    <h1 className="font-titles text-5xl my-4">Learn a little more about us</h1>
                    
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={12} lg={4}>
                            <Card sx={{ minWidth: 375 }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        1
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Write
                                    </Typography>
                                    <Typography variant="body2">
                                    Unleash your creativity. Transform ideas into words. Your story starts here!
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" className="text-[#000]">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={12} lg={4} className="relative bottom-2">
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                   
                                    <Typography variant="h5" component="div">
                                        2
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Publish
                                    </Typography>
                                    <Typography variant="body2">
                                    Make yourself heard. Share your research and bring your discoveries to life. The community waits for your voice!
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={12} lg={4}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    
                                    <Typography variant="h5" component="div">
                                        3
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Wait
                                    </Typography>
                                    <Typography variant="body2">
                                    Growth waiting. Professionals are waiting to polish your talent. Let your shine shine with its help
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
        </>
    )
}

export { Why }
