#include<bits/stdc++.h>
using namespace std;
class student
{  public:

   string str;
   int rollno;
   string st;
   int arr[5];
   void input()
   {   
     cout<<"Enter Your Name : ";
     getline(cin,str);
    
     cout<<"Enter Your Roll Number : ";
     cin>>rollno;
    
     cout<<"Enter Your Standard : ";
     cin>>st;

   for(int i=0;i<5;i++)
   {  cout<<"Enter your "<<i+1<< "subject marks : ";     
      cin>>arr[i];
   }
   }

    int tmarks=0;
    int avermarks;
    double per;
 void calculate()
 {
    
    for(int i=0;i<5;i++)
    {
      tmarks+=arr[i];
    }
    avermarks=tmarks/5;
    per=tmarks/5;

    }

   void display()
   {
    cout<<"Your Name is : "<<str<<endl;
    cout<<"Your Roll Number is : "<<rollno<<endl;
    cout<<"Your standard is : "<<st<<endl;
    cout<<"Your Total marks is : "<<tmarks<<endl;
    cout<<"Your Average marks is : "<<avermarks<<endl;
    cout<<"Your Percentage is : "<<per<<"%"<<endl;
    if(per>33.0)
    cout<<"You Are PASS with "<<per<<"%"<<endl;
   }
 };

int main(){
    student s1;
    s1.input();
    s1.calculate();
    s1.display();
    return 0;
}