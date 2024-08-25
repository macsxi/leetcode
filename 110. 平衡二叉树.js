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
 * @return {boolean}
 */
var isBalanced = function(root) {
    const getDepth = n => {
        if (!n) return 0;
        const ld = getDepth(n.left);
        const rd = getDepth(n.right);
        if (Math.abs(ld - rd) > 1 || ld === -1 || rd === -1) return -1;
        return Math.max(ld, rd) + 1;
    }
    return getDepth(root) !== -1;
};

// 迭代法
var isBalanced = function(root) {
    const getDepth = n => {
        const t = [];
        if (n) t.push(n);
        let res = 0, dep = 0;
        while(t.length) {
            let m = t.pop();
            if (m) {
                t.push(m);
                t.push(null);
                dep++;
                m.right && t.push(m.right);
                m.left && t.push(m.left);
            } else {
                t.pop();
                dep--;
            }
            res = res > dep ? res : dep;
        }
        return res;
    }
    const t1 = [];
    if (!root) return true;
    t1.push(root);
    while(t1.length) {
        const n = t1.pop();
        if (Math.abs(getDepth(n.left) - getDepth(n.right)) > 1) return false;
        n.left && t1.push(n.left);
        n.right && t1.push(n.right);
    }
    return true;
};