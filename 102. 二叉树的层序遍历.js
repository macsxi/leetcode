/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [];
    const t = [root];
    while (t.length) {
        const len = t.length;
        const resR = [];
        for (let i = 0; i < len; i++) {
            const m = t.shift();
            if (m) {
                resR.push(m.val);
                m.left && t.push(m.left);
                m.right && t.push(m.right);
            }
        }
        resR.length && res.push(resR);
    }
    return res;
};