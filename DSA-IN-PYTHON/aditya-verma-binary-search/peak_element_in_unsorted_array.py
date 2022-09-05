
# -- Peak element is the element i.e greater than both of its neighbour. For index 0 peak shlould be greater than el at index 1.
# -- and for last index peak el shoukld be greater than el at last-1 index
# // Algorithm

# // Gist is to go that side of array where arr[mid-1] or arr[mid+1] is greater than arr[mid]. If both are greater, go any side.
# // It is guaranteed that you will get a result at that side.

# // Lets suppose arr[mid+1] > arr[mid], it means array is in inc order to some extent, the slope is growing. If slope keeps growing till end
# // then last index of array will be the peak element.
# -- dry run on [5,10,2,30,40]

# // Lets suppose arr[mid-1] > arr[mid], it means array breaks inc order (slope drops, creating a maxima) so we can find the peak element in first half of Array.
# -- dry run on [5,10,15,2,1,3,4]

# // handle edge cases separtately, i.e when mid==0 and mid == len(arr)-1


arr = [2, 1]


def findPeakElement(arr):
    start = 0
    end = len(arr)-1

    while (start <= end):
        mid = (start+end)//2

        if (mid > 0 and mid < len(arr)-1):
            if (arr[mid] > arr[mid-1] and arr[mid] > arr[mid+1]):
                return mid
            elif (arr[mid] < arr[mid+1]):
                start = mid+1
            else:
                end = mid-1

        elif (mid == 0):
            if (arr[1] > arr[0]):
                return 1
            else:
                return 0
        elif (mid == len(arr)-1):
            if (arr[mid] > arr[mid-1]):
                return mid
            else:
                return mid-1


print(findPeakElement(arr))
