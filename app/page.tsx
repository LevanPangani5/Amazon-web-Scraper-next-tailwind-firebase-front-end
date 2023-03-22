import {DocumentMagnifyingGlassIcon} from '@heroicons/react/24/outline'

function page() {
  return (
   
      <div className='flex flex-col items-center justify-center'>
        <DocumentMagnifyingGlassIcon className='h-64 w-64 text-indigo-600/20'/>
       
        <h1 className='text-3xl mt-2 mb-5 text-black font-bold text-center'>
          Wellcome to the Amazon Web Scraper
        </h1>

        <h2 className='text-lg italic text-center text-black/50'>
         If you want to scrape amazon data feel free to use this 
          application for free
        </h2>
      </div>

  )
}

export default page
