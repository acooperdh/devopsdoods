import * as React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'
export default function NavBar() {
	return (
		// need to make the navbar fixed to the top of the page as well as the width of the page
		<Box>
			<Button variant="contained"><Link to="/">Home</Link></Button>
			<Button variant="contained"><Link to="/timeline">Timeline</Link></Button>
			<Button variant="contained"><Link to="/create-blog">Create A Blog</Link></Button>
		</Box>
	);
};