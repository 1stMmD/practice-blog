import {useState , useEffect} from "react"
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Link from "next/link";


const BlogCard = (
    {
    title ,
    body , 
    id ,
    scaleValue , 
    opacityValue, 
    translateValue,
    zIndexValue,
    cardClass
    }
) => {
    const [show , setShow] = useState(false);
    useEffect(() => {
        setShow(true);
    })
    return (
        <>
        {
        
        show &&
        
        <Card
        className={cardClass}
        component="span"
        sx={{
            minWidth:{
                xs : "98px",
                sm : "138px",
                md : "188px",
                lg : "205px",
                xl : "235px",
            },
            maxWidth:{
                xs : "98px",
                sm : "135px",
                md : "188px",
                lg : "205px",
                xl : "235px",
            },
            minHeight : {
                xs : "120px",
                sm : "165px",
                md : "230px",
                lg : "250px",
                xl : "290px"
            },
            maxHeight : {
                xs : "120px",
                sm : "165px",
                md : "230px",
                lg : "250px",
                xl : "290px"
            },
            borderRadius : {
                xs : 1.5,
                sm : 2,
                md : 2,
                xl : 2.5
            },
            bgcolor : 'grey.light',
            boxShadow : "0 10px 10px 2px rgba(0,0,0,.1)",
            scrollSnapAlign : "end",
            display : "flex",
            flexDirection : "column" ,
            alignItems : "center",
            //will change later 👇
            justifyContent : "flex-start",
            
            //for being a reusable component👇🏻
            scale : scaleValue,
            transform : `translate(${translateValue})`,
            opacity : opacityValue,
            zIndex : zIndexValue

        }}
        key={id}
        >
            <Typography 
            variant="body2"
            fontSize={{
                xs : ".6rem",
                sm : ".8rem",
                md : "1rem",
                lg : "1.1rem",
                xl : "1.3rem"
            }}
            color="black.main"
            sx={{
                fontWeight : "500",
                marginInline : {
                    xs : 1,
                    sm : 2,
                    md : 3
                },
                mt : {
                    xs : 1.5,
                    sm : 2,
                    md : 2.5
                }
            }}
            >
                {title ? title.slice(0,20) : ""}{title ? title.length > 20 && "..." : ""}
            </Typography>

            <Typography
            fontSize={{
                xs : ".5rem",
                sm : ".65rem",
                md : ".8rem",
                lg : ".9rem",
                xl : "1rem"
            }}
            color="grey.main"
            sx={{
                fontWeight : '400',
                marginInline : {
                    xs : 1.1,
                    sm : 2.2,
                    md : 3.3

                },
                mt : {
                    xs : 1,
                    sm : 1,
                    md : 2,
                    xl : 2.5
                }
            }}
            >
                {body ? body.slice(0,60) : ""}{body ? body.length > 60 && "..." : ""}
            </Typography>         
            
                <Link 
                href={`/blogs/${id}`}
                >
                    {
                        id ? 
                        <Typography
                        color="black.main"
                        variant="body2"
                        sx={{
                            transition : "all 250ms",
                            fontSize:{
                                xs:".55rem",
                                sm : ".85rem",
                                md : "1.1rem",
                                lg : "1.2rem"
                            },
                            m : {
                                xs :"auto 8px 4px auto",
                                sm : "auto 12px 6px auto",
                                md : "auto 16px 12px auto",
                                xl : "auto 22px 12px auto",
                            },
                            cursor : "pointer",

                            "&:hover" :{
                                color : "blue.main"
                            }                         
                        }}
                        >
                            details
                        </Typography> 
                        : 
                        ""
                    }
                </Link>

        </Card>
        }
        </>
    );
}

export default BlogCard;
