#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/* Global variable */
char WordBank[3000][2][1001]; // ��Ǯ��t���D�w
int N; // number of drugs

int main(){
    FILE* A = fopen("��Ǯ��t���D�wUTF-8.txt", "r");

    int i;
    for(i=0; i<3000; i++){
        char g[2001];
        memset(g, 0, sizeof(g));
        char* f = fgets(g, 1000, A);
        if(f == NULL){
            break;
        }

        int j;
        for(j=0; j<strlen(g); j++){ // ���� LF �� CRLF �h��
            if(g[j] == '\r' || g[j] == '\n'){
                g[j] = 0;
            }
        }
        for(j=0; j<strlen(g); j++){ // �� ` ���� \n
            if(g[j] == '`'){
                g[j] = '\n';
            }
        }

        char* s = strtok(g, "$");
        char* t = strtok(NULL, "$");
        if(s == NULL || t == NULL){
            printf("�ɮ�Ū�����ѡCSyntax error in line %d. ���p���}�o��!\r\n�}�o��: �����o Bruce Chen\r\n", i+1);
            system("pause");
        }
        strcpy(WordBank[i][0], s);
        strcpy(WordBank[i][1], t);
        if(strlen(WordBank[i][0]) > 700 || strlen(WordBank[i][0]) > 700){
            printf("ĵ�i: �D�w�����D�ةε��׹L���C���p���}�o��!\r\n�}�o��: �����o Bruce Chen\r\n");
        }
    }
    N = i;
    printf("��Ʈw��%d��\r\n", N);
    if(N >= 2700){
        printf("ĵ�i: ��Ʈw�D�ƹL�h�C���F���{�����W��3000�~�AJavascript�{���X���]�m�W��4800�C\r\n���p���}�o��!\r\n�}�o��: �����o Bruce Chen\r\n");
    }
    FILE* B = fopen("pre�D�w.txt", "w");
    for(i=0; i<N; i++){
        fprintf(B, "QuestionsAnswers[%d][0] = \"%s\";\r\nQuestionsAnswers[%d][1] = \"%s\";\r\n", i, WordBank[i][0], i, WordBank[i][1]);
    }
    fprintf(B, "QuestionsCount = %d;", N);
    return 0;
}
