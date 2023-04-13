export default function filterExercisesBySearch(exercises, search) {
    return exercises.filter((exercise) => {
        return (
            exercise.name.toLowerCase().includes(search.toLowerCase()) ||
            exercise.target.toLowerCase().includes(search.toLowerCase()) ||
            exercise.bodyPart.toLowerCase().includes(search.toLowerCase())
        );
    });
}
