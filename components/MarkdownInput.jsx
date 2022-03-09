import React, { useState, useContext } from 'react';
import { Box, Heading, Textarea } from '@chakra-ui/react';
import styles from '../styles/CreateBlog.module.css';
import MarkdownContext from '../contexts/markdownContext';

export default function MarkdownInput() {
	const { setMarkdownText } = useContext(MarkdownContext);

	const handleInputChange = (e) => {
		let input = e.target.value;
		setMarkdownText(input);
	}
	return (
		<Box>
			<Heading size="lg"> Markdown Input </Heading>
			<Textarea onChange={handleInputChange} size="xl" />
		</Box> 
	)
}
