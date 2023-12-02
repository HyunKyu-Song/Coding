#include <bits/stdc++.h>
using namespace std;

int main(){
	
	vector<int> v {10, 20, 30, 10 ,20 ,30, 60, 50, 40};
	
	for(int item : v) cout << item << " ";
	cout << "\n\n";
	sort(v.begin(), v.end());
	
	v.erase(unique(v.begin(), v.end()), v.end());
	
	for(int item : v) cout << item << " ";
	
	return 0;
}
