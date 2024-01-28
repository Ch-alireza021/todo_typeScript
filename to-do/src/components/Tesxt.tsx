import { useQuery } from '@tanstack/react-query'
import api from '../api/api'

const Tesxt =() => {
    const {data}=useQuery({
        queryKey:["user"],
        queryFn:async()=>{
            const data=await api.get("users")
            const res=data.data
            console.log(res);
            return res
        }
    })
    console.log(data);
  return (
    <div>Tesxt</div>
  )
}

export default Tesxt