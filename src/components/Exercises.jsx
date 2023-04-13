import { useState, useEffect } from "react";
import { Stack, Box, Typography, Pagination } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import ExercisesAPI from "../API/ExercisesAPI";
import findCurrentExercises from "../utils/findCurrentExercises";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;

    useEffect(() => {
        fetchExercisesData();
    }, [bodyPart]);

    const fetchExercisesData = async () => {
        let exerciseData = [];
        if (bodyPart === "all") {
            exerciseData = await ExercisesAPI.getExercises();
        } else {
            exerciseData = await ExercisesAPI.getExercisesByBodyPart(bodyPart);
        }
        setExercises(exerciseData);
    };

    const currentExercises = findCurrentExercises(
        currentPage,
        exercisesPerPage,
        exercises
    );
    // const indexOfLastExercise = currentPage * exercisesPerPage;
    // const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    // const currentExercises = exercises.slice(
    //     indexOfFirstExercise,
    //     indexOfLastExercise
    // );

    const paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1750, behavior: "smooth" });
    };

    return (
        <Box id="exercises" sx={{ p: "20px", mt: { xs: "50px", lg: "110px" } }}>
            <Typography
                variant="h3"
                fontWeight={600}
                mb="60px"
                textAlign="center"
            >
                Showing Results
            </Typography>
            <Stack
                direction="row"
                sx={{ gap: { xs: "50px", lg: "110px" } }}
                flexWrap="wrap"
                justifyContent="center"
            >
                {currentExercises.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))}
            </Stack>
            <Stack mt="100px" alignItems="center">
                {exercises.length > 9 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / 9)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    );
};

export default Exercises;
