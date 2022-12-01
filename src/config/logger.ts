import buyan from 'bunyan';
import bunyanFormat from 'bunyan-format';

const logger = buyan.createLogger({
  name: 'calc-resistance-api',
  streams: [
    {
      stream: bunyanFormat({ outputMode: 'long' })
    }
  ]
});

export default logger;
