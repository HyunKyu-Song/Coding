#include <stdio.h>

int func2(int arr[], int n){
	int check[101] = {0};
	int i, cnt=0;
	
	for(i = 0; i < n; i++){
		check[arr[i]]++;
	}
	
	for(i = 0; i < 101; i++){
		if(check[i] != 0){
			if(i == 50 && check[i] == 2)
				return 1;	
			else if(check[100-i] != 0 && i != 50)
				return 1;	
		}
	}
	
	return 0;
}

int main(void){
	
	int a[100] = {1, 52, 48};
	int b[100] = {50, 42};
	int c[100] = {4, 13, 63, 87};
	
	printf("a = %d\n", func2(a, 3));
	printf("b = %d\n", func2(b, 2));
	printf("c = %d\n", func2(c, 4));
		
	return 0;
}
