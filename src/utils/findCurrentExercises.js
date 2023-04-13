export default function findCurrentExercises(
    currentPage,
    exercisesPerPage,
    exercises
) {
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    return exercises?.slice(indexOfFirstExercise, indexOfLastExercise);
}
