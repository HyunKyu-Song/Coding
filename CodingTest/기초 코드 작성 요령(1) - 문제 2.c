#include <stdio.h>

int func2(int arr[], int n){
	int i, j;
	
	for(i = 0; i < n; i++){
		for(j = i+1; j < n; j++){
			if(arr[i] + arr[j] == 100)
				return 1;
		}
	}
	return 0;
}

int main(void){
	
	int a[100] = {1, 52, 48};
	int b[100] = {50, 42};
	int c[100] = {4, 13, 63, 87};
	
	printf("%d\n", func2(a, 3));
	printf("%d\n", func2(b, 2));
	printf("%d\n", func2(c, 4));
		
	return 0;
}
