FROM nginx AS build

ADD "https://www.random.org/cgi-bin/randbyte?nbytes=10&format=h" skipcache

# Install essential tools
RUN apt-get -qq update && \
    apt-get -qq install sudo && \
    apt-get -qq install apt-transport-https && \
    apt-get -qq install build-essential && \
    apt-get -qq install git

RUN curl -sL https://deb.nodesource.com/setup_17.x | bash - 
RUN apt-get -qq install -y nodejs

# install yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get -qq install -y yarn

COPY ./ /tmp

WORKDIR /tmp
RUN yarn install
RUN yarn cache clean
RUN yarn build

FROM nginx

COPY --from=build /tmp/dist /usr/www
COPY --from=build /tmp/src/view/index.html /usr/www/
COPY --from=build /tmp/src/assets /assets
COPY operations/nginx.conf /etc/nginx/nginx.conf
