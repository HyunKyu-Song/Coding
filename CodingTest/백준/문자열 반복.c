#include <stdio.h>

int main(void){
	
	int n, i, j, k, cnt;
	char str[1010] = {0};
	
	scanf("%d", &n);
	
	for(i = 0; i < n; i++){
		scanf("%d ", &cnt);
		gets(str);
		
		for(j = 0; str[j] != '\0'; j++){
			for(k = 0; k < cnt; k++){
				printf("%c", str[j]);
			}
		}
		printf("\n");
	}
	
	return 0;
}
