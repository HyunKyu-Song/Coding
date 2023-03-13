#include <stdio.h>
#include <stdlib.h>
#define SIZE 5

typedef struct stack{
	int top;
	int arr[SIZE];
}Stack;

void Init(Stack *s)
{
	s->top = -1;
}

int Empty(Stack *s)
{
	if(s->top == -1)
		return 1;
	else
		return 0;
}

int Full(Stack *s)
{
	if(s->top >= SIZE-1)
		return 1;
	else
		return 0;
}

void Push(Stack *s, int val)
{
	if(!Full(s))
		s->arr[++(s->top)] = val;
	else
		printf("\n\nFull!\n\n");
}

void Pop(Stack *s)
{
	if(!Empty(s))
		(s->top)--;
	else
		printf("\n\nEmpty!\n\n");
}

void Peek(Stack *s)
{
	if(!Empty(s))
		printf("\nPeek: %d\n", s->arr[s->top]);
	else
		printf("\n\nEmpty!\n\n");
}

void Print(Stack *s)
{
	int i;
	
	printf("\nstack: ");
	for(i = 0; i <= s->top; i++){
		printf("%d ", s->arr[i]);
	}
	printf("\n");
}

int main(void){
	
	Stack s;
	int data, n;
	
	Init(&s);
	
	while(1){
		printf("[0] exit\n");
		printf("[1] push\n");
		printf("[2] pop\n");
		printf("[3] peek\n");
		printf("[4] print\n");
		scanf("%d", &n);
		
		switch(n){
			case 1:
				printf("data: ");
				scanf("%d", &data);
				Push(&s, data);
				Print(&s);
				break;
			case 2:
				Pop(&s);
				Print(&s);
				break;
			case 3:
				Peek(&s);
				Print(&s);
				break;
			case 4:
				Print(&s);
				break;
			default:
				exit(-1);
		}
	}
	
	return 0;
}
