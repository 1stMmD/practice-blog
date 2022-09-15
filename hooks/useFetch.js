import {useEffect , useState} from "react";
export default function useFetch(link , id){
    const [data , setData] = useState([]);
    const [isPending , setIsPending] = useState(true);
    const [isError , setIsError] = useState(null)



    useEffect( ()  => { 
        const abort = new AbortController()

        fetch(link , {signal : abort.signal})
        .then( (res) =>{
            return res.json();
        })
        .then((res) => {
            setData(res);
            setIsPending(false);
        })
        .catch((err) => {
            if(err.name === "AbortError") return;
            console.log("Error is :" + err.name);
            setIsPending(false);
            setIsError(err.name)
        });

        return () => abort.abort()
    },[link , id])

    return {data , isPending , isError} 

}
