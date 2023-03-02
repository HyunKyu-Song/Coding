#include <stdio.h>

int func3(int n){
	int i;
	
	for(i = 1; i*i <= n; i++){
		if(i * i == n)
			return 1;
	}
	
	return 0;
}

int main(void){
	
	printf("%d\n", func3(9));
	printf("%d\n", func3(693953651));
	printf("%d\n", func3(756580036));
		
	return 0;
}
