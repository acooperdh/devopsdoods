import base64
import boto3


s3 = boto3.client('s3')


def lambda_handler(event, context):
    bucket_name = event["pathParameters"]["bucket"]
    file_name = event["queryStringParameters"]["file"]
    url_of_object = s3.generate_presigned_url(
        "get_object", Params={"Bucket": bucket_name, "Key": file_name}, ExpiresIn=50000)
    # print
    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/jpg",
            "Content-Disposition": "attachment; filename={}".format(file_name)
        },
        "body": url_of_object,
        "isBase64Encoded": True
    }
