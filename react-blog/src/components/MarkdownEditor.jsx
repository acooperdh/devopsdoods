import { useContext } from 'react'
import MarkdownContext from '../contexts/markdownContext'
import'../styles/Markdown.css'

export default function MarkdownEditor(props) {
	const { setMarkdownText } = props;

	const onInputChange = e => {
		let newValue = e.target.value
		setMarkdownText( newValue)
	}
	return (
		<div className="editor">
			<h1>Editor</h1>
			<textarea cols={50} rows={20} className="textzone" onChange={onInputChange} /> 
		</div>

	)
}