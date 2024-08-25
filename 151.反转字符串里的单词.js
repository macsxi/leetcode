/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const sArr = s.split('');
    let slow = 0;
    // 双指针法去掉多余的空格
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] !== ' ') {
            sArr[slow++] = sArr[i];
        }
        // 取每个单词前面的空格，slow !== 0是为了删除s前面多余的空格
        if (sArr[i] === ' ' && i + 1 < sArr.length && sArr[i + 1] !== ' ' && slow !== 0) {
            sArr[slow++] = sArr[i];
        }
    }
    // 通过上面的逻辑，多余的空格都已被换到最后，删除即可
    sArr.length = slow;
    // 整体反转s
    sArr.reverse();
    slow = 0;
    // 快慢指针法，依次反转每个单词
    for (let i = 0; i < sArr.length; i++) {
        // 空格为分词符，判断sArr[i + 1]为空格时，i为单词末尾，注意结尾的单词后面没有空格
        // 先判断i === 最后一个字符，防止取的下标溢出
        if (i === sArr.length - 1 || sArr[i + 1] === ' ') {
            let left = slow, right = i;
            while (left < right) {
                const t = sArr[left];
                sArr[left++] = sArr[right];
                sArr[right--] = t;
            }
            slow = i + 2;
            i++;
        }
    }
    return sArr.join('');
};