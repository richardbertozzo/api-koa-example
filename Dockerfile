FROM node:10.15.1-alpine

RUN mkdir -p /var/www/app

COPY . /var/www/app

WORKDIR /var/www/app

RUN npm install pm2 -g
RUN npm install

EXPOSE 3000

CMD ["pm2-runtime","--no-auto-exit","--raw","src/app.js"]
