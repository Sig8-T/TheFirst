import random
janken  = [0,'ぐー','ちょき','ぱー']
enemy   = random.randint(1,3)
set     = janken[enemy]
choice  = input('君の出す手を選択しよう【 ぐー,ちょき,ぱー】')

if choice == 'ぐー':
    choice = 1
elif choice == 'ちょき':
    choice = 2
elif choice == 'ぱー':
    choice = 3
else:
    print('ひらがなで入力してください')

print('相手は「'+ set +'」を出したよ。なので……')

first   = choice - enemy 
second  = first + 3
third   = second % 3

if third == 0:
    print('引き分け')
elif third == 1:
    print('君の負け')
else:
    print('君の勝ち')