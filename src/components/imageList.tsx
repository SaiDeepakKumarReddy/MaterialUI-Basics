import React from "react";
import {ImageList, ImageListItem, Stack} from "@mui/material";
const MuiImageList =()=>{
    return(
      <Stack spacing={4}>
        <ImageList sx={{width:500, height:450}} cols={3} rowHeight={164}>
             {
                itemData.map(item => (
                    <ImageListItem key={item.img}>
                       <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}/>
                    </ImageListItem>
                ))
             }
        </ImageList>
      </Stack>
    );
};

const itemData =[
    {
        img:"sai.jpeg",
        title:"Sai Photo"
    },
    {
        img:"sai.jpeg",
        title:"Sai Photo"
    },
    {
        img:"sai.jpeg",
        title:"Sai Photo"
    },
    {
        img:"sai.jpeg",
        title:"Sai Photo"
    },
    {
        img:"sai.jpeg",
        title:"Sai Photo"
    },
]
export default MuiImageList;
