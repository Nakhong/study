/* /regex  https://github.com/dream-ellie/regex
4가지 그룹만 알아두자.

[ 메소드 사용방법 ]
test
정규식 .test(문자열)  :일치여부를 (Boolean)반환

match
문자열.match(정규식) : n일치하는 문자의 배열(Array)반환

replace
문자열.replace(정규식, 대체문자) : 일치하는 문자를 대체


roups and ranges

Character	뜻
|	        또는
()	      그룹
[]	      문자셋, 괄호안의 어떤 문자든
[^]	       부정 문자셋, 괄호안의 어떤 문가 아닐때
(?:)	     찾지만 기억하지는 않음

Quantifiers

Character	뜻
?	        없거나 있거나 (zero or one)
*	        없거나 있거나 많거나 (zero or more)
+	         하나 또는 많이 (one or more)
{n}      	n번 반복
{min,}  	최소
{min,max} 	최소, 그리고 최대

Boundary-type

Character	뜻
\b	      단어 경계
\B	      단어 경계가 아님
^	       문장의 시작
$	       문장의 끝

Character classes

Character	뜻
\	        특수 문자가 아닌 문자
.	         어떤 글자 (줄바꿈 문자 제외)
\d	       digit 숫자
\D	      digit 숫자 아님
\w	       word 문자
\W	       word 문자 아님
\s	      space 공백
\S	       space 공백 아님
*/
