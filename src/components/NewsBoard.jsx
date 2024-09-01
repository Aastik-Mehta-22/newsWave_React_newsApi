import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

function NewsBoard({category}) {

    const [articles,setArticles] = useState([]);

    useEffect(() => {
        // let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${import.meta.env.VITE_API_KEY}`;
        // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;

        let url = `https://api.mediastack.com/v1/news?access_key=${import.meta.env.VITE_API_KEY}&categories=${category}&countries=us,gb,de`
        fetch(url)
        .then(response => response.json())
        .then(data => setArticles(data.data))
    },[category])

    if (articles.length === 0) {
            
        return (

        <div>
         <h2 className='text-center m-1'>Latest <span className='badge bg-danger'>News</span></h2>
        <div className="d-flex justify-content-center  mt-3" style={{ height: '100vh' }}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        </div>
        
        )
   
    }

  return (

    <div>

        <h2 className='text-center m-1'>Latest <span className='badge bg-danger'>News</span></h2>

        <div>
    

                {articles.map((news, index) => {
                    // Only render NewsItem if news.image is not null
                    if (news.image) {
                        return (
                            <NewsItem 
                                key={index} 
                                title={news.title} 
                                description={news.description} 
                                src={news.image} 
                                url={news.url} 
                            />
                        );
                    }
                    return null; // Return null if news.image is null, meaning nothing is rendered
                })}
            </div>
    </div>
  )
}

export default NewsBoard