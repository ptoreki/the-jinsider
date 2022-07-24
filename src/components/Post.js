import React from 'react';
import { marked } from 'marked';

const Post = ({ article }) => {
    console.log(article)
    const {blogPostTitle, publicationDate, headerImage, blogText} = article.fields
    const postBlogText = marked(blogText)
    return (
        <div className="post" >
            <h2 className="title">{blogPostTitle}</h2>
            {headerImage && <img className='headerImage' src={headerImage.fields.file.url} alt={blogPostTitle} title={blogPostTitle}/>}
            <section dangerouslySetInnerHTML={{ __html: postBlogText}} />
        </div>
    )
}

export default Post
