import {useState } from 'react';
import myStyle from "../styles/RightContainer.module.scss";
import useFetch from '../hooks/useFetch';
import Box from "@mui/material/Box"
import BlogCard from './BlogCard';
import IconButton  from '@mui/material/IconButton';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const RightContainer = ({styles }) => {
    const {data , isPending , isError} = useFetch("https://jsonplaceholder.typicode.com/posts?_sort=id&_order=desc");
    const [current ,setCurrent] = useState(0);
    const [isForward , setIsForward] = useState(false);
    const [isBackward , setIsBackward] = useState(false);

    const blogs = data.slice(0 , 8);
   
    return (
        <div className={styles}>
            
            <Box
            sx={{
                p : 3,
                paddingInline:0,
                display : "flex",
                alignItems : "center",
                justifyContent : "flex-start" ,
                overflow : "hidden",
            }}>

                {
                    !isPending &&
                    <>
                    <BlogCard 
                    cardClass={myStyle.modelCard2}
                    title="" 
                    scaleValue=".6"
                    translateValue="270%"
                    opacityValue=".5"
                    />

                    <BlogCard 
                    cardClass={myStyle.modelCard1}
                    title="" 
                    scaleValue=".8"
                    translateValue="100%"
                    opacityValue=".6"
                    />
                    </>
                }
                <Box
                component="span"
                sx={{
                    display : "flex",
                    flexDirection : "row",
                    position : "relative",
                    width:{
                        xs : "230px",
                        sm : "320px",
                        md : "420px",
                        lg : "460px",
                        xl : "520px"
                    },
                    gap :3,
                    height : "fit-content",
                    alignItems : "center",
                    justifyContent : "flex-start" ,
                    mb : 0,
                    scrollSnapType : "x mandatory",
                    scrollBehavior : "smooth",
                    bgcolor : "transparent",
                    zIndex : "1",

                }}
                >
                    {blogs.map((blog) => {
                        return <BlogCard 
                        cardClass={`${myStyle.card} 
                        ${isBackward && blogs.indexOf(blog) === current - 1 ? `${myStyle.lastCard} ${myStyle.toRight}` : ""}
                        ${isForward && blogs.indexOf(blog) === current - 1 ? `${myStyle.lastCard} ${myStyle.toLeft}` : ""}
                        ${isBackward && blogs.indexOf(blog) === current ? `${myStyle.currentCard} ${myStyle.toRight}` : ""}
                        ${isForward && blogs.indexOf(blog) === current ? `${myStyle.currentCard} ${myStyle.toLeft}` : ""}
                        ${isBackward && blogs.indexOf(blog) === current + 1 ? `${myStyle.nextCard} ${myStyle.toRight}` : ""}
                        ${isForward && blogs.indexOf(blog) === current + 1 ? `${myStyle.nextCard} ${myStyle.toLeft}` : ""}
                        ${!isForward && !isBackward && blogs.indexOf(blog) === current ? `${myStyle.defaultCard}` : ""}
                        ${!isForward && !isBackward && blogs.indexOf(blog) === current + 1 ? `${myStyle.defaultCard}` : ""}
                        `}
                        key={blog.id} 
                        title={blog.title}
                        body={blog.body}
                        id={blog.id}
                        />
                    }) }
                </Box>
            </Box>
            
            {
            !isPending &&
            <Box
            sx={{
                mr : {
                    xs : 2,
                    sm : 4,
                    md : 6
                },
                mb : {
                    xs : 3,
                    md : 5,
                }
            }}>
                <IconButton
                variant="contained"
                className={myStyle.btn}
                onClick={() => {
                    if(current <= 0) return;
                    setCurrent(current - 1);
                    setIsBackward(true);
                    setIsForward(false)
                }}
                >
                    <ArrowCircleLeftIcon
                    sx={{
                        p: 0,
                        fontSize : {
                            xs : "2rem",
                            sm : "2.5rem",
                            md : "3rem"
                        },
                        color : "white.main",
                        filter : "drop-shadow(0px 5px 5px rgba(40,40,40,.2))"
                    }}/>
                </IconButton>

                <IconButton
                variant="contained"
                className={myStyle.btn}
                onClick={() => {
                    if(current >= 6) return;
                    setCurrent(current + 1);
                    setIsBackward(false);
                    setIsForward(true)               
                }}
                >
                    <ArrowCircleRightIcon
                    sx={{
                        p: 0,
                        fontSize : {
                            xs : "2rem",
                            sm : "2.5rem",
                            md : "3rem"
                        },
                        color : "blue.main",
                        filter : "drop-shadow(0px 5px 5px rgba(40,40,40,.2))"
                    }}/>
                </IconButton>
            </Box>
            }
            
        </div>
    );
}

export default RightContainer;
