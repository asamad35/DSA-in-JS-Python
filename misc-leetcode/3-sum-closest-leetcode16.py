# similar as 3sum problem, just imagine the number line for steps taken away from target.

def threeSumClosest(self, nums, target):
    nums.sort()
    ans = float('inf')
    steps = float('inf')
    length = len(nums)-1
    start = 0

    while (start <= length):
        mid = start+1
        end = length
        while (mid < end):
            sum = nums[start] + nums[mid] + nums[end]

            if (sum > target):
                end -= 1
            elif (sum < target):
                mid += 1
            else:
                return sum

            currentSteps = abs(sum-target)

            if (currentSteps < steps):
                ans = sum
                steps = currentSteps
        start += 1

    return ans


print(threeSumClosest('a', [-1, 2, 1, -4], 1))
