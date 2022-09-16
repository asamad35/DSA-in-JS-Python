def search(arr, target):
    start = 0
    end = len(arr)-1

    while (start < end):
        mid = start + (end-start)//2

        if (arr[mid] < arr[end]):
            end = mid
        else:
            start = mid+1
    lowestIdx = start

    if (target > arr[len(arr)-1]):
        newStart = 0
        newEnd = lowestIdx
    else:
        newStart = lowestIdx
        newEnd = len(arr)-1

    while (newStart <= newEnd):
        newMid = newStart+(newEnd-newStart)//2

        if (arr[newMid] == target):
            return newMid
        elif (arr[newMid] < target):
            newStart = newMid+1
        else:
            newEnd = newMid-1
    return -1


print(search([3, 4, 5, 0, 1, 2], 3))
