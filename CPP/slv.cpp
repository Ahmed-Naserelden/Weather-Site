#include <iostream>
#include <stack>
using namespace std;
int main(){
    bool is = true;
    string s; cin >> s;
    stack<char> st;
    for(int i = 0; i < s.size(); i++){
        if(s[i] == '('){
            st.push('(');
        }else{
            if(!st.empty()){
                st.pop();
            }else{
                is = false;
                break;
            }
        }
    }
    if(!st.empty()){
        is = false;
    }
    cout << (is == true ? "YES" : "NO");
}