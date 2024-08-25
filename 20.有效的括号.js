/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const sArr = s.split('');
    const stack = [];
    if (sArr.length % 2 !== 0) return false;
    while(sArr.length > 0) {
        const l = sArr.shift();
        switch (l) {
            case '(':
            case '[':
            case '{':
                stack.push(l);
                break;
            case ')':
                if (stack.pop() !== '(') {
                    return false;
                }
                break;
            case ']':
                if (stack.pop() !== '[') {
                    return false;
                }
                break;
            case '}':
                if (stack.pop() !== '{') {
                    return false;
                }
                break;
            default:
                break;
        }
    }
    return !stack.length;
};