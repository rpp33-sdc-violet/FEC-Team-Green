// connect to AWS and S3 bucket
const aws = require('aws-sdk');
const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } = require('./s3keys.js');

const region = 'us-east-1';
const bucketName = 'v2-fec-team-green-photo-bucket';
const accessKeyId = AWS_ACCESS_KEY_ID;
const secretAccessKey = AWS_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
});

const generateUploadURL = (photoFile, callback) => {
  
  const params = ({
    Bucket: bucketName,
    Key: photoFile.originalname,
    Body: photoFile.path,
    // content-type
  });

  s3.upload(params).promise()
    .then((response) => {
      console.log('UPLOAD RESPONSE', response);
      callback(null, response.Location);
    })
    .catch((error) => {
      console.log('UPLOAD ERROR', error);
      callback(error);
    });
};

module.exports = generateUploadURL;