import React from "react";
import {Typography} from "@mui/material";
import '../index.css';
const Mytypography =()=>{
    return(
        <div>
            <Typography variant="h1">h1 Heading</Typography>
            <Typography variant="h2">h2 Heading</Typography>
            <Typography variant="h3">h3 Heading</Typography>
            <Typography variant="h4">h4 Heading</Typography>
            <Typography variant="h5">h5 Heading</Typography>
            <Typography variant="h6">h6 Heading</Typography>
            <Typography variant="body1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas fugit repellat debitis eius veniam voluptate, tenetur expedita dolor porro sit hic odit reiciendis soluta provident atque rem vel velit ipsam.</Typography>
            <Typography variant="body2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas fugit repellat debitis eius veniam voluptate, tenetur expedita dolor porro sit hic odit reiciendis soluta provident atque rem vel velit ipsam.</Typography>
        </div>
    );
};

const textElem=(
    <>
    <Mytypography/>
    </>
);
export default textElem;
