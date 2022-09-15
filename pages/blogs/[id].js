import useFetch from "../../hooks/useFetch";
import BlogContainer from "../../components/BlogContainer";
import PageChanging from "../../components/PageChanging";
import Box from "@mui/material/Box";
import Typography  from "@mui/material/Typography";

export async function getStaticPaths(){
    let req = await fetch("https://jsonplaceholder.typicode.com/posts");
    let retData = await req.json();
    let paths = [];
    retData.forEach((blog) => {
        paths.push({params : {id : `${blog.id}` }})
    })
    return{
        paths,
        fallback : false
    }
}

export async function getStaticProps(context){

    let id = context.params.id;

    return{
        props : {
            id
        }
    }
}


const Id = ({id}) => {

    const {data:blog , isPending , isError} = useFetch("https://jsonplaceholder.typicode.com/posts/" + id);

    return (
        <div>

            <PageChanging
            showTime={!isPending}/>

            <BlogContainer
            title={blog.title}
            body={blog.body}/>

{
                isError &&
                <Box
                sx={{
                    position : "absolute",
                    top : "50%",
                    left : "50%",
                    transform : "translateX(-50%) translateY(-50%)",
                    display : "flex",
                    flexDirection : "column",
                    alignItems: "center"
                }}>

                <Typography
                sx={{
                    color :"error.main",
                    fontSize:".8rem",
                    
                }}>
                    SOMETHING WENT WRONG
                </Typography>

                <Typography
                sx={{
                    color :"error.main",
                    fontSize:"2rem",
                }}>
                    {isError.toUpperCase()}
                </Typography>

                </Box>
            }  

        </div>
    );
}

export default Id;
