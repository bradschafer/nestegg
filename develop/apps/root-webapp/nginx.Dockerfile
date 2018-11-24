FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY ./dist/client /usr/share/nginx/html