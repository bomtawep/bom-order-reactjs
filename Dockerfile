FROM node:14 as builder
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build:production

# Stage 2: Copy the JS React SPA into the Nginx HTML directory
FROM bitnami/nginx:latest
COPY --from=builder /usr/src/app/build /app
RUN chgrp -R 0 /opt/bitnami/nginx/conf/nginx.conf && \
    chmod -R g+rwX /opt/bitnami/nginx/conf/nginx.conf

EXPOSE 8081
CMD ["nginx", "-g", "daemon off;"]