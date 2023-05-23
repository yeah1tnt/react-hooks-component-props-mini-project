import React from 'react';
import Article from './Article';


function ArticleList({posts}){
    const temp = posts.map(function(e){
        return (<Article key={e.id} title={e.title} date={e.date} preview={e.preview}/>)
    })
    return (
        <main className='ArticleList'>{temp}</main>
    )
}


export default ArticleList;