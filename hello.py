def main():
    # Ask the user for their name
    name = input("Please enter your name: ")
    
    # Reply with a greeting
    if name.strip():
        print(f"Hello, {name}!")
    else:
        print("Hello, stranger!")

if __name__ == "__main__":
    main()
