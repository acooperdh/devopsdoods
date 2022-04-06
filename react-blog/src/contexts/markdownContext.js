import React from 'react'

const MarkdownContext = React.createContext({
	markdownText: '',
	setMarkdownText: () => {},
});

// const MarkdownProvider = ({ childern }) => {
// 	const [markdownText, setMarkdownText] = React.useState('');

// 	const updateMarkdown = (newMarkdown) => {
// 		setMarkdownText(newMarkdown);
// 	}

// 	return (
// 		<MarkdownContext.Provider value={{ markdownText, updateMarkdown }}>
// 			{childern}
// 		</MarkdownContext.Provider>
// 	)
// }

// export {MarkdownProvider}
export default MarkdownContext;