/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.stack = [];
    this.size = maxSize;
    //console.log(stack)
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.stack.length < this.size){
        this.stack.push(x);
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if(this.stack.length > 0){
        return this.stack.pop();
    }
    return -1;
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    //console.log(this.size)
    if(k > this.stack.length)
        k = this.stack.length;
    for(var i = 0; i < k; i++){
        this.stack[i] += val;
        //console.log(this.stack[i])
    }
    //console.log(this.stack)
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */