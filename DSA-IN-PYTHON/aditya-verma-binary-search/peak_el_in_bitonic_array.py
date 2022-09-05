
# -- same as finding peak element
arr = [10, 11, 12, 13, 14, 15, 5, 4, 3]


def findPeakElement(arr):
    start = 0
    end = len(arr)-1

    while (start <= end):
        mid = (start+end)//2
        if (arr[mid] > arr[mid+1] and arr[mid] > arr[mid-1]):
            return mid
        elif (arr[mid] < arr[mid+1]):
            start = mid+1
        elif (arr[mid] < arr[mid-1]):
            end = mid-1


print(findPeakElement(arr))
