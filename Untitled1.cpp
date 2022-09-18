#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/* Global variable */
char WordBank[3000][2][1001]; // 醫學海龜湯題庫
int N; // number of drugs

int main(){
    FILE* A = fopen("醫學海龜湯題庫UTF-8.txt", "r");

    int i;
    for(i=0; i<3000; i++){
        char g[2001];
        memset(g, 0, sizeof(g));
        char* f = fgets(g, 1000, A);
        if(f == NULL){
            break;
        }

        int j;
        for(j=0; j<strlen(g); j++){ // 把行尾 LF 或 CRLF 去掉
            if(g[j] == '\r' || g[j] == '\n'){
                g[j] = 0;
            }
        }
        for(j=0; j<strlen(g); j++){ // 把 ` 換成 \n
            if(g[j] == '`'){
                g[j] = '\n';
            }
        }

        char* s = strtok(g, "$");
        char* t = strtok(NULL, "$");
        if(s == NULL || t == NULL){
            printf("檔案讀取失敗。Syntax error in line %d. 請聯絡開發者!\r\n開發者: 陳光穎 Bruce Chen\r\n", i+1);
            system("pause");
        }
        strcpy(WordBank[i][0], s);
        strcpy(WordBank[i][1], t);
        if(strlen(WordBank[i][0]) > 700 || strlen(WordBank[i][0]) > 700){
            printf("警告: 題庫中有題目或答案過長。請聯絡開發者!\r\n開發者: 陳光穎 Bruce Chen\r\n");
        }
    }
    N = i;
    printf("資料庫有%d個\r\n", N);
    if(N >= 2700){
        printf("警告: 資料庫題數過多。除了本程式的上限3000外，Javascript程式碼中設置上限4800。\r\n請聯絡開發者!\r\n開發者: 陳光穎 Bruce Chen\r\n");
    }
    FILE* B = fopen("pre題庫.txt", "w");
    for(i=0; i<N; i++){
        fprintf(B, "QuestionsAnswers[%d][0] = \"%s\";\r\nQuestionsAnswers[%d][1] = \"%s\";\r\n", i, WordBank[i][0], i, WordBank[i][1]);
    }
    fprintf(B, "QuestionsCount = %d;", N);
    return 0;
}
