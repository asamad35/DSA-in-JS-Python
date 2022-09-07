
# -- In this question we have to minimize stress on each student. By minimizing the number of pages every student reads.
# -- Every student will read minimum pages when the distributuon of pages among them wil be even.
# -- books are alotted in continuous manner.

# // eg- books = [10,20,30,40], number of students = 2
# // s1 reads 10 , s2 read 90
# // s1 reads 30 , s2 read 70
# // s1 reads 60 , s2 read 40

# // here we can observe that a student can read "ATLEAST" book with maximum number of pages OR "ATMOST" sum of pages of all books .
# // Now we can distribute even pages with help of binary search.

# // How?
# // start can be 0 or max of array (optimised) because some student has to read this book. So minimum pages >= maximum of array.
# // end will be sum of array because a student can read all books at max.
# // mid is the maxPages that every student can read.
# // if mid is valid, then check the next mid in first half as we have minimize num of pages read by every student.


def findPages(self, arr, N, M):
    def validate(arr, maxPages, M):
        # valid if all books can be read by no of students less than M where each student can read maxPages.
        students = 1
        pageSum = 0
        for bookPage in arr:
            pageSum += bookPage
            if (pageSum > maxPages):
                students += 1
                pageSum = bookPage
            if (students > M):
                return False
        return True

    if (N < M):
        return -1
    start = max(arr)
    end = sum(arr)
    res = -1

    while (start <= end):
        mid = (start + end)//2  # maximum number of pages a student can read

        if (validate(arr, mid, M)):
            end = mid-1
            res = mid
        else:
            start = mid+1
    return res


print(findPages(1, [15, 10, 19, 10, 5, 18, 7], 7, 5))
