FROM node:16-alpine 
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "tsconfig.json", "./"]
COPY ./public ./public
COPY ./src ./src
RUN yarn install
RUN yarn global add react-scripts

EXPOSE 8081
CMD ["yarn", "start"]