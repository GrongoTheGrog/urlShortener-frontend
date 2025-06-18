FROM node:20-alpine

WORKDIR /app

# copy the code and build
COPY . .
RUN npm install
RUN npm run build

# port
EXPOSE 3000

# run
ENTRYPOINT [ "npm" ]
CMD [ "start" ]
