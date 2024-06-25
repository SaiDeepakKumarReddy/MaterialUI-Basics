import React from "react";
import {Stack, Link} from "@mui/material";
const MuiLink =()=>{
    return(
        <Stack>
        <Stack spacing={2} direction='row'>
            <Link href="" underline="hover">Home</Link>
            <Link href="" color="secondary" underline="none">Contact us</Link>
        </Stack>
        </Stack>
    );
};


export default MuiLink;
