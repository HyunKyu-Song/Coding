#include <stdio.h>
#include <string.h>

int main(void){
	
	char str[1000005];
	int i, cnt=0, len=0;
	
	gets(str);
	len = strlen(str);
	
	for(i = 0; str[i] != '\0'; i++){
		if(str[i] == ' ')
			cnt++;
	}
	if(str[0] == ' ')
		cnt--;
	if(str[len-1] == ' ')
		cnt--;
			
	printf("%d", cnt+1);
	
	return 0;
}
