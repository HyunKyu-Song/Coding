#include <bits/stdc++.h>
using namespace std;

int main(){
	
	array<int, 5> a;
	int arr[3] = {10, 20 ,30};
	int arr2[] = {11, 22 ,33, 44};
	
	for(int x : a) cout << x << " "; // �����Ⱚ 5�� �� �迭 
	cout << "\n";
	for(int x : arr) cout << x << " "; // 10 20 30
	cout << "\n";
	for(int x : arr2) cout << x << " "; // 11 22 33 44
	
	return 0;
}
