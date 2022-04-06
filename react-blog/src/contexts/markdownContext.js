import React from 'react'

const MarkdownContext = React.createContext({
	markdownText: '',
	setMarkdownText: () => {},
});

export default MarkdownContext;