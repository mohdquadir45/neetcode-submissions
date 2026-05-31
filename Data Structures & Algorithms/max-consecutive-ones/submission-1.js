class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let count = 0;
        let max = 0;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] === 1){
                count = count+1;
                max = Math.max(max, count);
            }
            if(nums[i] === 0) count = 0;
        }
        return max;
    }
}

const sol = new Solution();
const number = sol.findMaxConsecutiveOnes([1,1,0,1,1,1]);
console.log(number);
