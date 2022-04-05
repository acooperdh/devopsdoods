import { S3 } from 'aws-sdk';
// https://medium.com/@KanishkSrivastava/upload-files-to-s3-using-lambda-and-api-gateway-severless-bb8d8cdc30e4
const s3 = new S3({signatureVersion: 'v4'});
export async function handler(event,context) {
  const bucket = process.env.BUCKET_NAME;
  const key = event.key;
  const params = {
    Bucket: bucket,
    Key: key,
    ContentType: 'multipart/form-data',
    Expires: 60
  };
  try{
    const signedURL = await s3.getSignedUrl('putObject', params);
    const response = {
        err:{},
        body:"url send",
        url:signedURL
    };
    return response;
  }catch(e){
        const response = {
        err:e.message,
        body:"error occured"
    };
      return response;
  }
}