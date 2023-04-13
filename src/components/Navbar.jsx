import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import logo from "../assets/images/Logo.png";

const Navbar = () => {
    return (
        <Stack
            direction="row"
            sx={{
                gap: { xs: "40px", sm: "122px" },
                mt: { xs: "20px", sm: "32px" },
                px: "20px",
            }}
        >
            <Link to="/">
                <img
                    src={logo}
                    alt="logo"
                    style={{ width: "48px", height: "48px", margin: "0 20px" }}
                />
            </Link>
            <Stack
                direction="row"
                gap="40px"
                fontSize="24px"
                alignItems="flex-end"
            >
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "#3A1212",
                        borderBottom: "3px solid #FF2625",
                    }}
                >
                    Home
                </Link>
                <a
                    href="#exercises"
                    style={{ textDecoration: "none", color: "#3A1212" }}
                >
                    Exercises
                </a>
            </Stack>
        </Stack>
    );
};

export default Navbar;
