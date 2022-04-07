import React from 'react';
import BlogCard from './BlogCard';
import { Grid } from '@mui/material';
import '../App.css'
import NavBar from './NavBar';
import faker from '@faker-js/faker'
import axios from 'axios';

import BucketList from './BucketList';

//aws stuff 

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

// async function getS3Objects(){
//   const api = 'https://y1pum0gk05.execute-api.us-east-1.amazonaws.com/v2/devdoods-new-bucket';
//   const data = {'file' : 'myobject.png'};
//   let image = null;
//   await axios.get(api, {params: data}, { headers : { 'Access-Control-Allow-Origin': '*'}})
//   .then(res => {console.log(res); image = res.data}).catch(error => {console.log(error)});
// }

export default function Timeline(){
	return (
		<div className="timeline-container">
      {/* <Button onClick={getS3Objects()} />  */}
			<NavBar />
			<h1>Timeline</h1>
			<Grid container rowSpacing={2} spacing={0.5} columns={3}>
				{getBlogs().map(blog => {
					return <Grid item xs={1}><BlogCard key={blog.blog_id} blog={blog} /></Grid>
				})}
			</Grid>
      <BucketList />
		</div>
	)
}