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
// 递归遍历
var inorderTraversal = function(root) {
    const res = [];
    if (!root) return [];
    let r = root;
    const f = r => {
        if (!r) return;
        if (r.left) f(r.left);
        res.push(r.val);
        if (r.right) f(r.right);
    }
    f(r);
    return res;
};

// 迭代遍历
var inorderTraversal = function(root) {
    const res = [];
    if (!root) return res;
    const t = [];
    let node = root;
    while (node || t.length) {
        if (node) {
            t.push(node);
            node = node.left;
        } else {
            const m = t.pop();
            m && res.push(m.val);
            m && (node = m.right);
        }
    }
    return res;
};

// 迭代遍历2
var inorderTraversal = function(root) {
    const res = [];
    const t = [];
    if (root) t.push(root);
    while (t.length) {
        let node = t.pop();
        if (node) {
            node.right && t.push(node.right);
            t.push(node);
            t.push(null);
            node.left && t.push(node.left);
        } else {
            node = t.pop();
            res.push(node.val);
        }
    }
    return res;
};