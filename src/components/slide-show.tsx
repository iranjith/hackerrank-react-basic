import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Stack,
    Typography,
  } from "@mui/material";
  import { useState } from "react";
  
  interface SlidesProp {
    slides: SlideObject[];
  }
  
  interface SlideObject {
    title: string;
    description: string;
  }
  
  const Slide = ({ slides }: SlidesProp) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleRestart = () => {
      setCurrentIndex(0);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, slides.length - 1));
  
    };
  
    return (
      <>
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            width: "100%",
            height: "100vh",
          }}
        >
          <Stack
            spacing={4}
            direction={"row"}
            sx={{
              justifyContent: "center",
              padding: 2,
            }}
          >
            <Button
              variant="outlined"
              onClick={handleRestart}
              disabled={currentIndex === 0}
            >
              Restart
            </Button>
            <Button
              variant="contained"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              Prev
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={currentIndex === slides.length - 1}
            >
              Next
            </Button>
          </Stack>
          <Card
            variant="outlined"
            sx={{
              margin: 4,
              padding: 4,
              height: "auto",
            }}
          >
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h3">
                    {slides[currentIndex].title}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">
                    {slides[currentIndex].description}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </>
    );
  };
  
  export default Slide;
  