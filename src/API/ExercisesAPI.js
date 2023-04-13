const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "3b993c99demsh7082b1b8ae14c46p19fe5ajsne601a8afe655",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
};
const youtubeOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "43e0665e34msh45e4af66360cc94p108512jsn8eed34095e47",
        "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
};

export default class ExercisesAPI {
    static async getExercises() {
        const response = await fetch(
            "https://exercisedb.p.rapidapi.com/exercises",
            options
        ).then((response) => response.json());

        return response;
    }
    static async getBodyPartList() {
        const response = await fetch(
            "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
            options
        ).then((response) => response.json());
        return response;
    }
    static async getExercisesByBodyPart(bodyPart) {
        const response = await fetch(
            `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
            options
        ).then((response) => response.json());
        return response;
    }
    static async getExercisesById(id) {
        const response = await fetch(
            `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
            options
        ).then((response) => response.json());
        return response;
    }
    static async getExerciseByName(target, equipment) {
        const responseTarget = await fetch(
            `https://exercisedb.p.rapidapi.com/exercises/target/${target}`,
            options
        ).then((response) => response.json());
        const responseEquipment = await fetch(
            `https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`,
            options
        ).then((response) => response.json());

        return [responseTarget, responseEquipment];
    }
    static async getExercisesVideos(query) {
        const response = await fetch(
            `https://youtube-search-and-download.p.rapidapi.com/search?query=${query}exercise`,
            youtubeOptions
        ).then((response) => response.json());
        return response;
    }
}
