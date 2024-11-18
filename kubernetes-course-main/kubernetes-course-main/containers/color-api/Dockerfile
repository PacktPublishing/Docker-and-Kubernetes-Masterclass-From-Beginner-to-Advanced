FROM node:22-alpine3.20

WORKDIR /app
COPY package*.json .
RUN npm ci
COPY src src
CMD ["npm", "start"]