import React from 'react';

import {Box, Button, Card, CardContent, CardActions, CardMedia} from '@mui/material'
const blog = {
	'title': 'React Blog',
	'user': 'Fart Person',
	'content': 'This is a blog about React',
	'image': 'https://source.unsplash.com/random/400x200'
}
export default function BlogCard({blog}) {
	return (
			<Card variant="outlined">
				<CardMedia
					component="img"
					alt="Blog image"
					height="140"
					image='https://source.unsplash.com/random/400x200'
					title="Blog image"
				/>
				<CardContent>
					<h3>test title</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequatur obcaecati doloribus, illo possimus explicabo beatae libero voluptatibus numquam, at, esse vel eligendi vitae fugiat labore tempore tenetur recusandae et.</p>
				</CardContent>
				<CardActions sx={{justifyContent: 'flex-end'}}>
					<Button variant="contained">Read More</Button>
				</CardActions>
			</Card>
	)
}