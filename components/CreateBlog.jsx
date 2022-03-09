import React, { useState } from 'react';

// Components 
import NavBar from './NavBar';
import MarkdownInput from './MarkdownInput';
import MarkdownPreview from './MarkdownPreview';
import { Button, Center } from '@chakra-ui/react';
import styles from '../styles/CreateBlog.module.css';

import MarkdownContext from '../contexts/markdownContext';


export default function CreateBlog() {
	const [markdownText, setMarkdownText] = useState('');

	const markdownContextValue = {
		markdownText,
		setMarkdownText,
	};


	return (
		<div className={styles.container}>
			<NavBar />
			<div className={styles.title}>
				Create New Blog
			</div>
			<MarkdownContext.Provider value={markdownContextValue}>	
				<Center>
				<div className={styles.editorContainer}>
					<MarkdownInput />
				</div>
				<MarkdownPreview />
				</Center>

				<Button> Submit </Button>
			</MarkdownContext.Provider>
		</div>
	)
}

