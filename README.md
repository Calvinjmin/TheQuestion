# The Question

The purpose of this personal project is to vocalize issues that I want to bring attention to.
Topics addressed on this website stem from dicussions with friends, UVA classes, and etc.

---

## Deployment Method

Using Amazon Web Services - ECR, ECS, Fargate & Docker

`docker build -f Dockerfile thequestion:prod .`

`docker tag thequestion:prod [ECS URI]`

`docker push [ECS URI]`

[Resource](https://towardsdatascience.com/deploying-a-docker-container-with-ecs-and-fargate-7b0cbc9cd608)
