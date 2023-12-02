#include <bits/stdc++.h>
using namespace std;

int main(){
	
	int v[5][5];
	
	fill(&v[0][0], &v[5][5], 7);
	
	for(int i=0; i < 5; i++){
		for(int j=0; j < 5; j++){
			cout << v[i][j] << " ";
		}
		cout << "\n";
	}
	
	return 0;
}
