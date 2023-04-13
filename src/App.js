import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <Box sx={{ width: { xl: "1488px" } }} m="auto">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/exercises/:id"
                    element={<ExerciseDetail />}
                    onUpdate={() => window.scrollTo({ top: 0 })}
                />
            </Routes>
            <Footer />
        </Box>
    );
};

export default App;
