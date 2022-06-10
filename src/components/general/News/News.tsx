import React, {useEffect, useState} from 'react'
import ListItem from "../../common/ListItem"


const News = () => {

    const [dataNews, setDataNews] = useState([])

    const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=54";

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setDataNews(data))
    }, [])


    return (
        <>
            <div className="news">
                <div className="news__wrap">
                    <div className="news__list">
                        <ListItem data={dataNews}/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default News;