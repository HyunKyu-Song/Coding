#include <stdio.h>

int main(void){
	
	int n, i, j, cnt=0, sum=0;
	char str[81];
	
	scanf("%d", &n);
	
	for(i = 0; i < n; i++){
		scanf("%s", str);
		sum=0; cnt=0;
		
		for(j = 0; str[j] != '\0'; j++){
			if(str[j] == 'O'){
				cnt++;
				sum = sum + cnt;
			}
			else
				cnt=0;
		}
		printf("%d\n", sum);
	}
	
	return 0;
}
