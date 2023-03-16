#include <stdio.h>

int main(void){
	
	char str[1004] = {0};
	int n;
	
	gets(str);
	
	scanf("%d", &n);
	
	printf("%c", str[n-1]);
	
	return 0;
}
