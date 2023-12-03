#include <bits/stdc++.h>
using namespace std;

int main(){
	
	vector<int> v(3, 10);
	vector<int> v2 = {10, 20 ,30};
	
	for(int x : v) cout << x << " "; // 10 10 10
	
	cout << "\n";
	
	for(int x : v2) cout << x << " "; // 10 20 30
	
	return 0;
}
