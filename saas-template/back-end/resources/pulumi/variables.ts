import { Output } from '@pulumi/pulumi';

export const variables = {
  region: 'us-west-1' as const, // <-- change this to your region
  dynamoDBTables: {} as Record<string, Output<string>>,
};
