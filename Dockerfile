FROM node:16.13.1-alpine3.14

WORKDIR /app
COPY . .
ENV NODE_ENV production
RUN npm install

EXPOSE 8081
CMD npm run start