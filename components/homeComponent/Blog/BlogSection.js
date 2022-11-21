import React from 'react'

const BlogSection = ({ id, title, date, content, image, points }) => {
    return (
        <div className="detail_blog my-4 lg:my-8">
            <div className="container">
                <div className="w-full max-w-4xl mx-auto">
                    <h2 className='brand-heading mb-4'><span>{title}</span></h2>
                    <img src={image} alt="" className='w-full rounded-3xl mb-6' />
                    <p className='text-secondary mb-3'>{content}</p>
                    {
                        points.map(({ title, content }) => <>
                            <h4 className='text-primary bg-primaryLight text-2xl font-medium mb-4 p-3 rounded-md'>{title}</h4>
                            <p className="text-secondary mb-3">
                                {content}</p></>)
                    }



                </div>
            </div>
        </div>
    )
}

export default BlogSection