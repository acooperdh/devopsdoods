import * as React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import '../App.css'
export default function NavBar() {
	return (
		// need to make the navbar fixed to the top of the page as well as the width of the page
		<div className={'navbar'}>
			<Box component="span" sx={{display: 'flex', justifyContent: 'space-around'}}>
				<Button variant="contained" sx={{margin: 1}}><Link to="/">Home</Link></Button>
				<Button variant="contained" sx={{margin: 1}}><Link to="/timeline">Timeline</Link></Button>
				<Button variant="contained" sx={{margin: 1}}><Link to="/create-blog">Create A Blog</Link></Button>
			</Box>
		</div>
	);
};