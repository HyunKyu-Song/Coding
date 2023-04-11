#include <stdio.h>
#include <string.h>

int main(void){
	
	char str[10];
	char a[10]={0}, b[10]={0};
	int i, j, len;
	
	while(1){
		scanf("%s", str);
		
		if(str[0] == '0')
			break;
		
		len = strlen(str);
		j=0;
		
		if(len % 2 == 0){
			for(i = 0; i < len/2; i++)
				a[i] = str[i];
				
			for(i = len-1; i >= len/2; i--)
				b[j++] = str[i];
				
		}
		else{
			for(i = 0; i < len/2; i++)
				a[i] = str[i];
				
			for(i = len-1; i > len/2; i--)
				b[j++] = str[i];
		}
		
		if(strcmp(a, b) == 0)
			printf("yes\n");
		else
			printf("no\n");
		
		for(i = 0; i < 10; i++){
			a[i] = 0; b[i] = 0;
		}
	}
	
	return 0;
}
