console.log('Loading function');

exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: 'Hello from Lambda'
  });
};