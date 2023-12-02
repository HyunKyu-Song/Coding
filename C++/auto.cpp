#include <bits/stdc++.h>
using namespace std;

int main(){
	vector<pair<int, int>> v;
	
	// v에 값을 할당	
	for(int i = 1; i <=5; i++){
		v.push_back({i, i});
	}
	
	// auto 사용 
	for(auto it : v){
		cout << it.first << " : " << it.second << "\n";
	}
	cout << "\n\n";
	
	// auto 사용하지 않음 
	for(pair<int, int> it : v){
		cout << it.first << " : " << it.second << "\n";
	}
		
	return 0;
}
