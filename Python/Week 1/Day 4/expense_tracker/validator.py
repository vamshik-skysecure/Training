

class NegativeAmountError(Exception):
    pass

def validate_amount(amount):

    # This line checks the value; if it fails, we stop normal flow by raising.
    if amount < 0:
        # raise stops normal execution and sends this exception up to the caller.
        raise NegativeAmountError("Amount cannot be negative.")
    # If amount >= 0, function ends normally (implicitly returns None).
