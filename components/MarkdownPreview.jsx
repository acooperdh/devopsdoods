/* eslint-disable react/no-children-prop */
import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { Box, Center, Heading } from '@chakra-ui/react';
import MarkdownContext from '../contexts/markdownContext';
import remarkGfm from 'remark-gfm';

export default function MarkdownPreview() {
	const { markdownText } = useContext(MarkdownContext);
	return (
		<Box>
			<Center>
			<Heading size="lg">Markdown Preview</Heading>
			</Center>
			<ReactMarkdown children={markdownText} remarkPlugins={[remarkGfm]}/>
		</Box>
	);
}
