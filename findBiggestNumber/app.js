function findBiggestNumber(nums){

	let max = 0;
	for(let num of nums){
    if(num >= max){
			max = num;
		}
	}
	return max;
}

findBiggestNumber([12,4,67,8,9]);