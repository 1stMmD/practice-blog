import myStyle from "../../styles/RightContainer.module.scss";

import Container  from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import BlogCard from "../../components/BlogCard";
import { useState , useEffect } from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import NavCircle from "../../components/NavCircle";
import useFetch from "../../hooks/useFetch";
import PageChanging from "../../components/PageChanging";

const Blogs = () => {
    const baseNumber = 12;
    
    const [current ,setCurrent] = useState(0)
    
    const startNumber = baseNumber * current
    const endNumber  = startNumber + baseNumber;
  
    const {data , isPending , isError} = useFetch("https://jsonplaceholder.typicode.com/posts?_sort=id&_order=desc");
    const blogs = data.slice(startNumber , endNumber );

    const increment = () => {
        endNumber < data.length ?
        setCurrent(current + 1) : () => {return} ;
    }

    const decrement = () => {
        startNumber > 0 ?
        setCurrent(current - 1) : () => {return} ;
    }

    return (
        <Container
        sx={{
            minWidth : "100%",
            minHeight:"100vh",
            backgroundImage : "url('background-2.svg')",
            backgroundSize : "cover",
            display : "flex",
            flexDirection : "column",
            alignItems : "center",
            justifyContent : "flex-start"
        }}>

            <PageChanging 
            showTime={!isPending}/>

            <Typography
            variant="h2"
            color="black.light"
            sx={{
                fontWeight : "600",
                fontSize : {
                    xs : "1.5rem",
                    sm : "2rem",
                    md : "2.5rem",
                    lg : "3.5rem"
                },
                mt : "2rem",
                mb : "2rem"
            }}>
                All Posts
            </Typography>

            <Box
            sx={{
                display:"grid",
                gridTemplateColumns : {
                    xs : "1fr 1fr",
                    lg:"1fr 1fr 1fr",
                },
                gap : {
                    xs : 2.5,
                    md : 4
                },
                width: "fit-content",
            }}>
                {blogs ? blogs.map( (blog) => {
                      return<BlogCard
                                cardClass={myStyle.defaultCard}
                                body={blog.body}
                                title={blog.title}
                                id={blog.id}
                                key={blog.id}
                                />
                }) : ""}

            </Box>      

            {
            !isError &&
            <Box
            sx={{
                mt : {
                    xs : "1rem",
                    sm : "1.5rem",
                    lg : "2rem"
                },
                display : "flex",
                flexDirection : "row",
                justifyContent : "center",
                alignItems : "center"
            }}>
                <IconButton 
                onClick={() => decrement()}
                >
                    <ArrowCircleLeftIcon
                    sx={{
                        p: 0,
                        fontSize : {
                            xs : "2rem",
                            sm : "2.5rem",
                            md : "3rem"
                        },
                        color : startNumber > 0 ? "blue.main" : "grey.main",
                        filter : "drop-shadow(0px 5px 5px rgba(40,40,40,.2))"
                    }}/>
                </IconButton>

                <Typography
                color="blue.main"
                >
                    {current + 1}
                </Typography>
                
                <IconButton 
                onClick={() => increment()}
                >
                    <ArrowCircleRightIcon
                    sx={{
                        p: 0,
                        fontSize : {
                            xs : "2rem",
                            sm : "2.5rem",
                            md : "3rem"
                        },
                        color : endNumber < data.length ? "blue.main" : "gray.main",
                        filter : "drop-shadow(0px 5px 5px rgba(40,40,40,.2))"
                    }}/>
                </IconButton>
            </Box>
            }

            {/* will render if an error happens
            during fetch 👇🏻 */}

            {
                isError &&
                <Box
                sx={{
                    position : "absolute",
                    top : "50%",
                    transform : "translateY(-50%)",
                    display : "flex",
                    flexDirection : "column",
                    alignItems: "center"
                }}>

                <Typography
                sx={{
                    color :"error.main",
                    fontSize : ".8rem",
                }}>
                    SOMETHING WENT WRONG
                </Typography>

                <Typography
                sx={{
                    color :"error.main",
                    fontSize: "2rem",
                }}>
                    {isError.toUpperCase()}
                </Typography>

                </Box>
            }    

            <NavCircle/>
            
        </Container>
    );
}

export default Blogs;
