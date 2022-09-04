arr = [3, 10, 40, 20, 50, 70, 80]

# -- recursive way

# def binarySearch(start, end, target):

#     if (start <= end):
#         mid = (start+end)//2

#         if (arr[mid] == target):
#             return mid
#         if (arr[mid-1] == target):
#             return mid-1
#         if (arr[mid+1] == target):
#             return mid+1

#         if (target > arr[mid]):
#             return binarySearch(mid+1, end, target)
#         else:
#             return binarySearch(start, mid-1, target)

#     return -1


# print(binarySearch(0, len(arr)-1, 70))

# -- iterative way
# -- auxiliary space complexity is log(n)

def binarySearch(arr, target):
    start = 0
    end = len(arr)-1

    while (start <= end):
        mid = (start+end)//2

        if (arr[mid] == target):
            return mid
        if (mid-1 >= 0 and arr[mid-1] == target):
            return mid-1
        if (mid+1 <= end and arr[mid+1] == target):
            return mid+1

        if (arr[mid] < target):
            start = mid+1
        else:
            end = mid-1
    return -2


print(binarySearch(arr, 701))
