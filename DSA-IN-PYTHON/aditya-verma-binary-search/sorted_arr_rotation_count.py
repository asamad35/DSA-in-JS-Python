arr = [1, 2, 3, 4, 5]
n = len(arr)

# -- No of rightwards rotation in sorted array is the index of lowest el of array,
# -- because lowest element wil move from 0th index to xth index, only if xth rotations takes place.

# -- if value is increasing form mid to high, it means lowest value is in [low, mid] range. (taking mid in range because mid can be the lowest)
# -- if value is decreasing from mid to high , it means lowest value is in [mid+1, high] range. (not taking mid in the range because there will be smaller element than mid as array is decreasing)


def findKRotation(arr, n):
    low = 0
    high = n-1

    while (low <= high):
        mid = (low+high)//2
        if (arr[mid] < arr[high]):
            high = mid
        else:
            low = mid+1
    return high


print(findKRotation(arr, n))
