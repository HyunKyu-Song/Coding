#include <stdio.h>

int main(void){
	
	int x, y, i=0, j;
	int arr[3]={0}, brr[3]={0};
	
	scanf("%d %d", &x, &y);
	
	while(x != 0){
		arr[i++] = x % 10;
		x /= 10;
	}
	i=0;
	while(y != 0){
		brr[i++] = y % 10;
		y /= 10;
	}
	
	x = arr[0]*100+arr[1]*10+arr[2];
	y = brr[0]*100+brr[1]*10+brr[2];
	
	if(x > y)
		printf("%d", x);
	else
		printf("%d", y);
	
	return 0;
}
