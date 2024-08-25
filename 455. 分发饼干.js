/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    const _g = g.sort((a, b) => a - b);
    const _s = s.sort((a, b) => a - b);
    if (_s[_s.length - 1] < _g[0]) return 0;
    let l = 0;
    for (let i = 0; i < _s.length && l < _g.length; i++) {
        if (_s[i] >= _g[l]) {
            l++;
        }
    }
    return l;
};