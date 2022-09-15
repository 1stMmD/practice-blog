import React from 'react';
import Box from "@mui/material/Box";
import Typografy from "@mui/material/Typography";

const PageChanging = ({showTime}) => {
    return (
        <>
            <Box
            sx={{
                position : "absolute",
                right : "0",
                top : "0",
                width : showTime ? "0%" : "100%" ,
                height : "100%",
                bgcolor : "blue.main",
                zIndex : "3",
                transition : "width 800ms 200ms"
            }}/>

            <Box
            sx={{
                position : "absolute",
                right : "0",
                top : "0",
                width : showTime ? "0%" : "100%" ,
                height : "100%",
                bgcolor : "grey.light",
                zIndex : "4",
                transition : "width 800ms 100ms"
            }}/>

            <Box
            sx={{
                position : "absolute",
                right : "0",
                top : "0",
                width : showTime ? "0%" : "100%" ,
                height : "100%",
                bgcolor : "white.main",
                zIndex : "5",
                transition : "width 800ms",
                display : "grid",
                placeItems: "center",
            }}>
                <Typografy
                sx={{
                    fontSize : '2rem',
                    color : 'blue.main',
                    display : showTime ? "none" : "inline"
                }}
                >
                    Loading...
                </Typografy>
            </Box>
        </>
    );
}

export default PageChanging;
