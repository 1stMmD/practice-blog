import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { useState } from "react";
const LeftContainer = ({styles , setShowTime}) => {

  const router = useRouter();
  const [show , setShow] = useState(true);

    return (
        <div className={styles}>
      
      <Typography 
      variant="h5"
      sx={{
        color:"black.light",
        fontSize : {
            xs : 12,
            sm : 15,
            md : 16,
            lg : 16,
            xl : 20,
        },
        fontWeight :{
            xs : 600
        },
        ml :{
            xs : 4,
            sm : 6,
            md : 8,
            lg : 10,
            xl : 12 
        },

      }}
      >THIS BLOG IN ONLY FOR PRACTICE</Typography>
      
      <Box
      sx={{
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "flex-start",
        mt : 5,
        ml :{
            xs : 4,
            sm : 6,
            md : 8,
            lg : 10,
            xl : 12 
        }
      }}>

<Typography variant='h3' component="h3" sx={{
          color:"grey.main",
          fontWeight: "500",
          fontSize : {
            xs : 20,
            sm : 25,
            md : 30,
            lg : 35,
            xl : 40
            },

           mt:2
        }}
        >
            Here is The <span style={{color : "#67A6FF" , fontWeight : "600"}}>Latest</span> Posts
        </Typography>
       
        <Typography variant='h3' component="h3" sx={{
          color:"grey.main",
          fontWeight: "500",
          fontSize : {
            xs : 20,
            sm : 25,
            md : 30,
            lg : 35,
            xl : 40
            },

           mt:2
        }}
        >
            For All Posts
        </Typography>
       
        {
        show &&
        <Button 
        variant="outlined"
        size="large"
        sx={{
            p : 0,
            paddingInline : 2,
            color: "blue.main",
            fontWeight : "500",
            fontSize : {
                xs : 15,
                sm : 20 ,
                md : 25 ,
                lg : 30,
                xl : 35,
            },
            borderRadius : 15,
            border : {
                xs : "3px solid #67A6FF",
                md : "4px solid #67A6FF"
            },

            "&:hover" : {
              border:{
                    xs : "3px solid #67A6FF",
                    md : "4px solid #67A6FF"
                },
              bgcolor : "blue.main",
              color : "white.main"
            },

            mt : 2,
          }}
          onClick={() => {
            setShowTime(false);
            setTimeout(() => {
              router.push("/blogs");
            } , 1000)
          }}
          >Click Me</Button>
      
        }

      </Box>

      </div>
    );
}

export default LeftContainer;
