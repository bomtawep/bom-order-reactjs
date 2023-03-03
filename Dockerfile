# pull official base image
FROM node:13.12.0-alpine as builder

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
RUN mkdir /usr/src/app/build && chmod -R 777 /usr/src/app/build
RUN yarn build
RUN yarn install -g serve

# add app   
#COPY . ./

#RUN yarn build:production

#FROM bitnami/nginx:latest
#COPY --from=builder /usr/src/app/build /app
#RUN chown -R nginx:nginx /opt/bitnami/nginx/conf/nginx.conf && chmod -R 777 /opt/bitnami/nginx/conf/nginx.conf

EXPOSE 8081
# start app
#CMD ["nginx", "-g", "daemon off;"] 
RUN npx serve -s build
