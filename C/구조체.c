#include <stdio.h>

typedef struct std{
	char name[10];
	int num;
	float grade;
}STD;

int main(void){
	
	STD s;
	
	printf("�̸�: ");
	gets(s.name);
	
	printf("�й�: ");
	scanf("%d", &s.num);
	
	printf("����: ");
	scanf("%f", &s.grade);
	
	printf("\n\n     ���\n");
	printf("------------------------\n");
	printf(" �̸�: %s", s.name);
	printf("\n �й�: %d", s.num);
	printf("\n ����: %.1f", s.grade);
	printf("\n------------------------");
		
	return 0;
}
