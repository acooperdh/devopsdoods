import { Stack, Box, Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons';
import NextLink from 'next/link'
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
				<NextLink href='/timeline'>
					<Button>Timeline</Button> 
				</NextLink>
				<NextLink href='/create-blog'>
					<Button colorScheme='green' rightIcon={<AddIcon />}>Create Blog</Button>
				</NextLink>
				<Button>Profile</Button>
				<Button colorScheme='red'>Logout</Button>
			</Stack>
		</Box> 
	);
}