import React from 'react';
import { Badge, Box, Image } from '@chakra-ui/react'
// Info displayed on Blog Card 
/* 
- title 
- picture (if any)
- author 
- date published


*/ 
const blogData = {
	"title": 'Modern home in city center in the heart of historic Los Angeles',
	"image": "https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?fit=bounds&format=jpg&width=960",
	"author": "Drew Cooper",
	"date": null
};


export default function BlogCard(){
	return (
		<Box maxW='sm' borderWidth='1px' borderRadius='lg'>
			<Image boxSize='250px' src={blogData.image} alt={"words"} />

			<Box p='6'> 
				<Box display='flex' alignItems='baseline'>
					<Badge borderRadius='full' px='2' colorScheme='teal'>
						New
					</Badge>
				</Box> 
			</Box> 

			<Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
				{blogData.title}
			</Box>

			<Box p='2'>

				Author: {blogData.author} <br/>
				Data Published: {blogData.author}
			</Box>
		</Box>
	);
}