def prime(n):   # n > 1
    i = 2
    while i < n:
        if n % i == 0:
            return False
        i += 1
    return True