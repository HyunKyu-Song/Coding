#include <stdio.h>

int main(void){
	
	int x = 10;
	int *p = &x;
	
	printf("<�ּ�>\n\n");
	printf("x = &%d\n", &x);
	printf("p = %d\n\n\n", p);
	
	printf("<���� ��>\n\n");
	printf("x = %d\n", x);
	printf("*p = %d\n\n\n", *p);
	
	*p = 20;
	
	printf("<�ּ�>\n\n");
	printf("x = &%d\n", &x);
	printf("p = %d\n\n\n", p);
	
	printf("<���� ��>\n\n");
	printf("x = %d\n", x);
	printf("*p = %d\n", *p);
		
	return 0;
}
