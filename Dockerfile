FROM node:alpine
MAINTAINER Jared Denisov
ARG app_name=shortman_client
WORKDIR /opt/app

RUN apk update
COPY . .
RUN npm install

EXPOSE 3000
CMD ["npm", "run", "dev"]
