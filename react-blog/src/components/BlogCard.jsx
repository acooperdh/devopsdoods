import React from 'react'

import { Badge, Box, Center, Image } from '@chakra-ui/react'

export default function BlogCard({ blog }){
	return (
		<Box maxW='container.md' borderWidth='1px' borderRadius='lg'>
			<Center> 
				<Image boxSize='300px' src={blog.image} alt={"words"} objectFit='cover'/>
			</Center>

			<Box p='6'> 
				<Box display='flex' alignItems='baseline'>
					<Badge borderRadius='full' px='2' colorScheme='teal'>
						New
					</Badge>
				</Box> 
			</Box> 

			<Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
				{blog.title}
			</Box>

			<Box p='2'>
				Author: {blog.author} <br/>
				Data Published: {blog.published_at}
			</Box>
		</Box>
	);
}