#include <bits/stdc++.h>
using namespace std;

int main(){
	vector<pair<int, int>> v;
	
	// v�� ���� �Ҵ�	
	for(int i = 1; i <=5; i++){
		v.push_back({i, i});
	}
	
	// auto ��� 
	for(auto it : v){
		cout << it.first << " : " << it.second << "\n";
	}
	cout << "\n\n";
	
	// auto ������� ���� 
	for(pair<int, int> it : v){
		cout << it.first << " : " << it.second << "\n";
	}
		
	return 0;
}
