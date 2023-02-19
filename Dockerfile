FROM node:16-alpine 
WORKDIR /usr/src/app
COPY . .
RUN yarn install
RUN yarn install react-scripts -g

EXPOSE 8081
CMD ["yarn", "start"]