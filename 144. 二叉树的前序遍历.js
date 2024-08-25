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
 * @return {number[]}
 */
// 迭代解法
var preorderTraversal = function (root) {
    const s = [root];
    const res = [];
    while (s.length) {
        let m = s.pop();
        if (m) {
            res.push(m.val);
            if (m.right) s.push(m.right);
            if (m.left) s.push(m.left);
        }
    }
    return res;
};
// 递归解法
var preorderTraversal = function (root) {
    const res = [];
    if (!root) return [];
    const f = (r) => {
        res.push(r.val);
        if (r.left) f(r.left);
        if (r.right) f(r.right);
    }
    f(root);
    return res;
};
// 迭代解法2
var preorderTraversal = function (root) {
    const res = [];
    const t = [];
    if (root) t.push(root);
    while (t.length) {
        let node = t.pop();
        if (node) {
            node.right && t.push(node.right);
            node.left && t.push(node.left);
            t.push(node);
            t.push(null);
        } else {
            node = t.pop();
            res.push(node.val);
        }
    }
    return res;
};

