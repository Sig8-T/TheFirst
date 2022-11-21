# print("Hello World by 'python'")
# number = 3
# print(number)

# number = number + 3
# print(number)

#今日はＸ曜日ですと表示したい。
# import datetime
# today = datetime.date.today()
# print(today)
# print(today.weekday())
# week = ["月","火","水","木","金","土","日"]
# print("今日は"+week[today.weekday()]+"曜日です")

#一番大きい数、一番小さい数、平均を表示したい。
# numbers = [73,24,64,10,56,89,1000,1]
# #一番大きい数
# print(max(numbers))
# #一番小さい数
# print(min(numbers))
# #平均
# AVG = sum(numbers) / len(numbers)
# print(AVG)

#自己紹介
# person = {"name":"Takka",
#           "age":"2X",
#           "addres":"Kagawa",
#           "faverite":{"musician":"中島みゆき","food":"ぶり"}}
# print(person["favorte"]["musicia"])

#FizzBuzz
# for num in range(1,101):
#     if num % 15 == 0:
#         print('FizzBuzz')
#     elif num % 5 == 0:
#         print('Buzz')
#     elif num % 3 == 0:
#         print('Fizz')
#     else:
#         print(num)

#じゃんけん課題（自分の答え）
import random
janken  = [0,'ぐー','ちょき','ぱー']
enemy   = random.randint(1,3)
set     = janken[enemy]
choice  = input('君の出す手を選択しよう【 ぐー,ちょき,ぱー】')
my_hand ={'ぐー':1,'ちょき':2,'ぱー':3}

if choice not in my_hand.keys():
    print('ひらがなで書いてください')
    
user =my_hand[choice]

print('相手は「'+ set +'」を出したよ。なので……')

first   = user - enemy 
second  = first + 3
third   = second % 3

if third == 0:
    print('引き分け')
elif third == 1:
    print('君の負け')
else:
    print('君の勝ち')
    
