arr = [2, 3, 8, 10, 15]

# -- logically min absolute diff depend on floor and ceil of target element.


def findEl(arr, target):
    [floorIdx, ceilIdx] = findFloorAndCeil(arr, target)
    return floorIdx if abs(target - arr[floorIdx]) < abs(target - arr[ceilIdx]) else ceilIdx


def findFloorAndCeil(arr, target):
    start = 0
    end = len(arr)-1
    floor = -1
    ceil = -1
    while (start <= end):
        mid = (start+end)//2

        if (arr[mid] == target):
            return mid
        elif (arr[mid] < target):
            floor = mid
            start = mid+1
        else:
            ceil = mid
            end = mid-1
    return [floor, ceil]


print(findEl(arr, 12))
