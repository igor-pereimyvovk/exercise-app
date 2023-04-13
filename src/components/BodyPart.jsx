import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{
                background: "#fff",
                borderBottomLeftRadius: "20px",
                width: "270px",
                height: "280px",
                cursor: "pointer",
                gap: "47px",
                borderTop: bodyPart === item ? "4px solid #ff2625" : "none",
            }}
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1750, left: 100, behavior: "smooth" });
            }}
        >
            <img
                src={Icon}
                alt="icon"
                style={{ width: "40px", height: "40px" }}
            />
            <Typography
                fontSize="24px"
                fontWeight="bold"
                color="#3a1212"
                textTransform="capitalize"
            >
                {item}
            </Typography>
        </Stack>
    );
};

export default BodyPart;
