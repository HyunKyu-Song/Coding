#include <bits/stdc++.h>
using namespace std;

int T;
string s;

int main(){
	cin >> T;
	string bufferflush;
	
	getline(cin, bufferflush); //버퍼의 개행문자를 없애주기 위해
	
	for(int i = 0; i < T; i++){
		getline(cin, s);
		cout << s << "\n";
	}
	
	return 0;
}
