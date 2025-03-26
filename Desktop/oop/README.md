The first method is isupper() this is a python string method that can be called and returns a boolean. True if the variable called on contains all uppercase English letters and False if it doesn't.

The next method is upper() this is another string method. This will change all the letters to uppercase.

The third method is called count(). when ever count is called on a string it expects a value/string/letter to be passed in it and it will return how many of that value appears in the string we called it on

I have tried to see string concatenation using + sign this method concatenates two strings and forms or returns another string.

I have provide all the examples in strings.py file.

###############################################################################

Today's string method is what is called slicing. slicing helps us cut a part of the string and returns it based on the indicies we passed to it. for example:
string[0:2] slices the "string" variable which holds a string starting from the value at the 0 index upto the second index but not including the value at the second index.

As usual i have provided an example in the strings.py file.

################################################################################
Today's method is strip()

it Removes leading and trailing whitespace from a string. as shown in example strings.py. one very useful function of this strings method is when taking inputs from the user and we dont want any traling spaces, we use .strip().

###############################################################################3

Today's string method is split()

split in pyton changes a given string in to a list. by passing whatever we want in the parenthesis we can split it based on space or any value. for example: string.split() splirts the string based on spaces.this will internally remove any traling white spaces. additional examples can be found in strings.py

swapcase()
The swapcase() is a string method that returns a string by swaping the case of the letter uppercase to lowercase and lowercase to uppercase. it can be called like this string.swapcase(). example in strings.py

isdigit()
The isdigit() method returns a boolean (true or false) checking if the string is a digit forexample: string="1" string.isdigit() will return: True. but string="a", string.isdigit() will return False.

str.startswith()
The str.startswith() function checks whether a given string begins with a specific substring. It returns True if the match is found at the beginning and False otherwise.

str.endswith()
Similar to str.startswith(), the str.endswith() function determines whether a string concludes with a particular sequence of characters, returning a boolean result.

str.title()
The str.title() function converts the first letter of each word in a string to uppercase while making all other letters lowercase. It works well in most cases but might not handle words with apostrophes correctly.

str.replace()
The str.replace() method substitutes occurrences of a specific substring with another substring. This method does not modify the original string but returns a new modified version.

f-strings (f"")
f-strings (formatted string literals) allow you to embed expressions inside string literals using {}. This provides a more readable and concise way to format strings.

len()
The len() function returns the number of characters in a string (or elements in a list, tuple, etc.).

str.join()
The str.join() function joins a list of strings using the given string as a separator.

Thanks,
Milkiyas
ETS 0937/15
