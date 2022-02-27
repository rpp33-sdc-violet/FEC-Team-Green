// use dotenv to access .env contents
require('dotenv').config({path: './server/.env'});
const fs = require('fs'); 
const S3 = require('aws-sdk/clients/s3');

const region = process.env.AWS_BUCKET_REGION;
const bucketName = process.env.AWS_BUCKET_NAME;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
});

const uploadFileToS3 = (file, callback) => {
  // get the contents of the file
  console.log('file here', file);
  const fileStream = fs.createReadStream(file.path);

  const params = ({
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename 
  });

  s3.upload(params).promise()
    .then((response) => {
      // response.Location = S3 BUCKET URL
      callback(null, response.Location); 
    })
    .catch((error) => {
      callback(error);
    });
};

module.exports = uploadFileToS3;