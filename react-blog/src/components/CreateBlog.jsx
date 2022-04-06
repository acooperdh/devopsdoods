// required for this component 
// ability to upload photo 
// ability to create a blog 
// ability to view a preview of the blog
import { useState } from 'react';
import { Button, Container } from "@mui/material";
import MarkdownEditor from "./MarkdownEditor";
import MarkdownPreview from "./MarkdownPreview";
import NavBar from "./NavBar";
import PhotoUpload from "./PhotoUpload";
import MarkdownContext from '../contexts/markdownContext';

export default function CreateBlog(props){
	const [markdownText, setMarkdownText] = useState('');
	return (
		<Container>
			<NavBar />
			<h1>Create a blog!</h1>
			
				<div className="editorContainer">
					<MarkdownEditor setMarkdownText={setMarkdownText}/>
					<MarkdownPreview markdownText={markdownText}/>
				</div>
				<Button onClick={() => console.log("preview!")}variant="contained">Preview</Button>
				{/* on this button click, the blog should be uploaded to the s3 bucket along with the thumbnail photo */}
				<Button onClick={() => console.log(markdownText)}variant="contained">Publish</Button>
				<Button component="label" variant="contained"><PhotoUpload /></Button>
				<PhotoUpload />
				<Button onClick={() => console.log("upload photo!")}variant="contained">Attach Photo</Button>
		</Container>
	)
}