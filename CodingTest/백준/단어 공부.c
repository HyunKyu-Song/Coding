#include <stdio.h>
#include <ctype.h>
#include <string.h>

int main(void){
	
	char alpha[27]={0};
	int a[27]={0};
	int len, max=0, aaa, check=0;
	char ch = 'A';
	int i, j;
	char str[1000005];
	
	gets(str);
	
	len = strlen(str);
	
	for(i = 0; i < 27; i++){
		alpha[i] = ch;
		ch++;
	}
	
	for (i = 0; i < len; ++i){
		str[i] = toupper(*(str + i));
    }
    //printf("%s", str);
	
	for(i = 0; str[i] != '\0'; i++){
		for(j = 0; j < 27; j++){
			if(alpha[j] == str[i]){
				a[j]++;
			}
		}
	}
	
	for(i = 0; i < 27; i++){
		//printf("a[%d] = %d\n", i, a[i]);
		if(max < a[i]){
			max = a[i];
			aaa = i;
			//printf("\n\nmax = %d\n\n", max);
		}
	}
	for(i = 0; i < 27; i++){
		if(max == a[i]){
			check++;
		}
	}
	if(check > 1){
		printf("?");
	}
	else{
		printf("%c", alpha[aaa]);
	}
	//printf("\n\ncheck=%d\n\n", check);
	//printf("aaa = %d	a[%d]=%d	max=%d		%c", aaa, i,a[i], max,  alpha[aaa]);
	
	
	return 0;
}
