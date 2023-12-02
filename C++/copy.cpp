#include <bits/stdc++.h>
using namespace std;

int main(){
	
	vector<int> v = {10, 20, 30}, r(3);
	
	copy(v.begin(), v.end(), r.begin());
	
	for(auto item : v) cout << item << " ";
	cout << "\n";
	for(auto item : r) cout << item << " ";
	cout << "\n\n";
	v[0] = 33;
	v[1] = 66;
	v[2] = 99;
	
	for(auto item : v) cout << item << " ";
	cout << "\n";
	for(auto item : r) cout << item << " ";
	
	return 0;
}
