import React from 'react'

import BlogCard from './BlogCard'


export default function BlogCardList({blogs}){
	const blogCards = blogs.map(blog => {
		return <BlogCard key={blog.blog_id} blog={blog} />
	});
	
	return blogCards
}
