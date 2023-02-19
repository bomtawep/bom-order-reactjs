FROM node:16-alpine 
WORKDIR /usr/src/app
COPY . .
RUN yarn install
RUN yarn global add react-scripts

EXPOSE 8081
CMD ["yarn", "start"]