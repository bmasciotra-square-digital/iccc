FROM node:alpine AS build
WORKDIR /app

# Accept build argument for the API URL - this is here to dynamically change the url depending on the environment/deployment
ARG REACT_APP_BASE_API
COPY package*.json ./
RUN npm install
COPY . .

ENV REACT_APP_BASE_API=${REACT_APP_BASE_API}

RUN npm run build
FROM node:alpine
WORKDIR /app
COPY --from=build /app/build ./build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
