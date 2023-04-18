#include <stdio.h>

int main(void){
	
	int n, cnt1=0, cnt2=0, sum1=0, sum2=0;
	
	scanf("%d", &n);
	
	if(n % 5 >=3){
		sum1 = n / 5;
		n %= 5;
		
		if(n % 3 == 0)
			sum1 = sum1 + n / 3;
		else
			cnt1++;
	}
	if(n % 3 == 0){
		sum2 = n / 3;
		
	}
	else{
		cnt2++;
	}
	
	if(cnt != 0){
		printf("-1\n");
		printf("sum=%d	cnt=%d", sum1, cnt1);
	}
	else{
		printf("sum=%d	cnt=%d", sum1, cnt1);
	}
	
	
	return 0;
}
