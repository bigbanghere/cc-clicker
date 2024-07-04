from telebot import types
import telebot

URL = 'https://crypto-cash.netlify.app'
TG_TOKEN = '7280149547:AAGPHWS3FzdQn4FqOTziYlCEuBXmVsQjrYY'

def webAppKeyboard():
   keyboard = types.InlineKeyboardMarkup(row_width=1)
   webAppTest = types.WebAppInfo(URL)
   one_butt = types.InlineKeyboardButton(text="Играть!", web_app=webAppTest)
   keyboard.add(one_butt)

   return keyboard
def has_referrer():
    return False
def get_all_users():
    pass
bot = telebot.TeleBot(TG_TOKEN)

@bot.message_handler(commands=['start'])
def send_welcome(message):
    user_id = message.from_user.id
    # Проверяем наличие закрепленного реферера за пользователем
    if not has_referrer():
        if " " in message.text:
            referrer_candidate = message.text.split()[1]

            try:
                referrer_candidate = int(referrer_candidate)

                # Проверяем на несоответствие TG ID пользователя TG ID реферера
                # Также проверяем, есть ли такой реферер в базе данных
                if user_id != referrer_candidate: #and referrer_candidate in get_all_users():
                    referer = referrer_candidate
                    print(referer)

            except ValueError as e:
                print('e: ',e)
                pass
    bot.send_message( message.chat.id, '''
Заходи!
''', reply_markup=webAppKeyboard()) 

bot.infinity_polling()
