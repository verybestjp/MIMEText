import { e } from './chunk-34D6N5GH.js';
export { e as MIMEMessage, d as MIMEMessageContent, c as MIMEMessageHeader, a as MIMETextError, b as Mailbox } from './chunk-34D6N5GH.js';
import { Base64 } from 'js-base64';

var f={toBase64:function(r){return Base64.encode(r)},toBase64WebSafe:function(r){return Base64.encodeURI(r)},eol:`\r
`,validateContentType:e=>e.length>0?e:!1};function i(){return new e(f)}

export { i as createMimeMessage };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=browser.js.map