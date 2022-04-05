import React, { useState } from 'react';
import { Container, Heading, SimpleGrid, Box } from '@chakra-ui/react';
import BlogCard from './BlogCard';
import NavBar from './NavBar'
import styles from '../styles/Timeline.module.css'
export default function Timeline({ blogs, user}){
	
	const blogCards = blogs.map(blog => {
		return <BlogCard key={blog.blog_id} blog={blog} />
	});
	return (
		<div className={styles.container}>
			<div className={"fart"}> 
				<NavBar />
			</div>
			<Heading size="xl"> {user.username}&apos;s timeline </Heading>
			<SimpleGrid columns={3} spacing={10}>
				{blogCards}
			</SimpleGrid>
		</div>
	)
}
