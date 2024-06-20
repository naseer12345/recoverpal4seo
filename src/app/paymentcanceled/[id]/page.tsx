'use client'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
// fist, check if its in the database, if its it then it means that task has already been completed, if its not then add it database of do the task.


export default function PaymentSuccess({params} : {
    params: {id: any}
}){
    const router = useRouter()





    return(<div className="bg-black w-full flex items-center flex-col gap-10 justify-center h-screen">


    <h1 className="text-white text-2xl font-bold">Payment canceled for order {params.id} 😞😞😞 </h1>
    <Button variant={'outline'} onClick={()=>{router.push('/map')}} className="text-xl">Home</Button>


    </div>)
}