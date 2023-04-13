import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Stack, Box, Typography } from "@mui/material";
import ExercisesAPI from "../API/ExercisesAPI";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
    const [similarExercises, setSimilarExercises] = useState({});
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetchExerciseData();
    }, []);

    console.log(exerciseDetail);
    console.log(exerciseVideos);
    console.log(similarExercises);

    const fetchExerciseData = async () => {
        const exerciseData = await ExercisesAPI.getExercisesById(id);
        setExerciseDetail(exerciseData);

        const { contents } = await ExercisesAPI.getExercisesVideos(
            exerciseData.name
        );
        setExerciseVideos(contents);

        const [similarTargetData, similarEquipmentData] =
            await ExercisesAPI.getExerciseByName(
                exerciseData.target,
                exerciseData.equipment
            );
        setSimilarExercises({ similarTargetData, similarEquipmentData });
    };

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos
                exerciseVideos={exerciseVideos}
                name={exerciseDetail.name}
            />
            <SimilarExercises similarExercises={similarExercises} />
        </Box>
    );
};

export default ExerciseDetail;
