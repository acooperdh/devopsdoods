import boto3

sns = boto3.client('sns')


def lambda_handler(event, context):

    snsArn = "arn:aws:sns:us-east-1:845759875982:test-sns-topic"
    if (event["Records"]["status == 'SUCCESS'"]):

        message = "A new photo has been uploaded to S3, check it out here: " + \
            event["Response"]["ObjectURL"]
        subject = "New Photo Uploaded"
    else:
        message = "There was an error uploading your photo to S3, please check the lambda logs to determine where the error is."
        subject = "Error Uploading Photo"
    response = sns.publish(
        TopicArn=snsArn,
        Message=message,
        Subject=subject
    )
    return response
