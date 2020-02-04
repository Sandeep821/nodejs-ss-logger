import bunyan  from "bunyan";
import splunkBunyan from "splunk-bunyan-logger";
import uuidv1 from "uuid/v1";
import moment from "moment";
import os from "os";
import getClientInfo from "./src/getClientInfo";

 
const config = {
      token: '',
      url: '',
      port: 000,
      maxRetries : 00
};

const setConfig = (token, url, port, maxRetries) => {
    return config = {
        token: token,
        url: url,
        port: port,
        maxRetries : maxRetries
  };
}

const splunkStream = splunkBunyan.createStream(config);

function setLogFormatter(appName, methodName, environment, buildNumber, brand, country, level, language, message, event) {
    const clientInfo = getClientInfo();
    const payload = {
        application: appName,
        host: os.hostname() || '', 
        browser: clientInfo.browser,
        device: clientInfo.device,
        version: clientInfo.version || '',
        engine: clientInfo.name || '',
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        language: language || moment.locale(),
        method: methodName || '',
        appId: `${appName}-${uuidv1()}`,
        environment: environment || '',
        build: buildNumber || '1.0.0',
        brand: brand || '',
        country:country || '',
        levelType: level || 'info',
        message: message || '',
        event: JSON.parse(JSON.stringify(...event))
    };
  
    return payload;
  }

/**
 * Override the default eventFormatter() function,
 * which takes a message and severity, returning
 * any type; string or object are recommended.
 *
 * The message parameter can be any type. It will
 * be whatever was passed to Logger.send().
 * Severity will always be a string.
 *
 * In this example, we're building up a string
 * of key=value pairs if message is an object,
 * otherwise the message value is as value for
 * the message key.
 *
 * This string is prefixed with the event
 * severity in square brackets.
 *
 * URL:https://dev.splunk.com/enterprise/docs/javascript/logging-javascript/loggingjavascripthowtos/howtoformathttpbunyan/
 */
splunkStream.setEventFormatter(function(message, severity) {
    console.log('message', message)
    const event = message;
    event.level = message.levelType;
    delete event.levelName;
    delete event.v1;
    delete event.name;
    delete event.levelType;
    if (event.msg === '') delete event.msg;
   
    return setLogFormatter(event);
  });

 
// Note: splunkStream must be set to an element in the streams array
const createSplunkLogger = bunyan.createLogger({
    name: "OFA.VendorDataTransferApi",
    streams: [
        splunkStream
    ]
});

const splunkLogger = (name) => {
    return bunyan.createLogger({
        name: name,
        streams: [
            splunkStream
        ]
    });
}

export {
    setConfig,
    splunkLogger
} 