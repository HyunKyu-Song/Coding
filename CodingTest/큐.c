#include <stdio.h>
#include <stdlib.h>
#define SIZE 5

typedef struct queue{
	int front, rear;
	int arr[SIZE];
}Queue;

void Init(Queue *q)
{
	q->front = -1;
	q->rear = -1;
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
	if(!Full(q))
		q->arr[++(q->rear)] = val;
	else
		printf("\nFull\n");
}

void Dequeue(Queue *q)
{
	if(!Empty(q))
		q->front++;
	else
		printf("\nEmpty\n");
}

void Print(Queue *q)
{
	int i;
	
	printf("\n[ rear: %d	front: %d ]", q->rear, q->front);
	printf("\nQueue: ");
	for(i = q->front+1; i <= q->rear; i++){
		printf("%d ", q->arr[i]);
	}
	printf("\n\n");
}

int main(void){
	
	Queue q;
	int data, n;
	
	Init(&q);
	
	while(1){
		printf("[0] exit\n");
		printf("[1] Enqueue\n");
		printf("[2] Dequeue\n");
		printf("[3] print\n");
		scanf("%d", &n);
		
		switch(n){
			case 1:
				printf("data: ");
				scanf("%d", &data);
				Enqueue(&q, data);
				Print(&q);
				break;
			case 2:
				Dequeue(&q);
				Print(&q);
				break;
			case 3:
				Print(&q);
				break;
			default:
				exit(-1);
		}
	}

	return 0;
}
