arr = [1, 2, 8, 10, 11]

# -- the element just less than target will be one of the mid element, so keep track of the greatest mid element.
# -- How will you keep track? by updating 'floor' with mid when arr[mid] is lesser than target as we are finding floor.
# -- if it is more than target then it doesn't make sense to update 'floor'.


def binarySearch(arr, target):
    start = 0
    end = len(arr)-1
    floor = -1

    while (start <= end):
        mid = (start+end)//2

        if (arr[mid] == target):
            return mid
        elif (arr[mid] < target):
            # -- we will update the value only when arr[mid] is less than target
            floor = mid
            start = mid+1
        else:
            end = mid-1
    return floor


print(binarySearch(arr, 9))
