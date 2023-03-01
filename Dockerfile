# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
#COPY package-lock.json ./
RUN npm install
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
RUN mkdir /app/build && chmod -R 777 /app/build

# add app
COPY . ./
COPY webpackDevServer.config.js /node_modules/react-scripts/config/
EXPOSE 8081
# start app
CMD ["npm", "start"]    