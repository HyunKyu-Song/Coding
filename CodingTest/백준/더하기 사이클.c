#include <stdio.h>

int main(void){
	
	int x, y, n, res=0, cnt=0, sum=0;
	
	scanf("%d", &n);
	res = n;
	
	while(1){
		x = n % 10;
		n /= 10;
		y = n % 10;
		
		sum = x + y;
		sum %= 10;
		n = 10*x + sum;
		cnt++;
		
		printf("x =%d	y=%d	sum=%d	cnt=%d	n=%d\n\n", x, y, sum, cnt, n);
		
		if(res == n)
			break;
	}
	printf("\n\n\ncnt =%d", cnt);
	
	return 0;
}
