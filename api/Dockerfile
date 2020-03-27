FROM ruby:2.7.0

RUN apt-get update -qq && apt-get install -y nodejs
RUN apt-get install -y vim

WORKDIR /api

COPY Gemfile Gemfile.lock ./

RUN bundle install

COPY . ./