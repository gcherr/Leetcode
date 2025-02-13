/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let minPQ = new MinPriorityQueue();
    let minOperations = 0;

    for(num of nums){
        minPQ.enqueue(num);
    }

    while(minPQ.front().element < k){
        let num1 = minPQ.dequeue().element;
        let num2 = minPQ.dequeue().element;

        let result = Math.min(num1, num2) * 2 + Math.max(num1, num2);

        minPQ.enqueue(result);

        minOperations++;
    }

    return minOperations;
};