import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { useState , useEffect } from "react";

const NotFound = () => {
    const router = useRouter();
    const [show , setShow] = useState(false)

    useEffect(() => {
        setShow(true);
    },[])
    const ButtonSX = {
        borderRadius : "10rem",
        fontSize : {
            xs : "10px",
            sm : "14px",
            lg : "1.5rem",
        },
        border : {
            xs : '2px solid',
            lg : "4px solid",
        },
        marginInline : {
            xs : .5,
            sm : 1,
            lg : 2
        },
        mt : {
            xs : 1,
            lg : 2,
        },
        "&:hover" :  {
            border : {
                xs : '2px solid',
                lg : "4px solid",
            },
        }

    }

    return (
        <>
        {

        show &&

        <Box
        sx={{
            width : "100%",
            height : "100vh",
            backgroundImage : "url('../background-3.svg')",
            backgroundSize : "cover",
            display: "grid",
            placeItems: "center",
            }}>

            <Box
            sx={{
                display : "flex",
                justifyContent : "center",
                alignItems : "center",
                flexDirection : 'column'
            }}>

                <Typography
                sx={{
                    fontSize : {
                        xs : "3rem",
                        sm : "4rem",
                        lg : "7rem",
                    },
                    mb : {
                        xs : -1.5,
                        sm : -2,
                        lg : -3,
                    },
                    color : "blue.main",
                }}>
                    404
                </Typography>

                <Typography
                sx={{
                    fontSize : {
                        xs : "1.5rem",
                        sm : "2rem",
                        lg : "3.5rem"
                    },
                    color : "black.light"
                }}>
                    Page Not Found
                </Typography>

                <Box
                component="span"
                sx={{

                }}>

                    <Button
                    variant="outlined"
                    color="blue"
                    sx={ButtonSX}
                    onClick={() => router.push("/blogs")}>
                        Blog Page
                    </Button>

                    <Button
                    variant="outlined"
                    color="blue"
                    sx={ButtonSX}
                    onClick={() => router.push("/")}>
                        Home Page
                    </Button>

                </Box>

            </Box>

        </Box>
        }
        </>
    );
}

export default NotFound;
