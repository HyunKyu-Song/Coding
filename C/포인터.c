#include <stdio.h>

int main(void){
	
	int x = 10;
	int *p = &x;
	
	printf("<주소>\n\n");
	printf("x = &%d\n", &x);
	printf("p = %d\n\n\n", p);
	
	printf("<변경 전>\n\n");
	printf("x = %d\n", x);
	printf("*p = %d\n\n\n", *p);
	
	*p = 20;
	
	printf("<주소>\n\n");
	printf("x = &%d\n", &x);
	printf("p = %d\n\n\n", p);
	
	printf("<변경 후>\n\n");
	printf("x = %d\n", x);
	printf("*p = %d\n", *p);
		
	return 0;
}
