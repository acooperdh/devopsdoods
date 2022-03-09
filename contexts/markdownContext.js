import React from 'react';

const MarkdownContext = React.createContext({
	  markdown: '',
	  setMarkdown: () => {},
});

export default MarkdownContext; 