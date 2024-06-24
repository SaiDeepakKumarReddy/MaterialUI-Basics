import React from "react";
import "../index.css";
import {Box, FormControlLabel, Switch} from "@mui/material";
import { useState } from "react";

    const MuiSwitch=()=>{
    const [swiitch, setSwitch]=useState(false)
    console.log({swiitch})
    const changeSwitch=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setSwitch(event.target.checked)
    }
    return(
     <Box>
        <FormControlLabel label=" Dark Mode" control={<Switch checked={swiitch} onChange={changeSwitch}/>} />
     </Box>
    );
};

const switchh =(
    <>
    <MuiSwitch/>
    </>
);

export default switchh;