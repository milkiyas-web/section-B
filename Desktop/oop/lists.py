# Examples of Lists methods
my_list = [1,9,5,5,8,2,]
# Sort
my_list.sort()
print(my_list)

# Pop
print(my_list.pop())

# Append
my_list.append(4)
print(my_list)

#Extend
list1 = [1, 2, 3]
list2 = [4, 5, 6]
list1.extend(list2)
print(list1)

#Insert

numbers = [1, 2, 4, 5]
numbers.insert(2, 3)
print(numbers)

#Index
letters = ["a", "b", "c", "a"]
print(letters.index("a"))

#Copy

original_list = [1, 2, 3, 4]
copied_list = original_list.copy()

print(copied_list) 

#clear()

my_list = [1, 2, 3, 4]
my_list.clear()

print(my_list)

## Count
my_list = [1, 2, 2, 3, 4, 2]
count_2 = my_list.count(2)
print(count_2)

##Reverse

my_list = [1, 2, 3, 4]
my_list.reverse()
print(my_list) 

## Remove 
my_list = [1, 2, 3, 2, 4]
my_list.remove(2)  
print(my_list)  


#max
my_list = [3, 7, 2, 9, 5]
print(max(my_list)) 


## Reversed
my_list = [1, 2, 3, 4]
rev_list = list(reversed(my_list))
print(rev_list) 

## List

my_string = "hello"
char_list = list(my_string)
print(char_list) 

## del

my_list = [10, 20, 30, 40]
del my_list[1] 
print(my_list)  


