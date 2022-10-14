#include<stdio.h>
int main()
{
    int age ;
    printf("Enter the age:\n");
    scanf("%d", &age);
    switch (age)
    {
    case 3 :
        printf(" your age is 3 ");
        break;
   
    default:
    printf("your age is not 3,4, and 23 ");
        break;
    }
    return 0 ;


}