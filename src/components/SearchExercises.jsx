import { useState, useEffect } from "react";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import ExercisesAPI from "../API/ExercisesAPI";
import filterExercisesBySearch from "../utils/filterExercisesBySearch";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState("");
    const [bodyPartList, setBodyPartList] = useState([]);

    useEffect(() => {
        fetchBodyPartData();
    }, []);

    const fetchBodyPartData = async () => {
        const bodyPartData = await ExercisesAPI.getBodyPartList();
        setBodyPartList(["all", ...bodyPartData]);
    };

    const handleSearch = async () => {
        if (search) {
            const exerciseData = await ExercisesAPI.getExercises();
            const searchedExercisesData = filterExercisesBySearch(
                exerciseData,
                search
            );
            setSearch("");
            setExercises(searchedExercisesData);
            window.scrollTo({ top: 1750, behavior: "smooth" });
        }
    };

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography
                fontWeight={700}
                sx={{ fontSize: { xs: "30px", lg: "44px" } }}
                textAlign="center"
                mb="50px"
            >
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight: 700,
                            border: "none",
                            borderRadius: "4px",
                        },
                        width: {
                            xs: "350px",
                            lg: "800px",
                        },
                        background: "#fff",
                        borderRadius: "40px",
                    }}
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                    placeholder="Search Exercises"
                    type="text"
                />
                <Button
                    className="search-btn"
                    sx={{
                        background: "#ff2625",
                        color: "#fff",
                        textTransform: "none",
                        width: { xs: "90px", lg: "175px" },
                        fontSize: { xs: "14px", lg: "20px" },
                        height: "55.5px",
                        position: "absolute",
                        right: 0,
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
                <HorizontalScrollbar
                    data={bodyPartList}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                    isBodyParts
                />
            </Box>
        </Stack>
    );
};

export default SearchExercises;
