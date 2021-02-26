FROM node:14.10.1

RUN mkdir -p app

WORKDIR /app

COPY . /app


RUN npm install

ENV PORT=80

EXPOSE 80

ENTRYPOINT ["npm","run","prod"]
