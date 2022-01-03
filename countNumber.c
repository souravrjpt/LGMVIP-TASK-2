//wap to stop input when -1 encounter also count the no. of positive, negetive and zeros.
#include<stdio.h>
void main()
{
    int n;
    int i=0;
    int a=1,countPositive=0,countNegative=0,countZero=0;
    while (1)
    {
        printf("enter any number: ");
        scanf("%d",&n);
        if (n == -1)
            break;
        if(n > 0) {
            countPositive++;
            }
        else if (n < 0) {
            countNegative++;
            }
        else 
            countZero++;
     
    }
        
        printf("count of positive number is:%d",countPositive);
        printf("count of negetive number is:%d",countNegative);
        printf("count of zeros is:%d",countZero);
    
    
}