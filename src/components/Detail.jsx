import { Button, Stack, Typography } from "@mui/material";
import React from "react";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({
    exerciseDetail: { bodyPart, gifUrl, name, target, equipment },
}) => {
    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ];

    return (
        <Stack
            gap="60px"
            sx={{
                flexDirection: { lg: "row" },
                p: "20px",
                alignItems: "center",
            }}
        >
            <img
                src={gifUrl}
                loading="lazy"
                className="detail-image"
                alt={name}
            />
            <Stack sx={{ gap: { xs: "20px", lg: "35px" } }}>
                <Typography variant="h3" textTransform="capitalize">
                    {name}
                </Typography>
                <Typography variant="h6">
                    Exercise keep you strong {name} one of the best exercise to
                    target your {target} . It help you mood and gain energy.
                </Typography>
                {extraDetail.map((detail, index) => (
                    <Stack
                        direction="row"
                        alignItems="center"
                        key={index}
                        gap="24px"
                    >
                        <Button
                            sx={{
                                background: "#fff2db",
                                borderRadius: "50%",
                                width: "100px",
                                height: "100px",
                            }}
                        >
                            <img
                                src={detail.icon}
                                alt={detail.name}
                                style={{ width: "50px", height: "50px" }}
                            />
                        </Button>
                        <Typography variant="h5" textTransform="capitalize">
                            {detail.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

export default Detail;
