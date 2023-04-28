#include <stdio.h>

int main(void){
	
	char str[260];
	int i, cnt=0;
	
	while(1){
		gets(str);
		
		if(str[0] == '#')
			break;
			
		cnt=0;
		
		for(i = 0; str[i] != '\0'; i++){
			if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'|| str[i] == 'A'|| str[i] == 'E'|| str[i] == 'I'|| str[i] == 'O'|| str[i] == 'U'){
				cnt++;
			}
		}
		printf("%d\n", cnt);
	}
	
	return 0;
}
