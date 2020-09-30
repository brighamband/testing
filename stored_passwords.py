# see https://www.youtube.com/watch?v=IolxqkL7cD8
# (details on how to set up environment variables)

import os

username = os.environ.get("TEST_USERNAME")
password = os.environ.get("TEST_PASSWORD")

print(username)
print(password)
