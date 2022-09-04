arr = []
for i in range(1000):
    arr.append(i)


def binarySearch(arr, target):
    start = 0
    end = 2

    while (arr[end] < target):
        start = end
        end = end*2

    while (start <= end):
        mid = (start+end)//2
        if (arr[mid] == target):
            return mid
        elif (arr[mid] < target):
            start = mid+1
        else:
            end = mid-1


print(binarySearch(arr, 7))
