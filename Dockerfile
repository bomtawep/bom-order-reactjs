FROM node:16-alpine 
USER node
WORKDIR /home/node
COPY package.json .
RUN npm install
COPY . .
RUN yarn build:production

EXPOSE 8081
CMD ["npm", "run", "start"]
