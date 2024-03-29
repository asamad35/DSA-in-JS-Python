def search(self, nums, target):
    # finding the minimum el index

    low = 0
    high = len(nums)-1
    lowestIdx = None

    while (low <= high):
        mid = (low+high)//2

        if (nums[mid] >= nums[high]):
            low = mid+1
        else:
            high = mid
    lowestIdx = high

# checking if lowestIdx el is target el
    if (nums[high] == target):
        return high

# finding target element using simple binary search
# -- both arrays across pivot is sorted, so if the end element of soted array is greater or equal to target then target el is present in second half.
# -- else in first half.

    if (nums[len(nums)-1] >= target):
        newStart = lowestIdx+1
        newEnd = len(nums)-1
    else:
        newStart = 0
        newEnd = lowestIdx-1

    while (newStart <= newEnd):
        newMid = (newStart + newEnd)//2

        if (nums[newMid] == target):
            return newMid
        elif (nums[newMid] < target):
            newStart = newMid+1
        else:
            newEnd = newMid-1
    return -1


print(search("ss", [4, 5, 6, 7, 0, 1, 2], 0))
