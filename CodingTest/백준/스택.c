#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define SIZE 10005

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
	if(!Empty(s)){
		printf("%d\n", s->arr[s->top]);
		(s->top)--;
	}
	else
		printf("-1\n");
}

void Peek(Stack *s)
{
	if(!Empty(s))
		printf("%d\n", s->arr[s->top]);
	else
		printf("-1\n");
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

void size(Stack *s)
{
	printf("%d\n", s->top+1);
}

int main(void){
	
	Stack s;
	int data, n, i, a;
	char command[10];
	
	scanf("%d", &n);
	
	Init(&s);
	
	for(i = 0; i < n; i++){
		scanf("%s", command);
		
		if(strcmp(command, "push") == 0){
			scanf("%d", &data);
			Push(&s, data);
		}
		else if(strcmp(command, "pop") == 0){
			Pop(&s);
		}
		else if(strcmp(command, "top") == 0){
			Peek(&s);
		}
		else if(strcmp(command, "size") == 0){
			size(&s);
		}
		else if(strcmp(command, "empty") == 0){
			printf("%d\n", Empty(&s));
		}
	}
	
	return 0;
}
