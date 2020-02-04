import http from "http";
import parser from "ua-parser-js";
import get from "lodash/get";

 
export default getClientInfo = _ => {
    return http.createServer(function (req, res) {
        // get user-agent header
        const ua = parser(req.headers['user-agent']);
        // write the result as response
        res.end(JSON.stringify(ua, null, '  '));
    
        return {
            browser : get(ua, 'browser') || '',
            device: get(ua, 'device') || '',
            os: get(ua, 'os') || '',
            version: get(ua, 'os.version') || '',
            engine: get(ua, 'engine.name') || ''
        }
    }).listen(1337, '127.0.0.1');
}
 
console.log('Server running at http://127.0.0.1:1337/');