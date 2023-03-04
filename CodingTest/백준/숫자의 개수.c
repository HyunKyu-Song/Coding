#include <stdio.h>

int main(void){
	
	int a, b, c;
	int mul, res, i;
	int arr[10] = {0};
	
	scanf("%d %d %d", &a, &b, &c);
	
	mul = a * b * c;
	
	while(mul != 0){
		res = mul / 10;
		arr[mul % 10]++;
		mul = res;
	}
	
	for(i = 0; i < 10; i++){
		printf("%d\n", arr[i]);
	}
	
	return 0;
}
