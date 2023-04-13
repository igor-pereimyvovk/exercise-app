import { Stack, Box, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { xs: "70px", lg: "212px" },
                ml: { sm: "50px" },
                position: "relative",
                p: "20px",
            }}
        >
            <Typography color="#ff2625" fontWeight="600" fontSize="26px">
                Fitness Club
            </Typography>
            <Typography
                fontWeight={700}
                sx={{ fontSize: { xs: "40px", lg: "44px" } }}
                mb="23px"
                mt="30px"
            >
                Sweat, Smile <br /> and Repeat
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={4}>
                Check out the most effective exercises
            </Typography>
            <Button
                color="error"
                variant="contained"
                sx={{ background: "#ff2625", padding: "10px" }}
                href="#exercises"
            >
                Explore Exercises
            </Button>
            <Typography
                fontWeight={600}
                color="#ff2625"
                sx={{ opacity: 0.1, display: { xs: "none", lg: "block" } }}
                fontSize="200px"
                lineHeight={1.3}
            >
                Exercise
            </Typography>
            <img
                src={HeroBannerImage}
                alt="banner"
                className="hero-banner-img"
            />
        </Box>
    );
};

export default HeroBanner;
