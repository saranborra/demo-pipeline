import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';

export class DemoPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const pipeline = new CodePipeline(this, "Pipeline", {
        pipelineName: "DemoPipeline",
        synth: new ShellStep("Synth", {
            input: CodePipelineSource.gitHub("saranborra/demo-pipeline", "main"),
            installCommands: ['npm i -g npm@latest'],
            commands: ["npm ci", "npm run build", "npm cdk synth"]
        })
    }
    )
  }
}
