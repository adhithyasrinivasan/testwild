import tensorflow as tf
import numpy as np

NUM_DIGITS=10
def fizz_buzz_encode(i):
    if   i % 15 == 0: return np.array([0, 0, 0, 1])
    elif i % 5  == 0: return np.array([0, 0, 1, 0])
    elif i % 3  == 0: return np.array([0, 1, 0, 0])
    else:             return np.array([1, 0, 0, 0])

def bin_encode(i,numdigits):
	return np.array([i>> d & 1 for d in range(numdigits)])

trX = np.array([bin_encode(i, NUM_DIGITS) for i in range(101, 2 ** NUM_DIGITS)])

for i in range(101, 2 ** NUM_DIGITS):
	print(bin_encode(i, NUM_DIGITS)
