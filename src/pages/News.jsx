import React, { useState , useEffect} from "react";


const News = () => {
    
 const [news,setNews] = useState([])
 const [query, setQuery] = useState(['nepal'])

const getNews =  async() =>{   // async await should comes together 
    const myNews = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2026-10-23&sortBy=publishedAt&apiKey=540315e2f53846da9de12649182ab11f`)
    const finalResponse = await  myNews.json()   // mynews.json maa value hunxw, yo pani aaunw time lagxw so await use garne 
    console.log(finalResponse)
    setNews(finalResponse.articles)
  }
  useEffect(()=>{
    getNews()
  },[])
  console.log(news)

  return (
    <>
      <div>News</div>
      
      {/* Search Section */}
      <div className="max-w-2xl mx-auto flex gap-3 bg-white p-3 rounded-2xl shadow-md mb-12">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for news..."
          className="flex-1 min-w-0 px-4 py-3 outline-none text-slate-700"
        />

        <button
          onClick={getNews}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300">
          Search
        </button>
      </div>    

    {news.slice(0, 8).map((item, index) => (
        <div
        key={item.url || index}
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 flex justify-center gap-4"
        >
        <img
        src={item.urlToImage}
        alt=""
        className=" h-48 object-cover rounded"
        />

        <div className="p-5">
        <h2 className="text-lg font-bold text-gray-800 line-clamp-3">
            {item.title}
        </h2>

        <p className="text-sm text-gray-500 mt-3 line-clamp-3">
            {item.description}
        </p>

        <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 font-semibold hover:text-blue-800"
        >
            Read More →
        </a>
        </div>
    </div>
    ))}
        </>
    )
    };

export default News;
