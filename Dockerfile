# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN yarn install
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

# add app
COPY . ./

RUN yarn global add serve

EXPOSE 8081
# start app
CMD ["serve", "-s", "build"]    