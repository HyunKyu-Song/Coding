#include <bits/stdc++.h>
using namespace std;

int main(){
	
	int arr[5] = {20, 30, 10, 50, 40};
	
	for(int item : arr) cout << item << " ";
	// 20 30 10 50 40
	cout << "\n\n";
	
	sort(arr, arr+5); // 오름차순 
	for(int item : arr) cout << item << " ";
	// 10 20 30 40 50
	cout << "\n\n";
	
	sort(arr, arr+5, greater<int>()); // 내림차순 
	for(int item : arr) cout << item << " ";
	// 50 40 30 20 10
	cout << "\n\n";
		
	sort(arr, arr+5, less<int>()); // 오름차순 
	for(int item : arr) cout << item << " ";
	// 10 20 30 40 50
	
	return 0;
}
