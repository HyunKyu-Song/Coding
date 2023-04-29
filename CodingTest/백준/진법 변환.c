#include <stdio.h>
#include <string.h>
#include <math.h>

int main(void){
	
	int n, i, len, cnt, sum=0;
	char c = 'A';
	char str[100];
	
	scanf("%s", str);
	scanf("%d", &n);
	
	len = strlen(str);
	cnt = len-1;
	
	for(i = 0; str[i] != '\0'; i++){
		if(str[i] >= 65 && str[i] <= 90)
			sum += (str[i]-55)*(pow(n, cnt));
		else
			sum += (str[i]-48)*(pow(n, cnt));
			
		cnt--;
	}
	
	printf("%d", sum);
	
	return 0;
} 
