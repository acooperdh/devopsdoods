import React, {useState}from 'react';

import axios from 'axios';
import { Button } from '@mui/material'
export default function ImageUpload (props) {
	const [file, setFile] = useState('');
	const [uploadSuccess, setUploadSuccess] = useState(false);

	// const uploadImage = async e => {
		// axios("http://localhost:5000/api/upload" + file ).then(res => {
		// 	const url = res.data.url;
			
		// })
	// }

	return (
		<>
			{/* <Button onClick={handleClick} variant="contained">Upload Thumbnail</Button> */}
		</>
	)
}