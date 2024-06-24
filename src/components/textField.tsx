import React from "react";
import { Stack, TextField, InputAdornment} from "@mui/material";
const TexterField =()=>{
    return(
       <Stack spacing={4}>
           <Stack direction='row' spacing={2}>
            <TextField label="Name" variant="outlined"/>
            <TextField label="Name" variant="filled"/>
            <TextField label="Name" variant="standard"/>
           </Stack>

           <Stack direction='row' spacing={2}>
                <TextField label="Email Address" size="small" color="warning" required helperText="abc@gmail.com"/>
                <TextField label="Password" type="password" size="small" color="warning"/>
                <TextField label="Read Only" size="small" InputProps={{readOnly:true}}/>
           </Stack>

           <Stack direction='row' spacing={2}>
             <TextField label="Amount" InputProps={{
                startAdornment:<InputAdornment position="start">$</InputAdornment>,
             }}/>
             <TextField label="Weight" InputProps={{
                endAdornment:<InputAdornment position="end">kg</InputAdornment>,
             }}/>
           </Stack>
       </Stack>
    );
};

const inputType =(
    <>
    <TexterField/>
    </>
);

export default inputType;