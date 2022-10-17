const cdk = require('aws-cdk-lib');
const s3 = require('aws-cdk-lib/aws-s3');

class S3Stack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    new s3.Bucket(this, 'MyFirstBucket', {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true
    });
  }
}

module.exports = { S3Stack }