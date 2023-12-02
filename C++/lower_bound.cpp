#include <bits/stdc++.h>
using namespace std;

int main(){
	
	vector<int> arr {10, 20, 30, 40, 50};
	
	cout << lower_bound(arr.begin(), arr.end(), 30) - arr.begin();
	cout << "\n";
	cout << upper_bound(arr.begin(), arr.end(), 30) - arr.begin();
	
	return 0;
}
