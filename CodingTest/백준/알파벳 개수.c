#include <stdio.h>
#include <string.h>

int main(void){
	
	int alpha[26] = {0};
	char str[101];
	int i = 0;
	
	scanf("%s", str);
	
	for(i = 0; i < strlen(str); i++)
		alpha[str[i]-'a']++;
	
	for(i = 0; i < 26; i++)
		printf("%d ", alpha[i]);
	
	return 0;
}
