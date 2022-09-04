arr = ['a', 'b', 'c', 'e', 'f']

#  -- same as ceil of sorted array
#  -- ceil of sorted array is same as floor of sorted array


def binarySearch(arr, target):
    start = 0
    end = len(arr)-1
    nextAlphabet = -1

    while (start <= end):
        mid = (start+end)//2

        if (arr[mid] == target):
            return mid+1 if mid+1 < len(arr) else -1
        elif (arr[mid] < target):
            start = mid+1
        else:
            nextAlphabet = mid
            end = mid-1
    return nextAlphabet


print(binarySearch(arr, 'c'))
