var AWS = require('aws-sdk');

var s3 = new AWS.S3();
var listObjectParams = {
  Bucket: 'amiry-dev',
};
s3.listObjectsV2(listObjectParams, function(error, data){
  if (error) console.log(error, error.stack);
  else       console.log(data);
});

var listBucketsparams = {};
s3.listBuckets(listBucketsparams, function(error, data) {
  if (err) console.log(error, error.stack);
  else     console.log(data);
});
