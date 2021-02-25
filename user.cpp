#include <iostream>

using namespace std;

class User {
    private:
        std::string name;
        int age;
    public:
        User(string n, int a) {
            name = n;
            age = a;
        }
        std::string toString() const {
            return "Name: " + name + "\nAge: " + to_string(age) + "\n";
        }
};

int main() {
    User user("billy", 22);
    
    cout << user.toString();

    return 0;
}