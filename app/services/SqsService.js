import AWS from 'aws-sdk/dist/aws-sdk-react-native';
import AWSConfig from '../config/aws.config';
/**
 * AWS Simple Query Service wrapper
 */

AWS.config.update({
  region: AWSConfig.sqs.region,
  credentials: new AWS.Credentials(
    AWSConfig.sqs.access_key_id,
    AWSConfig.sqs.secret_access_key,
  ),
});
const sqs = new AWS.SQS();

export default class SqsService {
  static sendShellRequest(param: Object) {
    console.log(param);
    console.log(sqs);
    const messageBody = JSON.stringify({
      FromUserId: param.from,
      ToUserIds: [param.to],
      ShellCommand: param.command,
      Message: null,
      Lambda: null,
    });
    sqs.sendMessage(
      {
        QueueUrl: AWSConfig.sqs.queueUrl,
        MessageBody: messageBody,
      },
      (err, data) => {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('Success', data);
        }
      },
    );
  }
}
