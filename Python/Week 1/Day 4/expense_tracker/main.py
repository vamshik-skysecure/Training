

from expenses import add_expense, list_expenses, total_expenses
# Import only the functions we need from expenses module.
from validator import NegativeAmountError
# Import the custom exception class so we can catch it by name.

def show_menu():
    """Display menu options to the user"""
    print("\n=== EXPENSE TRACKER ===")
    print("1. Add Expense")
    print("2. View All")
    print("3. Total Expense")
    print("4. Exit")

# Program loop: run until user chooses to exit
while True:
    show_menu()

    # Get user choice, but user might type something that can't convert to int.
    try:
        choice = int(input("Enter choice: "))
    except ValueError:
        # If conversion to int fails, show a friendly message and restart the loop.
        print("Please enter a valid number (1-4).")
        continue  # go back to start of while True

    if choice == 1:
        # Option to add an expense
        title = input("Expense title: ")
        try:
            # Convert input into a float (decimal). ValueError possible.
            amount = float(input("Amount: "))
            # Try adding expense — this may raise NegativeAmountError from validator.
            add_expense(title, amount)
            print("✅ Expense added!")
        except ValueError:
            # This block runs if float(...) failed (user typed letters)
            print("Invalid amount entered. Please type a number like 12.50")
        except NegativeAmountError as e:
            # This block runs if amount was negative and validate_amount raised our custom error.
            print(e)  # prints "Amount cannot be negative."

    elif choice == 2:
        # View all expense items
        print("\nYour Expenses:")
        for exp in list_expenses():
            # exp is a dictionary like {"title": "Lunch", "amount": 5.5}
            print(f"- {exp['title']}: {exp['amount']}")

    elif choice == 3:
        # Show total expense
        print("Total:", total_expenses())

    elif choice == 4:
        # Exit the loop and program
        print("Goodbye!")
        break

    else:
        # Any other integer input that's not 1-4
        print("Invalid choice. Try again.")
