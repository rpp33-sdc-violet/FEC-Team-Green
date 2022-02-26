// connect to AWS and S3 bucket
const aws = require('aws-sdk');
const dotenv = require('dotenv');
const crypto = require('crypto');
const { promisify } = require('util');

const randomBytes = promisify(crypto.randomBytes);
dotenv.config();

const region = 'us-east-1';
const bucketName = 'v2-fec-team-green-photo-bucket';
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
});

const generateUploadURL = () => { 
  return randomBytes(16)
    .then((response) => {
      const imageName = response.toString('hex');
      
      const params = ({
        Bucket: bucketName,
        Key: imageName,
        Expires: 60
      });

      return s3.getSignedUrlPromise('putObject', params)
        .then((response) => {
          console.log('RESPONSE IN GENERAL UPLOAD URL', response);
          return response;
        })
        .catch((error) => {
          console.log('ERROR! IN GENERAL UPLOAD URL', error);
        });
    });
};

module.exports = generateUploadURL;