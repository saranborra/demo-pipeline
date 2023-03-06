install all the prerequisites

1. AWS cnfigure and configure all the accounts
2. set CDK_NEW_BOOTSTRAP=1
3. npx cdk bootstrap --profile toolchain --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess aws://096721594425/us-east-1
4. npx cdk bootstrap --profile test --trust 096721594425 --cloudformation-execution-policies 'arn:aws:iam::aws:policy/AdministratorAccess' aws://096721594425/us-east-2
5. generate github token and add it to secret manager in AWS
6. create a github repo
7. To use typescript as the required language we follow the command "cdk init app --language typescript" which will create a folder structure
8. push everything to git repo that is created above using
	#git status
	#git branch -m main
	#git remote add origin "branch name"
	#git remote -v
	#git defender --setup
	#git add .
	#git commit -m "initial commit"
	#git push -u origin main
9. Change the lib file and bin file accordingly to add pipeline creation
10. after changes push it to git again
	#git add .
	#vi .gitallowed(input some git -----check what this does)
	#git add .
	#git commit -m "define initial pipeline"
	#git push
	
11. Now deploy your code using "cdk deploy --profile toolchain"
12. create a demo-lambda.ts in lib folder
13. create a lambda in project and create index.js which contains some java script code(basically your application)
14. create another file in lib demo-app-stage.ts for creating a stage
15. add these stage details to demo-pipeline-stack.ts
16. add and push to git and this shoulld automatically wake your pipeline and it should create your required application
17. If you want to deply the same o any other account then bootstrap your account with toolchain as step 3
18. Add a new stage in demo-pipeline-stack.ts and then push the files to your repo which should trigger your pipeline that deploys everything into new account.
