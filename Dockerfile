FROM node:20.12.2 as build-stage

ARG REACT_APP_SERVER_URL


WORKDIR /app
COPY package*.json ./
COPY package-lock.json ./

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "preview" ]
