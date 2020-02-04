import http from "http";
import parser from "ua-parser-js";

 
export default getClientInfo = _ => {
    return http.createServer(function (req, res) {
        // get user-agent header
        const ua = parser(req.headers['user-agent']);
        // write the result as response
        res.end(JSON.stringify(ua, null, '  '));
    
        return {
            browser : ua.browser || '',
            device: ua.browser || '',
            os: ua.browser || '',
            version: ua.os.version || '',
            engine: ua.engine.name || ''
        }
    }).listen(1337, '127.0.0.1');
}
 
console.log('Server running at http://127.0.0.1:1337/');