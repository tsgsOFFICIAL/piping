import { Pipe, PipeTransform } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Pipe({
  name: 'morse'
})
export class MorsePipe implements PipeTransform {
  
  transform(value: string, ...args: unknown[]): unknown {
    let outputString = "Morse: ";

    // Convert every character to morse code
    for (let i = 0; i < value.length; i++) {
      const character = value[i].toLowerCase();
      
      switch (character) {
        case 'a':
          outputString += `* -  `;
          break;
        case 'b':
          outputString += `- * * *  `;
          break;
        case 'c':
          outputString += `- * - *  `;
          break;
        case 'd':
          outputString += `- * *  `;
          break;
        case 'e':
          outputString += `*  `;
          break;
        case 'f':
          outputString += `* * - *  `;
          break;
        case 'g':
          outputString += `- - *  `;
          break;
        case 'h':
          outputString += `* * * *  `;
          break;
        case 'i':
          outputString += `* *  `;
          break;
        case 'j':
          outputString += `* - - -  `;
          break;
        case 'k':
          outputString += `- * -  `;
          break;
        case 'l':
          outputString += `* - * *  `;
          break;
        case 'm':
          outputString += `- -  `;
          break;
        case 'n':
          outputString += `- *  `;
          break;
        case 'o':
          outputString += `- - -  `;
          break;
        case 'p':
          outputString += `* - - *  `;
          break;
        case 'q':
          outputString += `- - * -  `;
          break;
        case 'r':
          outputString += `* - *  `;
          break;
        case 's':
          outputString += `* * *  `;
          break;
        case 't':
          outputString += `-  `;
          break;
        case 'u':
          outputString += `* * -  `;
          break;
        case 'v':
          outputString += `* * * -  `;
          break;
        case 'w':
          outputString += `* - -  `;
          break;
        case 'x':
          outputString += `- * * -  `;
          break;
        case 'y':
          outputString += `- * - -  `;
          break;
        case 'z':
          outputString += `- - * *  `;
          break;
        case 'æ':
          outputString += `* - * -  `;
          break;
        case 'ø':
          outputString += `- - - *  `;
          break;
        case 'å':
          outputString += `* - - * -  `;
          break;
        case '1':
          outputString += `* - - - -  `;
          break;
        case '2':
          outputString += `* * - - -  `;
          break;
        case '3':
          outputString += `* * * - -  `;
          break;
        case '4':
          outputString += `* * * * -  `;
          break;
        case '5':
          outputString += `* * * * *  `;
          break;
        case '6':
          outputString += `- * * * *  `;
          break;
        case '7':
          outputString += `- - * * *  `;
          break;
        case '8':
          outputString += `- - - * *  `;
          break;
        case '9':
          outputString += `- - - - *  `;
          break;
        case '0':
          outputString += `- - - - -  `;
          break;
        case '.':
          outputString += `* - * - * -  `;
          break;
        case ',':
          outputString += `- - * * - -  `;
          break;
        case ':':
          outputString += `- - - * * *  `;
          break;
        case '?':
          outputString += `* * - - * *  `;
          break;
        case '\'':
          outputString += `* - - - - *  `;
          break;
        case '-':
          outputString += `- * * * * -  `;
          break;
        case '/':
          outputString += `- * * - *  `;
          break;
        case '(':
          outputString += `- * - - *  `;
          break;
        case ')':
          outputString += `- * - - * -  `;
          break;
        case '"':
          outputString += `* - * * - *  `;
          break;
        case '*':
          outputString += `- * * -  `;
          break;
        case '@':
          outputString += `* - - * - *  `;
          break;
        case '\n':
          outputString += `* - * -  `;
          break;
        default:
          outputString += "";
      }

    }

    const md5: Md5 = new Md5();
    
    outputString += `\nMD5: ${md5.appendStr(value).end()}`;

    // test: string = this.md5.appendStr("").end() as string;
    return outputString;
  }

}
