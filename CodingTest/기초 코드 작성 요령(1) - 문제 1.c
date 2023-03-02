#include <stdio.h>

int func1(int x){
	int i;
	int sum=0;
	
	for(i = 1; i <= x; i++){
		if(i % 3 == 0 || i % 5 == 0)
			sum += i;
	}
	return sum;
}

int main(void){
	
	printf("%d\n", func1(16));
	printf("%d\n", func1(34567));
	printf("%d\n", func1(27639));
	
	return 0;
}
