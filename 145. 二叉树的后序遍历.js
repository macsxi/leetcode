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
// 递归
var postorderTraversal = function(root) {
    const res = [];
    const f = r => {
        if (!r) return;
        f(r.left);
        f(r.right);
        res.push(r.val);
    }
    f(root);
    return res;
};
// 迭代
var postorderTraversal = function(root) {
    const res = [];
    let node;
    const t = [root];
    while (t.length) {
        node = t.pop();
        if (node) {
            res.push(node.val);
            t.push(node.left);
            t.push(node.right);
        }
    }
    return res.reverse();
};

// 迭代遍历2
var postorderTraversal = function(root) {
    const res = [];
    const t = [];
    if (root) t.push(root);
    while (t.length) {
        let node = t.pop();
        if (node) {
            t.push(node);
            t.push(null);
            node.right && t.push(node.right);
            node.left && t.push(node.left);
        } else {
            node = t.pop();
            res.push(node.val);
        }
    }
    return res;
};