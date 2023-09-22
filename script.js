function threeSum(arr, target) {
// write your code here
	arr.sort()
	let close_sum = Number.MAX_VALUE
	for(let i = 0; i < arr.length-2; i++){
		let left = i+1, right = arr.length-1
		while(left < right){
			let curr_sum = arr[i] + arr[left] + arr[right]
			if(Math.abs(target-curr_sum) < Math.abs(target-close_sum)){
				close_sum = curr_sum
			}

			if(curr_sum < target){
				left++
			}
			else{
				right--
			}
		}
	}

	return close_sum
}

module.exports = threeSum;
