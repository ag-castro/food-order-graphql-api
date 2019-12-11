FROM node:13-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm i 
RUN npm i -g @angular/cli
RUN npm cache clean --force

EXPOSE 4200/tcp

COPY . .