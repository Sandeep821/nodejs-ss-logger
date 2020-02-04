import {splunkLogger, setLogFormatter} from '../index';

export class Logger {
    static info(method, ...props) {
        splunkLogger.info(setLogFormatter(method, 'info', ...props));
    }
    static error(method, ...params) {
      splunkLogger.error(setLogFormatter(method, 'error', ...props));
    }
    static warn(method, ...params) {
      splunkLogger.warn(setLogFormatter(method, 'warn', ...props));
    }
  
    static trace(method, ...params) {
      splunkLogger.trace(setLogFormatter(method, 'trace', ...props));
    }

    static debug(method, ...params) {
        splunkLogger.debug(setLogFormatter(method, 'debug', ...props));
      }
  }