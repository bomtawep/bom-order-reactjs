FROM node:16-alpine 
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm install react-scripts -g

EXPOSE 8081
CMD ["npm", "start"]