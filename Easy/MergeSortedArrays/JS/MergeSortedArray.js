/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let index1 = m-1; 
    let index2 = n-1; 
    let reverseIterIndex = nums1.length-1;

    while(index2 >= 0){
        if(index1 >= 0 && nums1[index1] > nums2[index2]){
            nums1[reverseIterIndex] = nums1[index1];
            reverseIterIndex--;
            index1--;
        } else {
            nums1[reverseIterIndex] = nums2[index2];
            reverseIterIndex--;
            index2--;
        }
    }
};