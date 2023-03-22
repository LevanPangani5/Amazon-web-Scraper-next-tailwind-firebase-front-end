'use clinet'
import { doc } from 'firebase/firestore'
import {useDocument} from 'react-firebase-hooks/firestore'
import {db} from '../../../firebase'
import Results from '../../../components/Results'

type Props={
    params:{
        id:string
    }
}

function SearchPage({params:{id}}:Props) {
    const [snapshot, loading, error] =useDocument(doc(db,'searches',id))
    if(loading)return(
 <h1 className='text-center p-10 animate-pulstext-xl text-indigo-600/50'>
    Loading Results...
 </h1>
)

if(!snapshot?.exists())return

if(snapshot?.data()?.status === 'pending'){
    <div className='flex felx-col gap-y-5 
    py-10 items-center justify-center'>
      <p className='text-indigo-600 animate-pulse text-center'>
        Scraping results from Amazon ...
      </p>
    </div>
}

    return (
    <div className='p-y-5'>
      <div className='flex items-center justify-center mb-7'>
        <div className='flex flex-col md:flex-row gapx-4'>
            <h1 className='font-bold'>
              Search Results for{'  '}
              <span className='text-indigo-600'>'{snapshot.data()?.search}'
              </span>
            </h1>
            <p className='text-gray-300'>
              {snapshot.data()?.length >0 &&
              `${snapshot.data()?.results?.length} results found`}
            </p>
        </div>
      </div>

       {snapshot.data()?.reslults?.length > 0 && (
        <Results results ={snapshot.data()?.results}/>
       )}
    </div>
  )
}

export default SearchPage