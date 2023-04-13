import { Stack } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            width="100%"
            my="28px"
        >
            <InfinitySpin color="gray" />
        </Stack>
    );
};

export default Loader;
