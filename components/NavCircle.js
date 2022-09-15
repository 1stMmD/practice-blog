import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {useState} from "react";
import {useRouter} from "next/router";

const NavCircle = ({type}) => {
    const [showTime , setShowTime] = useState(false)
    const router = useRouter()

    return (
        <Box
        sx={{
            position : "absolute",
            top : {
                xs : "1.5rem",
                sm : "2rem",
                lg : "2.5rem",

            },
            right : {
                xs : "1rem",
                sm : "2rem",
                lg : '3rem'
            },
            display : "grid",
            placeItems : "center",
            width : "fit-content"
        }}>

            <Button
            variant="contained"
            sx={{
                position : "relative",
                minWidth: "unset",
                transition : "all 500ms",
                width:{
                    xs : "40px",
                    md : "50px"
                },
                height:{
                    xs : "40px",
                    md : "50px"
                },
                borderRadius : ".5rem",
                bgcolor : "blue.main",
                zIndex : "2",

                "&:hover" : {
                    bgcolor : "blue.main"
                },

                "&::before" : {
                    position : "absolute",
                    transition : "all 250ms",
                    content :"''",
                    width : showTime ? "50%" : "55%",
                    height : "2px",
                    bgcolor : "white.main",
                    transform : showTime ? "rotate(-45deg)" : "",
                    mb : showTime ? "0" : 0.7 ,
                },
                "&::after" : {
                    position : "absolute",
                    transition : "all 250ms",
                    content :"''",
                    width : "50%",
                    height : "2px",
                    bgcolor : "white.main",
                    transform : showTime ? "rotate(45deg)" : "",
                    mt : showTime ? "0" : 0.7,
                    ml : showTime ? "0" : "5%",
                }
            }}
            onClick={() => setShowTime(!showTime)}
            ></Button>

            <Button
            sx={{
                position : "absolute",
                minWidth: "unset",
                transition : "all 500ms",
                width:{
                    xs : "35px",
                    md : "40px",
                },
                height:{
                    xs : "35px",
                    md : "40px"
                },
                borderRadius : ".5rem",
                bgcolor : "black.main",
                transform : showTime ? "translateY(50px)" : "",

                "&:hover" : {
                    bgcolor : "blue.main"
                },  
            }}>
                <HomeOutlinedIcon
                sx={{
                    color : "white.main"
                }}
                onClick={() => router.push("/")}
                />
            </Button>
            {
                type === "HOME" &&
                <Button
                sx={{
                    position : "absolute",
                    minWidth: "unset",
                    transition : "all 500ms",
                    width:{
                        xs : "35px",
                        md : "40px",
                    },
                    height:{
                        xs : "35px",
                        md : "40px"
                    },
                    borderRadius : ".5rem",
                    bgcolor : "black.main",
                    transform : showTime ? "translateY(95px)" : "",
    
                    "&:hover" : {
                        bgcolor : "blue.main"
                    },  
                }}>

                </Button>
            }

        </Box>
    );
}

export default NavCircle;

