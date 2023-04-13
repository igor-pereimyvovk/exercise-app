import { Key } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
    return (
        <Box sx={{ marginTop: { xs: "20px", lg: "200px" }, p: "20px" }}>
            <Typography variant="h3" mb="33px" textTransform="capitalize">
                Watch <span style={{ color: "#ff2625" }}>{name}</span> exercise
                videos
            </Typography>
            <Stack
                justifyContent="flex-start"
                flexWrap="wrap"
                alignItems="center"
                sx={{
                    flexDirection: { md: "row" },
                    gap: { xs: "0", md: "80px" },
                }}
            >
                {exerciseVideos?.slice(0, 3).map((video) => (
                    <a
                        className="exercise-video"
                        href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
                        key={video.video.videoId}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={video.video.thumbnails[0].url}
                            alt={video.video.title}
                        />
                        <Typography
                            variant="h5"
                            color="black"
                            fontWeight="bold"
                        >
                            {video.video.title}
                        </Typography>
                        <Typography variant="h6" color="black">
                            {video.video.channelName}
                        </Typography>
                    </a>
                ))}
            </Stack>
        </Box>
    );
};

export default ExerciseVideos;
