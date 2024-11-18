FROM nginx:1.27.0

RUN apt-get update
RUN apt-get -y install vim

COPY index.html /usr/share/nginx/html/index.html
RUN chown nginx:nginx /usr/share/nginx/html/index.html
