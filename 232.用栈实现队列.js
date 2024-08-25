
var MyQueue = function() {
    this.pushList = [];
    this.popList = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.pushList.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.popList.length === 0) {
        while(this.pushList.length > 0) {
            this.popList.push(this.pushList.pop());
        }
    }
    return this.popList.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.popList.length === 0) {
        return this.pushList[0];
    }
    return this.popList[this.popList.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.popList.length === 0 && this.pushList.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */