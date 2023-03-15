#include <stdio.h>

int main(void){
	
	char str[105] = {0};
	char arr[105] = {0};
	int i, n;
	int sum=0;
	
	scanf("%d ", &n);
	gets(str);
	
	for(i = 0; str[i] != '\0'; i++)
		arr[i] = str[i]-48;
	
	for(i = 0; i < n; i++)
		sum += arr[i];
		
	printf("%d", sum);
	
	return 0;
}
