import { e } from './chunk-34D6N5GH.js';
export { e as MIMEMessage, d as MIMEMessageContent, c as MIMEMessageHeader, a as MIMETextError, b as Mailbox } from './chunk-34D6N5GH.js';
import { EOL } from 'os';
import * as o from 'mime-types';

var p={toBase64:function(r){return Buffer.from(r).toString("base64")},toBase64WebSafe:function(r){return Buffer.from(r).toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")},eol:EOL,validateContentType:e=>o.contentType(e)};function E(){return new e(p)}

export { E as createMimeMessage };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=node.js.map