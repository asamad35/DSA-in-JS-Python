arr = [1, 2, 3, 3, 3, 3, 3, 3, 5]


def firstAndLast(arr, target):

    first = firstSearch(arr, target)
    last = lastSearch(arr, target)
    return [first, last]


def firstSearch(arr, target):
    start = 0
    end = len(arr)-1
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


def lastSearch(arr, target):
    start = 0
    end = len(arr)-1
    res = -1
    while (start <= end):
        mid = (start+end)//2
        if (arr[mid] == target):
            res = mid
            start = mid+1
        elif (arr[mid] < target):
            start = mid+1
        else:
            end = end-1
    return res


print(firstAndLast(arr, 3))
