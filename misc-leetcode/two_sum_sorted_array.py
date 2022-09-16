#  two pointer o(n)

# def twoSum(self, arr, target):
#     start = 0
#     end = len(arr)-1

#     while (start < end):

#         if (arr[start]+arr[end] > target):
#             end -= 1
#         elif (arr[start]+arr[end] < target):
#             start += 1
#         else:
#             return [start+1, end+1]

# binary search o(nlogn)

def twoSum(self, nums, target):
    for i in range(len(nums)):
        start = i+1
        end = len(nums)-1
        search = target - nums[i]

        while (start <= end):
            mid = (start+end)//2

            if (nums[mid] == search):
                return [i+1, mid+1]
            elif (nums[mid] < search):
                start = mid+1
            else:
                end = mid-1


print(twoSum('a', [2, 3, 4], 6))
