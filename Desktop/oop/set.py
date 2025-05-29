s = {1, 2, 5, 100}
s.add(3)

s.remove(1)
s.discard(5)

s.pop()
s.clear()
s2 = s.copy()
print(s2)

set1 = set([1, 2, 3])
set2 = set([2, 3, 4])
print(set1.difference(set2))       


a = {1, 2}
b = {2, 3}
print(a.union(b))  
print(a | b)       

s1 = {1, 2}
s2 = s1.copy()
print(s2)  

a = {1, 2, 3}
b = {2, 3, 4}
print(a.intersection(b)) s = {1, 2, 3}
s.clear()
print(s)  

s = {10, 20, 30}
s.pop()  
print(s)



