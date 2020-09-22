#include <iostream>
using namespace std;

int main() {
    cout << "C++ right here!" << endl;	
	
	string initialName = "";
	string confirmedName = "";
	
	try {
		cout << "What's your name?" << endl;
		cin >> initialName;
		
		if (initialName.size() < 5) {
			throw 1;
		}
		
		cout << "Please confirm your name." << endl;
		cin >> confirmedName;
		
		if (confirmedName != initialName) {
			throw 2;
		}
	}
	catch (int errorNum) {
		cerr << "Uh oh!  Error #" << errorNum << endl;
		if (errorNum == 1) {
			cerr << "Name must be at least 5 characters." << endl;
		}
		if (errorNum == 2) {
			cerr << "Names do not match." << endl << "Initial name was \'" << initialName << "\', while confirmed name was \'" << confirmedName << "\'." << endl;
		}
	}
	
    return 0;
}