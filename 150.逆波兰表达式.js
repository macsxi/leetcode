/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
        const t = tokens[i];
        // 若不为数字字符串，则Number转换后为NaN，NaN !== NaN
        if (Number(t) !== Number(t)) {
            const r = Number(stack.pop());
            const l = Number(stack.pop());
            let temp = 0;
            if (t === '+') {
                temp = l + r;
            } else if (t === '-') {
                temp = l - r;
            } else if (t === '*') {
                temp = l * r;
            } else if (t === '/') {
                temp = l / r;
            }
            if (temp > 0) {
                temp = Math.floor(temp);
            } else {
                temp = Math.ceil(temp);
            }
            stack.push(temp);
        } else {
            stack.push(t);
        }
    }
    return stack.pop();
};