FROM node:alpine

WORKDIR /app-backend

COPY package*json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "run", "start:dev" ]
