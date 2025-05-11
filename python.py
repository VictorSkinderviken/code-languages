# Hello World!
print ("Hello, World!")


# Variables and types
name = "Victor"
age = 22
height = 190
weight = 55

print (f"\n{name} is {age}, he is {height}cm tall and weighs around {weight}kg.")

# For loop
print("\nFor loop:")
for i in range(5):
    print(f"Count: {i}")


#While loop
print("\nWhile loop:")
count = 0
while count < 3:
    print(f"Count: {count}")
    count += 1

# Conditionals
print("\nConditionals:")
if age < 18:
    print("You're a minor.")
elif 18 <= age < 65:
    print("You're an adult.")
else:
    print("You're a senior.")


# Function
print("\nFunctions:")
def greet(name):
    return f"Hello, {name}!"

print(greet("Victor"))