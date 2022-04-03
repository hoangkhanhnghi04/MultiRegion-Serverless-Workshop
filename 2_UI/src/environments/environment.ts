export const environment = {

  production: true,

  // TODO: make sure you have the correct region
  region: 'us-west-1',


  // TODO: This id can be retrieved in output section of the cognito ui
  // cloud formation stack.
  cognitoIdentityPoolId: 'us-west-1:88d13cc6-28ac-479d-94fd-84ab0c21d36e',

  // TODO: Facebook app id can be retrieved from the application in your
  // facebook developer account.
  facebookAppId: '315677187129123',

  // TODO: The API URL is available in the API Gateway console under Stage
  // NOTE: don't forget trailing "/"  For example:
  // https://api.example.com/prod/
  ticketAPI: 'https://api.nghinguyen01sjsu.email/'

};
