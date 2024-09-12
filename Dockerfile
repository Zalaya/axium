FROM node:20.16.0-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY .env ./.env

RUN npm run install:production

COPY dist/ ./dist/

CMD ["npm", "run", "start"]
