import React, { useState } from 'react';

// Components 
import NavBar from './NavBar';
import MarkdownInput from './MarkdownInput';
import MarkdownPreview from './MarkdownPreview';
import { Box, Button, Center, Grid, GridItem } from '@chakra-ui/react';
import styles from '../styles/CreateBlog.module.css';

import MarkdownContext from '../contexts/markdownContext';

export default function CreateBlog() {
	const [markdownText, setMarkdownText] = useState('');

	const markdownContextValue = {
		markdownText,
		setMarkdownText,
	};


	return (
		// <div className={styles.container}>
		<div className={styles.container2}>
			<div className={styles.navbar}>
				<NavBar />
			</div>
			<div className={styles.title}>
				Create New Blog
			</div>
			<MarkdownContext.Provider value={markdownContextValue}>	
				<Grid
				h='100%'
				w='100%'
				templateRows='repeat(2, 1fr)'
				templateColumns='repeat(5, 1fr)'
				gap={4}
				>
					<GridItem
						colSpan={5}
						rowSpan={1}
						>
						<MarkdownInput />
					</GridItem>
					<GridItem
						colSpan={5}
						rowSpan={1}
					>
						<MarkdownPreview />
					</GridItem>
					<GridItem>
						<Button>Submit</Button>
					</GridItem>
				</Grid>
			</MarkdownContext.Provider>
		</div>
	)
}

