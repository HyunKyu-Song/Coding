#include <bits/stdc++.h>
using namespace std;

int main(){
	
	int arr[3] = {10, 20, 30};
	int brr[3];
	
	memcpy(brr, arr, sizeof(arr));
	
	cout << arr[0] << "\n";
	cout << arr[1] << "\n";
	cout << arr[2] << "\n";
	cout << "\n\n";
	cout << brr[0] << "\n";
	cout << brr[1] << "\n";
	cout << brr[2] << "\n";
	cout << "\n\n";
	brr[0] = 99;
	brr[1] = 66;
	brr[2] = 33;
	
	cout << arr[0] << "\n";
	cout << arr[1] << "\n";
	cout << arr[2] << "\n";
	cout << "\n\n";
	cout << brr[0] << "\n";
	cout << brr[1] << "\n";
	cout << brr[2] << "\n";
	
	
	
	return 0;
}
