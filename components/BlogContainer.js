import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from "next/router"
import { useRadioGroup } from "@mui/material";
const BlogContainer = ({title , body}) => {
   
    const router = useRouter();

    return (
        <div
        style={{
            position : "relative",
            display : "flex",
            justifyContent: "center",
            width : "100%",
            height : "100vh",
            backgroundColor : "#E6E6E6"
        }}>

            <IconButton
            sx={{
                position : "absolute",
                top : "1rem",
                left : "1rem",
            }}
            onClick={() => router.push("/blogs")}>
                <ArrowBackIcon
                sx={{
                    fontSize : {
                        xs : "2rem",
                        md : "3rem",
                        lg : "4rem",
                    },
                }}/>
            </IconButton>

            <Box
            sx={{
                height: "fit-content",
                width : {
                    xs : "80vw",
                }
            }}>

                <Typography
                variant="h3"
                sx={{
                    color : 'black.light',
                    fontSize : {
                        xs : '20px',
                        md : '24px',
                        lg : "28px"
                    },
                    paddingInline : 1,
                    fontWeight : "600",
                    borderLeft : "4px solid #67A6FF",
                    mt : {
                        xs : "5rem",
                        md : "6rem",
                        lg : "7rem",
                    },
                }}>
                    {title ? title : ""}
                </Typography>

                <Typography
                variant="body1"
                sx={{
                    color : 'grey.main',
                    fontSize : {
                        xs : '14px',
                        md : "16px",
                        lg : "20px"
                    },
                    paddingInline : 1,
                    fontWeight : "400",
                    borderLeft : "4px solid #89F7FE",
                    mt : 4,
                }}>
                    {body ? body : ""}
                </Typography>

            </Box>
            
        </div>
    );
}

export default BlogContainer;
