
arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, ]

# -- this question is the mixture of , finding first element and find element in infinitely sorted array.


def binarySearch(arr):
    start = 0
    end = 2

    while (arr[end] < 1):
        start = end
        end = end*2

    return firstSearch(start, end, 1)


def firstSearch(start, end, target):
    res = -1
    while (start <= end):
        mid = (start+end)//2
        if (arr[mid] == target):
            res = mid
            end = mid-1
        elif (arr[mid] < target):
            start = mid+1
        else:
            end = end-1
    return res


print(binarySearch(arr))
