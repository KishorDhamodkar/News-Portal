import React from'react'

const Pagination= ({postsPerPage, totalPosts , paginate}) => {
    const pageNumber = []
    for (let i =1; i<= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumber.push(i)
    }
    return (
        <>
        <div className="flex py-5 flex-row justify-center items-center">
            {pageNumber.map(number=>(
                <a onClick={()=> paginate(number)} href="#" key={number} className="flex mx-2 items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                {number}
            </a>
            ))}
        </div>
        </>
    )
}

export default Pagination 