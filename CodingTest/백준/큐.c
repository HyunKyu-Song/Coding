#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define SIZE 10005

typedef struct queue{
	int front, rear;
	int arr[SIZE];
}Queue;

int cnt=0;

void Init(Queue *q)
{
	q->front = 0;
	q->rear = 0;
}

int Empty(Queue *q)
{
	if(q->front == q->rear)
		return 1;
	else
		return 0;
}

int Full(Queue *q)
{
	if(q->rear >= SIZE-1)
		return 1;
	else
		return 0;
}

void Enqueue(Queue *q, int val)
{
	if(!Full(q)){
		q->arr[q->rear] = val;
		q->rear++;
		cnt++;
	}
	else
		printf("\nFull\n");
}

void Dequeue(Queue *q)
{
	if(!Empty(q)){
		printf("%d\n", q->arr[q->front]);
		q->front++;
		cnt--;
	}
	else
		printf("-1\n");
}

void front(Queue *q)
{
	if(!Empty(q)){
		printf("%d\n", q->arr[q->front]);
	}
	else
		printf("-1\n");
}

void back(Queue *q)
{
	if(!Empty(q)){
		printf("%d\n", q->arr[q->rear-1]);
	}
	else
		printf("-1\n");
}

int main(void){
	
	Queue q;
	int data, n, i;
	char command[10];
	
	scanf("%d", &n);
	
	Init(&q);
	
	for(i = 0; i < n; i++){
		scanf("%s", command);
		
		if(strcmp(command, "push") == 0){
			scanf("%d", &data);
			Enqueue(&q, data);
		}
		else if(strcmp(command, "pop") == 0){
			Dequeue(&q);
		}
		else if(strcmp(command, "size") == 0){
			printf("%d\n", cnt);
		}
		else if(strcmp(command, "empty") == 0){
			printf("%d\n", Empty(&q));
		}
		else if(strcmp(command, "front") == 0){
			front(&q);
		}
		else if(strcmp(command, "back") == 0){
			back(&q);
		}
	}
	
	return 0;
}
