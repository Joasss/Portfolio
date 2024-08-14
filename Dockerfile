# syntax=docker/dockerfile:1

FROM node:20.5

ARG REST_ENV="stable"

WORKDIR /app

COPY . .

RUN yarn install --prod
RUN REACT_APP_REST_ENV="${REST_ENV}" yarn build
RUN npm install -g serve

EXPOSE 1000

CMD ["serve", "-s", "build", "-l", "1000"]
