//wap to find the prime number between 50 and 200.
#include <stdio.h>
void main()
{
    int num,i,c;
  for (int num = 50; num <=200; num++)
  { 
      c=0;
      for (int i = 1; i <=num; i++)
      {
         if (num%i==0)
         {
            c++;
            // break;
         }
         
      }
      if (c==2)
      printf("%d\n",num);
  }
}
  
      
      
  
  
     

