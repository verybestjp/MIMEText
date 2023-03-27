import { MIMEMessage } from '#src/MIMEMessage';
const envctx = {
    toBase64: function toBase64(data) {
        return Utilities.base64Encode(data, Utilities.Charset.UTF_8);
    },
    toBase64WebSafe: function toBase64WebSafe(data) {
        return Utilities.base64EncodeWebSafe(data);
    },
    eol: '\r\n',
    validateContentType: (v) => {
        return v.length > 0 ? v : false;
    }
};
export function createMimeMessage() {
    return new MIMEMessage(envctx);
}
export { MIMEMessage } from '#src/MIMEMessage';
export { Mailbox } from '#src/Mailbox';
export { MIMETextError } from '#src/MIMETextError';
export { MIMEMessageHeader } from '#src/MIMEMessageHeader';
export { MIMEMessageContent } from '#src/MIMEMessageContent';