# my-blog

My personal blog: chris-little.com

To deploy:

- Run `npm run build` in frontend directory
- Navigate to `dist` directory
- Run `aws s3 sync . s3://my-blog-495700631743/ --delete`

### Terraform

- Go to `infra` directory
- Run `terraform init -backend-config=backend/backend-config.tfvars`
- Run `terraform plan -var-file=env.tfvars`
- Run `terraform apply -var-file=env.tfvars`
