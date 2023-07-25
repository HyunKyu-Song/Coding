#include <stdio.h>

int main(void){
	
	int x = 20;
	int *p = &x;
	
	printf("<ÁÖ¼Ò>\n\n");
	printf("x = &%d\n", &x);
	printf("p = %d\n\n\n", p);
	
	printf("<º¯°æ Àü>\n\n");
	printf("x = %d\n", x);
	printf("*p = %d\n\n\n", *p);
	
	*p = 20;
	
	printf("<ÁÖ¼Ò>\n\n");
	printf("x = &%d\n", &x);
	printf("p = %d\n\n\n", p);
	
	printf("<º¯°æ ÈÄ>\n\n");
	printf("x = %d\n", x);
	printf("*p = %d\n", *p);
		
	return 0;
}
