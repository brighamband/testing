class User:

    def __init__(self, username, password, email):
        self.username = username
        self.password = password
        self.email = email

    def print_info(self):
        print(f"Username: {self.username}")
        print(f"Password: {self.password}")
        print(f"Email: {self.email}")

def main():

    user1 = User(username="dragonslayer", password="skyrimlover", email="elderscrollsgeek@gmail.com")
    user2 = User(username="gamer101", password="maddenfifa", email="insomnia@gmail.com")

    user1.print_info()
    print()
    user2.print_info()

if __name__ == "__main__":
    main()