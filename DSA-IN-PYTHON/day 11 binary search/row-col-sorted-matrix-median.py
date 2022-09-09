
# -- Median is the middle number of sorted array, [1,2,3,4,5,6,7] , 4 will be the median
# -- to find the median of the matrix, we can use binary search as rows and col are sorted.
# -- Initially take search space from 0 to 1e09 (given in quesion).

# // check if mid of search space is median.
# // by checking if matrix have (row*col)//2 elements less than mid of search space.
# // shrink the search space and repeat the process untill start becomes more than end.

def findLessThanEqualToMid(arr, target):
    start = 0
    end = len(arr)-1

    while (start <= end):
        mid = start + (end-start)//2

# -- there can be more than 1 el equal to target hence go right when (arr[mid] <= target) to cover them all
        if (arr[mid] <= target):
            start = mid+1

        else:
            end = mid-1
    return start


def findMatrixMedian(matrix):
    row = len(matrix)
    col = len(matrix[0])

    start = 1
    end = 1e09
    elBeforeMedian = (row*col)//2

    while (start <= end):
        mid = start + (end-start)//2
        # -- count is elements present in matrix which are <= mid pf search space
        count = 0
        for arr in matrix:
            count += findLessThanEqualToMid(arr, mid)

        # -- equal to sign is present because if (mid of search space  == count) then
        # -- it itself cannot be the median because it is present in the first half median, the element next to it will be the median.
        if (count <= elBeforeMedian):
            start = mid+1
        else:
            end = mid-1

    return int(start)


matrix = [
    [1, 3, 5],
    [2, 5, 9],
    [3, 5, 9],
]
print(findMatrixMedian(matrix))
