import cors from 'cors';

export = cors({
  origin: ['skywalker-news.ryanolivr.dev', 'www.skywalker-news.ryanolivr.dev', '127.0.0.1:5500'],
  methods: ['GET', 'POST'],
})
