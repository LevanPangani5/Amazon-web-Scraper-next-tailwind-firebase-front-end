'use clinet'

import { CheckBadgeIcon } from "@heroicons/react/24/solid"
import { DocumentData } from "firebase/firestore"
import { usePathname, useRouter } from "next/navigation"
import { useEffect ,useState } from "react"
import Spinner from 'react-spinkit'


type Props={
    doc:DocumentData
}

function SidebarRow({doc}:Props) {
    const router = useRouter()
    const pathName = usePathname()
    const [active, setActive] = useState<boolean>(false)
    useEffect(()=>{
   if(!pathName)return
   setActive(pathName.includes(doc.id))
    },[pathName , doc])
  return (
    <li
    onClick={()=>router.push(`/search/${doc.id}`)}
    className={`flex flex-col md:flex-row justify-between 
    p-4 cursor-pointer hover:ng-whit hover:shadow-md 
    rounded-lg gap-2 ${
        active && 'bg-white shadow-md'
    }`}
    >
        
       <div className="flex flex-col justify-center">
         <p className="text-xs md:text-base font-bold">
               {doc.data().search}
          </p>
       </div>
       <span className='-order-2 md:order-1'>
        {doc.data().status === 'pending' ? (
            <Spinner name='cube-grid' fadeIn="none" color="indigo"/>    
        ):(
            <CheckBadgeIcon className='h-6 w-6 text-green-500'/>
        )} 
       </span>
    </li>
  )
}

export default SidebarRow