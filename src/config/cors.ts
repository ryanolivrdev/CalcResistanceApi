import cors from 'cors';

export = cors({
  // origin: ['127.0.0.1:5500'],
  methods: ['GET', 'POST']
});
