import Link from "next/link"

type Props={
    results:Product[]
}

function Results({results}:Props) {
  return (
    <div className='grid lg: grod-cols-2 xl: grid-cols-3 gap-5 w-full'>
        {results.map((result)=>(
            <Link
            href={result.url}
            key={result.title}
            className='flex flex-col space-x-4 w-full bg-white
            rounded-lg shadow-md p-5'
            >
                <img srcSet={result.imageset}
                alt={result.title}
                className='object-contain w-full h-40 py-5'
                />
                <div className="flex-1 flex flex-col py-5">
                    <p className='font-bold'>{result.title}</p>
                    <p className='text-sm text-gray-500'>
                        {result.rating} ({result.reviews} reviews)
                    </p>

                    <div className="flex justify-end flex-1 spacec-x-2">
                        <p className="font-bold text-indigo-500 
                        pt-2 text-xl mt-auto">
                            {result.price > 0 ? `$${result.price}`:'N/A'}
                        </p>

                        {result.previous_price >0 &&(
                            <p className="font-bold text-indigo-500/50 line-through 
                            pt-2 text-xl mt-auto">
                                ${result.previous_price}
                            </p>
                        )}
                    </div>

                    <div className=" flex flex-wrap justify-end gap-2 mt-5" >
                        {result.features.map((feature)=>(
                            feature && (
                                <p className="text-xs bg-indigo-500 px-2 py-1
                                text-white rounded-md">
                                    {feature}
                                </p>
                            )
                        ))}
                    </div>
                </div>
            </Link>
        ))}
    </div>
  )
}

export default Results