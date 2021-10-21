FROM node:14-alpine
COPY . /usr/src/app
WORKDIR /usr/src/app

EXPOSE 8545

RUN apk add git;
RUN apk --no-cache add --update py-pip

RUN yarn install --non-interactive --frozen-lockfile

RUN apk update && apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && apk del build-dependencies 

RUN pip uninstall pysha3

RUN git clone https://github.com/crytic/slither.git && cd slither \
    python3 setup.py install

COPY $PWD/dockerShell/entry.sh /usr/local/bin
ENTRYPOINT ["/bin/sh", "/usr/local/bin/entry.sh"]