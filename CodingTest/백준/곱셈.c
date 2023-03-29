#include <stdio.h>

int main(void){
	
	int a, b, res, i=0;
	int arr[3] = {0};
	
	scanf("%d %d", &a, &b);
	
	res = a*b;
	
	while(b != 0){
		arr[i] = b % 10;
		b /= 10;
		i++;
	}
	
	printf("%d\n%d\n%d\n%d\n", arr[0]*a, arr[1]*a, arr[2]*a, res);
	
	return 0;
}
