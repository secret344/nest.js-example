
FROM node:current-stretch
RUN mkdir -p /root/nest-once
ADD . /root/nest-once/
WORKDIR /root/nest-once/

ENV HOST 0.0.0.0
ENV PORT 3666
EXPOSE 3666

ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install cnpm -g --registry=https://registry.npm.taobao.org
RUN npm config rm proxy
RUN command npm config rm https-proxy
RUN cnpm install yarn
RUN yarn config set registry https://registry.npm.taobao.org
RUN yarn config delete proxy

#目前还需要在docker里调试
# ENV NODE_ENV ts-node
# RUN cnpm install -g typescript
# RUN cnpm install 
# CMD npm run start:dev:debug

RUN yarn install
RUN yarn build
RUN ls -lR ./dist
CMD [ "start", "--web"]