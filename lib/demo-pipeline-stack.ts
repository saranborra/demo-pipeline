import {Stack,StackProps} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { DemoPipelineAppStage } from "./demo-app-stage";

export class DemoPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, "Pipeline", {

        pipelineName: "DemoPipeline",
        crossAccountKeys: true, //multi-account deployment
        synth: new ShellStep("Synth", {
            input: CodePipelineSource.gitHub("saranborra/demo-pipeline", "main"),
            installCommands: ['npm i -g npm@latest'],
            commands: ["npm ci", "npm run build", "npx cdk synth"],
        }),
    });

    pipeline.addStage(
        new DemoPipelineAppStage(this, "test",{
            env:{account:"096721594425", region: "us-east-2"},
        })
    );
    }
}
