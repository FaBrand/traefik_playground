FROM node:alpine as builder
RUN npm set progress=false && npm install -g @angular/cli

WORKDIR /app

COPY ./client-app/package*.json /app/
RUN npm install

COPY ./client-app /app

RUN ng build --aot --prod --output-path dist

# Stage 1 - nginx server
FROM nginx:alpine

RUN rm -rf /var/www/
RUN rm -rf /usr/share/nginx/html

COPY --from=builder /app/dist/* /app/site-data/

ADD nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 443
