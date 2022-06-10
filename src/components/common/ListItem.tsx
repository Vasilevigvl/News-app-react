import React from 'react'


const ListItem = ({ data }: any ): any => {

    return (
        <>
            {data.map((news: any) => {
                return (
                    <div className="news__item">
                        <div className="news__user">
                            <div className="news__user-name">{news.userId}</div>
                        </div>

                        <div className="news__info">
                            <div className="news__id">Номер новости {news.id}</div>

                            <div className="news__title">Заголовок {news.title}</div>

                            <div className="news__text">{news.body}</div>
                        </div>

                    </div>
                )
            })}
        </>
    )
}

export default ListItem