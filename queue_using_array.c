#include<stdio.h>
#include<stdlib.h>

struct queue{
    int size;
    int f;
    int r;
    int* arr;
};

int IsFull(struct queue *q){
    if(q->r==q->size-1)
    {
        return 1;
    }
    return 0;
    
}
int IsEmpty(struct queue *q){
    if(q->f==q->r){
        return 1;
    }
    return 0;
}

// enqueue operation
void enqueue(struct queue* q,int val){
    if(IsFull(q)){
        printf("Queue is overloading \n");
    }
    else{
        q->r=q->r+1;
        q->arr[q->r]=val;
    }
}

//dequeue operation 
int dequeue(struct queue *q){
    int a= -1;
    if(IsEmpty(q)){
        printf("This queue is Empty\n");
    }
    else{
        q->f++;
        a=q->arr[q->f];
    }
    return a;
}

int main(){
    struct queue q;
    q.size  = 3;
    q.f = q.r=-1;
    q.arr = (int *)malloc(q.size * sizeof(int));

    // Enqueue few element
    enqueue(&q, 234);
    enqueue(&q, 889);
    enqueue(&q, 35);
    // enqueue(&q, 37);

    printf("dequeue of Element:- %d \n",dequeue(&q));
    printf("dequeue of Element:- %d \n",dequeue(&q));
    printf("dequeue of Element:- %d \n",dequeue(&q));

    if(IsEmpty(&q)){
        printf("Queue is Empty! \n");
    }
    else{
        printf("Queue is not empty! \n");
        
    }
    if(IsFull(&q)){
        printf("Queue is Full! \n");
    }
    else{
        printf("Queue is not Full! \n");
        
    }

   
    return 0;
}