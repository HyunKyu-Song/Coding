#include <bits/stdc++.h>
using namespace std;
#define PI 3.14159
#define loop(x, n) for(int x = 0; x < n; x++)


int main(){
	
	int sum = 0;
	
	cout << "PI: " << PI << "\n";
	
	loop(i, 10){
		sum += i;
	};
	
	cout << sum;
	
	return 0;
}
