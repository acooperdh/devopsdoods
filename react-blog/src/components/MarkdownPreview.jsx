import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import '../styles/Markdown.css'

export default function MarkdownPreview(props) {
	const { markdownText } = props;

	return (
		<div className="previewArea">
			<ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownText}</ReactMarkdown>
		</div>
		
	)
}