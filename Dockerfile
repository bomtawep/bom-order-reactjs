FROM node:16-alpine 
USER node
WORKDIR /home/node
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build:production

EXPOSE 8081
CMD ["yarn", "start"]
