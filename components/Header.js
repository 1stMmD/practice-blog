import  Box from "@mui/material/Box";
import {useState , useEffect} from "react";

const Header = () => {
    const [show , setShow] = useState(false);

    const smLinks = (link) => {
       
        window.location = link; 
     }

     useEffect(() => {
        setShow(true);
     })

    return (
        <>
            {
                
            show &&

            <Box
            sx={{
                position : "absolute",
            top: '0',
            left : "0",
            width : "100%",

            ".links" : {
                width : {
                    xs : "20px",
                    lg : "35px",
                    xl : "40px"
                },
                ml : {
                    xs : ".5rem",
                    md : "1rem"
                },
                cursor : "pointer",
            },

            ".link1" : {
                ml : {
                    xs : "50%",
                    md : "65%"
                }
            },

            ".logo" : {
                width : {
                    xs : "40px",
                    sm : "50px",
                    md : "60px",
                    lg : "70px",
                    xl : "80px"
                },
                mt : {
                    xs : 2,
                    md : 2,
                    lg : 3
                },
                ml : {
                    xs : 2,
                    lg : 2
                }
            }
        }}>
            <img src="fake-blog.svg" className="logo" alt="Fake Blog Logo"/>

            <img src="github.svg" className="links link1"  onClick={() => {smLinks("https://github.com/1stMmD")}}/>
            <img src="instagram.svg" className="links" onClick={() => {smLinks("https://www.instagram.com/mmd.jamali.mt/")}}/>
            <img src="linkedin.svg" className="links" onClick={() => {smLinks("https://www.linkedin.com/in/mohammad-jamali-101499230")}}/>

        </Box>
        }
        </>
    );
}

export default Header;
