import Link from 'next/link'
import React, { useState } from 'react'
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react'

export default function Login(){


	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});
	const handleInputChange = (e) => setFormData(prevFormData => ({
		...prevFormData,
		[e.target.name]: e.target.value
	}));

	return (
		<div>
			<Link href='/' passHref>
				<button>Home</button>
			</Link>
			<h1> This is the login / signup  page</h1>
			<FormControl>
				<FormLabel htmlFor="email">Email</FormLabel>
				<Input 
					type="email"
					name="email"
					value={formData.email}
					onChange={handleInputChange}
				/>
			</FormControl>
			<FormControl>
				<FormLabel htmlFor="text">Username</FormLabel>
				<Input 
					type="username"
					name="username"
					value={formData.username}
					onChange={handleInputChange}
				/>
			</FormControl>
			<Button onClick={() => console.log(formData)}>Submit</Button>
		</div>
	)
}