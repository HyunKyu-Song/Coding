#include <stdio.h>
#include <string.h>

int main(void){
	
	char str[110];
	int n, i, len;
	
	scanf("%d", &n);
	
	for(i = 0; i < n; i++){
		scanf("%s", str);
		len = strlen(str);
		
		if(1 == str[len-1])
			printf("%c%c\n", str[0], str[0]);
		else
			printf("%c%c\n", str[0], str[len-1]);
	}
	
	return 0;
}
