import React from "react";
import "../index.css";
import {Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio} from "@mui/material";
import { useState } from "react";
const MuiRadioButton =()=>{
    const [value,setValue]=useState("")
    console.log({value})
    const changeValue=(event: React.ChangeEvent<HTMLInputElement>)=>{
      setValue(event.target.value)
    }
    return(
     <Box>
        <FormControl>
            <FormLabel>
                Years of Experience
            </FormLabel>
            <RadioGroup value={value} onChange={changeValue} row>
                <FormControlLabel  control={<Radio color="error" />} label="0-2" value="0-2"/>
                <FormControlLabel  control={<Radio color="primary"/>} label="3-5" value="3-5"/>
                <FormControlLabel  control={<Radio color="success"/>} label="6-10" value="6-10"/>
            </RadioGroup>
        </FormControl>
     </Box>
    );
};

const selectRadioButton =(
    <>
    <MuiRadioButton/>
    </>
);

export default selectRadioButton;