import React, { useState }from 'react' 
import NewsBody from './NewsBody';
const NewsItem = ({title, description, src, url}) => {
    
    return (
        <div style={{width: "345px"}} className='inline-block mx-3 my-3 px-2 py-2 sm:text-center'>
        <div className="flex flex-col bg-grey-200 border shadow-sm rounded-xl dark:bg-gray-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <img style= {{height: "200px"}}className="w-full h-auto rounded-t-xl" src={src ? src : "https://media.istockphoto.com/id/1409309637/vector/breaking-news-label-banner-isolated-vector-design.jpg?s=612x612&w=0&k=20&c=JoQHezk8t4hw8xXR1_DtTeWELoUzroAevPHo0Lth2Ow="} alt="Image Description" />
            <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {title.slice(0,50)}
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-400">
                    {description?description.slice(0,90): "To know more about this news click on read more button"}
                </p>
                <a className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href={url}>   
                    Read more... 
                </a>
            </div>
        </div>
        </div>
    )
}

export default NewsItem