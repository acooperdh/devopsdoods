import React from 'react';
import BlogCard from './BlogCard';
import { Grid } from '@mui/material';
import styles from '../styles/Timeline.css'
import NavBar from './NavBar';
import faker from '@faker-js/faker'
function getBlogs(){
  let temp = []
  for(let i = 0; i < 12; i++){
    let blog = {
      'blog_id': i,
      'title': faker.lorem.sentence(),
      'content': faker.lorem.paragraph(),
      'user_id': 1,
      'author': faker.name.firstName(),
      'email': faker.internet.email(),
      'created_at': faker.date.recent(),
      'published_at': '2002-02-02',
      'image': faker.image.imageUrl(),
      'likes': faker.datatype.number(),
    }
    temp.push(blog)
  }
  return temp;
}

export default function Timeline(){
	return (
		<div >
			<NavBar />
			<h1>Timeline</h1>
			<Grid container rowSpacing={1} spacing={1} columns={4}>
				{getBlogs().map(blog => {
					return <Grid item xs={1}><BlogCard key={blog.blog_id} blog={blog} /></Grid>
				})}
			</Grid>
		</div>
	)
}