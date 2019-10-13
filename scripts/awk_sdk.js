const AWS = require('aws-sdk')

const s3 = new AWS.S3()
const listObjectParams = {
  Bucket: 'amiry-dev',
}
s3.listObjectsV2(listObjectParams, function(error, data) {
  if (error) console.log(error, error.stack)
  else console.log(data)
})

const listBucketsparams = {}
s3.listBuckets(listBucketsparams, function(error, data) {
  if (error) console.log(error, error.stack)
  else console.log(data)
})
