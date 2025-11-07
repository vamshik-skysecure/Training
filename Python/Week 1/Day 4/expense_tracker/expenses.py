# expenses.py
# This module stores and manipulates expense records.

from validator import validate_amount
# imports the validate_amount function from validator.py so we can use it here.

expenses = []
# A list that will hold expense records.
# Each record will be a dictionary like {"title": "Lunch", "amount": 5.50}

def add_expense(title, amount):

    validate_amount(amount)
    # If amount is negative, validate_amount raises NegativeAmountError and this function will stop.
    expenses.append({"title": title, "amount": amount})
    # Append the new expense record (dictionary) to the list.

def list_expenses():

    return expenses
    # Returns the reference to the list (caller can inspect it).

def total_expenses():

    total = 0
    for item in expenses:
        # item is a dictionary: {"title": ..., "amount": ...}
        total += item["amount"]
    return total
