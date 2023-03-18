#include <stdio.h>

int main(void){
	
	char alpha[26] = {0};
	int i, j;
	char c = 'a';
	char str[110] = {0};
	
	scanf("%s", str);
	
	for(i = 0; i < 26; i++){
		alpha[i] = c;
		c++;
	}
	
//	for(i = 0; i < 30; i++){
//		printf("%d ", alpha[i]);
//	}
	
	for(i = 0; str[i] != '\0'; i++){
		for(j = 0; j < 26; j++){
			if(str[i] == alpha[j]){
				alpha[j] = i;
			}
			else
				alpha[j] = -1;
		}
	}
	
	for(i = 0; i < 30; i++){
//		if(alpha[i] > 96)
//			alpha[i] = -1;
		printf("%d ", alpha[i]);
	}
	
	return 0;
}
