import { useState, useEffect } from 'react';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';


export default function BucketList() {
  const [listFiles, setListFiles] = useState([]);

  const client = new S3Client({
	  region: 'us-east-1',
	  credentials: {
		  accessKeyId: process.env.REACT_APP_ACCESS_ID,
		  secretAccessKey: process.env.REACT_APP_ACCESS_KEY
	  }
  });

  const params = {
    Bucket: 'devdoods-new-bucket',
    Delimiter: '',
    Prefix: '',
  };

  const command = new ListObjectsV2Command(params);

  const listObjects = async () => {
    const data = await client.send(command).then(res => {console.log(res)});
    console.log(data);
  }

  return (
    <div className='card'>
      <input type="button" value="List Objects" onClick={listObjects} />
      <div className='card-header'>SampleCompany Files</div>
      <ul className='list-group'>
        {listFiles &&
          listFiles.map((name, index) => (
            <li className='list-group-item' key={index}>
              {name.Key}
            </li>
          ))}
      </ul>
    </div>
  );
};