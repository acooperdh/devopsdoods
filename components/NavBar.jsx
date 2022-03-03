import { Stack, Box, Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons';

// NavBar needs 
/* 
- timeline button
- create a blog 
- profile (?)
*/ 
export default function NavBar() {
	return (
		<Box p='2' display='flex'>
			<Stack direction='row' spacing={4}>
				<Button>Timeline</Button> 
				<Button colorScheme='green' rightIcon={<AddIcon />}>Create Blog</Button>
				<Button>Profile</Button>
				<Button colorScheme='red'>Logout</Button>
			</Stack>
		</Box> 
	);
}