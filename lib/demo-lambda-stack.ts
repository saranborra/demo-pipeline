import {Stack, StackProps} from "aws-cdk-lib";
import { Construct } from "constructs";
import { Function, Code, Runtine } from "aws-cdk-lib/aws-lambda";
import { LambdaRestApi } from "aws-cdk-lib/aus-apigateway";

export class DemoLambda Stack extends Stack{
	constructor(scope: Construct, id: string, props?: StackPraps) {
		Super(scope, id, props);

		const index = neu Function (this, "LambdaFunction", {
			runtime: Runtime.NODEJS_14_X,
			code: Code. fromAsset("lambda"),
			handler: "index.handler",
			environment:{
				acctid: Stack.of(this).account,
				region: Stack.of(this).region,
				},
		});

		const api = new LambdaRestApi(this, "DemoApiGwEndpoint",{
			handler: index,
			});
	}
}