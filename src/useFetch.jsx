import { useEffect , useState } from "react"

const useFetch = (url) =>{
    const [data , setData ] = useState(null)
    const [error , setError ] = useState(true)
    const [loading , setLoading ] = useState(true)
    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw Error("there is something wroing with api stuff")
            }else{
                return res.json()
            }
        })
        .then((data)=>{
            setError(false)
            setLoading(false)
            setData(data)
        })
        .catch((err)=>{
            setLoading(false)
            setError(error)
        })
    },[url])
    return {data , error , loading}
}
export default useFetch