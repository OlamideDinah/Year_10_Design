
#nums = input('Whatz yo numba')
# print(nums)
#def factor_check(nums):
#return nums


#x = 0
#for i in range (2,12):
    #if 12 % i == 0:
       # x = x + 1
   # print(x)

    

#for i in range (2,1000):

    #def get_factors(num):

#for i in range (2,100):
   # chicken = [] #empty list
    #num_split = (i // 2) + 1 # split the test case in half
    #for i in range(2,num_split): # from every number from 0 to the test case
       # if i % num_split == 0: # if remainder is 0 when divideing
           # chicken.append(i) # add them too this list
       # print(chicken)
        

   # def add_factors(chicken): # filled with values from our list
     #   factors_sum = 0 # setting this to 0
       # for i in chicken: # for each number in the list (factors) of the number
           # factors_sum = 0 + i # add to factors _ sum
 

   # def compare_sum(input, factors_sum):
       # answers = [] # answers is an empty list
       # if factors_sum == num: # if they are equal
            #answers.append(num) # add to the answers list
       # return answers



import math


for Number in range(1,1001):
    Sum = 0
    for i in range(2, Number ): # math.floor(math.sqrt(Number)) + 1
        if(Number % i == 0):
            Sum = Sum + i
    if (Sum == Number):
        print(" %d is a Perfect Number" %Number)

        print("list complete")

       





    