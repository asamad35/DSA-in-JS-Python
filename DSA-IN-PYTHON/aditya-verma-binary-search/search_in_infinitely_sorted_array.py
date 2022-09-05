# creating large size array, that will be treated as infinite array
arr = []
for i in range(1000):
    arr.append(i)


def binarySearch(arr, target):
    start = 0
    end = 2

# -- getting target el b/w start and end
    while (arr[end] < target):
        start = end
        end = end*2

# -- simple binary search
    while (start <= end):
        mid = (start+end)//2
        if (arr[mid] == target):
            return mid
        elif (arr[mid] < target):
            start = mid+1
        else:
            end = mid-1


print(binarySearch(arr, 7))
