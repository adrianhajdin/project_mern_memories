# server/Dockerfile
FROM node:20-alpine as dev

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]

FROM node:20-alpine as prod

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]