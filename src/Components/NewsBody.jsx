import React , { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Pagination from './Pagination'
const NewsBody = ({category}) => {
    const[articles, setArticles] = useState([])
    useEffect(()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url).then(response => response.json()).then(data=>setArticles(data.articles))
    },[category])
    let [currentPage, setCurrentPage]  = useState([1])
    const [postsPerPage] = useState([8])

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = articles.slice (indexOfFirstPost,indexOfLastPost)

    const paginate = pageNumber => setCurrentPage(pageNumber)
    return (
        <>
          {currentPosts.map((news,index)=>{
            return <NewsItem key= {index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
          })}
          <Pagination postsPerPage={postsPerPage} totalPosts={articles.length} paginate={paginate}/>
        </>
    )
}

export default NewsBody