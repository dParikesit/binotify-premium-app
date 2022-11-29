FROM node:lts-alpine
WORKDIR /app

COPY . .
RUN npm install

RUN npm install -g serve

CMD ["serve", "-s", "build", "-l", "80"]