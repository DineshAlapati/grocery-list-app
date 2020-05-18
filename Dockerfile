FROM mhart/alpine-node:12 as build0
WORKDIR /app
COPY . .
RUN cd ./client
RUN npm install react-scripts -g
RUN npm install --prefix client
RUN npm run build

FROM mhart/alpine-node:12 as build1
WORKDIR /app
COPY --from=build0 /app/client/build ./client/build
COPY --from=build0 /app/backend ./backend
COPY --from=build0 /app/server.js .
COPY --from=build0 /app/package-lock.json .
COPY --from=build0 /app/package.json .
RUN npm install

FROM mhart/alpine-node:slim-12
WORKDIR /app
COPY --from=build1 /app .
CMD ["node", "server.js"]
