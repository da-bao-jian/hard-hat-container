FROM node:14-alpine
COPY . /usr/src/app
WORKDIR /usr/src/app

RUN apk add git;

RUN yarn install --non-interactive --frozen-lockfile

RUN apk update && apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && apk del build-dependencies

COPY $PWD/dockerShell/entry.sh /usr/local/bin
ENTRYPOINT ["/bin/sh", "/usr/local/bin/entry.sh"]