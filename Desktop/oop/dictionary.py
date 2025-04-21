my_dict = {"name": "Alice", "age": 25, "city": "New York"}
age = my_dict.get("age")  
country = my_dict.get("country", "Unknown") 
print(f"Age: {age}, Country: {country}")


keys = my_dict.keys()
print(f"Keys: {list(keys)}")  


removed_value = my_dict.pop("city", "Not Found")  
print(f"Updated Dictionary: {my_dict}")

person = {"name": "Alice", "age": 25}
last_item = person.popitem()
print(last_item)  

person = {"name": "Alice"}
person.setdefault("age", 25)
print(person)  

person = {"name": "Alice", "age": 25}
person.clear()
print(person) 

person = {"name": "Alice"}
person.update({"age": 25})
print(person)  


person = {"name": "Alice", "age": 25}
print(person.items())  

person = {"name": "Ali", "age": 105}
print(person.values())  

keys = ['a', 'b', 'c']
new_dict = dict.fromkeys(keys, 0)
print(new_dict)  

original = {"x": 1, "y": 2}
copied = original.copy()
print(copied)  

"name" in {"name": "Alice"}  
