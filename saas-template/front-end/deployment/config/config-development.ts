/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = 'https://main.db2w9kmfi5hov.amplifyapp.com';

const configDevelopment = {
  HOSTED_URL,
  MODE: 'DEVELOPMENT',
  REGION: 'eu-west-1',
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  USER_POOL_CLIENT_ID: '5vvpees0j8uab34mgec3lnnbph',
  USER_POOL_ID: 'us-west-1_1pDqTrKJn',
  IDENTITY_POOL_ID: 'us-west-1:6e256c29-8072-4dab-ae74-81601b004160',
  GRAPHQL_ENDPOINT: {
    GRAPHQL : 'https://grl4u7o5jzb5bpenatsi43qjge.appsync-api.us-west-1.amazonaws.com/graphql',
    REALTIME: 'wss://grl4u7o5jzb5bpenatsi43qjge.appsync-realtime-api.us-west-1.amazonaws.com/graphql' }
};

export default configDevelopment;
