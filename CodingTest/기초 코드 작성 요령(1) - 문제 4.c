#include <stdio.h>

int func4(int x){
	int i;
	int sum=1;
	
	for(i = 1; i < x; i++){
		sum *= 2;
		
		if(sum == x)
			return sum;
		else if(sum > x)
			return sum / 2;
	}
	
//	while(sum*2 <= x){
//		sum *= 2;
//		return sum;
//	}
}

int main(void){
	
	printf("%d\n", func4(5));
	printf("%d\n", func4(97615282));
	printf("%d\n", func4(1024));
	
	return 0;
}
