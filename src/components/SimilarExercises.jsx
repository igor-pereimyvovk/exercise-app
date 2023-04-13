import { Typography, Box, Stack } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({
    similarExercises: { similarTargetData, similarEquipmentData },
}) => {
    if (!similarEquipmentData || !similarTargetData) {
        return <Loader />;
    }

    return (
        <Box p="20px" sx={{ mt: { xs: "10px", lg: "100px" } }}>
            <Box position="relative">
                <Typography variant="h4" fontWeight="bold" mb="32px">
                    Similar{" "}
                    <span
                        style={{
                            color: "#ff2625",
                            textTransform: "capitalize",
                        }}
                    >
                        {similarTargetData[0]?.target}
                    </span>{" "}
                    target
                </Typography>
                <HorizontalScrollbar data={similarTargetData} />
            </Box>
            <Box position="relative">
                <Typography variant="h4" fontWeight="bold" mb="32px" mt="50px">
                    Similar{" "}
                    <span
                        style={{
                            color: "#ff2625",
                            textTransform: "capitalize",
                        }}
                    >
                        {similarEquipmentData[0]?.equipment}
                    </span>{" "}
                    equipment
                </Typography>
                <HorizontalScrollbar data={similarEquipmentData} />
            </Box>
        </Box>
    );
};

export default SimilarExercises;
