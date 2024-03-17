var dataBase_for_AI = {
    "hi": ["Hello!", "Hi there!", "Hey! How can I assist you?"],
    "time": function () {
        var dt = new Date();
        var h = dt.getHours();
        var m = dt.getMinutes();
        var s = dt.getSeconds();
        return "Current time is " + h + ":" + (m < 10 ? '0' : '') + m + ":" + (s < 10 ? '0' : '') + s;
    },
    "greetings": ["Hi!", "Hello!", "Hey there!"],
    "?": {
        "what is your name": "I am under developing so my name was not decide, but my temporary name ChatBot as well as AI Assistant",
        "who are you": "I'm an AI assistant.",
        "how are you": "I'm just a program, so I don't have feelings, but thanks for asking!",
        "what can you do": "I can help you with various tasks like answering questions, providing information, and more!"
    },
    "weather": {
        "today": "The weather today is sunny with a high of 25°C.",
        "tomorrow": "Tomorrow, expect partly cloudy skies with a chance of rain."
    },
    "jokes": [
        "Why don't scientists trust atoms? Because they make up everything!",
        "I told my wife she was drawing her eyebrows too high. She looked surprised!",
        "Why don't skeletons fight each other? They don't have the guts!",
        "Parallel lines have so much in common. It’s a shame they’ll never meet.",
        "I'm reading a book on anti-gravity. It's impossible to put down!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "I used to play piano by ear, but now I use my hands.",
        "Why did the tomato turn red? Because it saw the salad dressing!"
    ],
    "quotes": [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
        "The best preparation for tomorrow is doing your best today. - H. Jackson Brown Jr.",
        "The only thing worse than being blind is having sight but no vision. - Helen Keller",
        "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama"
    ],
    "facts": [
        "The Eiffel Tower can be 15 cm taller during the summer.",
        "A teaspoonful of neutron star would weigh about 6 billion tons.",
        "The shortest war in history lasted only 38 minutes.",
        "Polar bears could eat as many as 86 penguins in a single sitting if they could find them.",
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!",
        "The shortest war in history was between Zanzibar and England in 1896. Zanzibar surrendered after just 38 minutes.",
        "Honey is the only food that doesn’t spoil.",
        "In the past 20 years, scientists have found more than 1,000 planets outside of our solar system."
    ],
    "emotions": {
        "happy": ["I'm glad to hear that!", "That's wonderful!", "Great!"],
        "sad": ["I'm sorry to hear that.", "It will get better.", "I'm here to support you."],
        "angry": ["Take a deep breath.", "Let's try to calm down.", "What happened?"]
    },
    "goodbye": ["Goodbye!", "See you later!", "Take care!"],
    "bye": ["Goodbye!", "See you later!", "Take care!"],
    "thanks": ["You're welcome!", "No problem!", "Anytime!"],
    "thank you": ["You're welcome!", "No problem!", "Anytime!"],
    "ok": ["Okay!", "Got it!", "Understood!"],
    "program": {
        "wap a program to find odd even number in c": "#include<stdio.h>\n" +
            "#include<conio.h>\n" +
            "void main()\n" +
            "{\n" +
            "    int n;\n" +
            "    clrsc\n" +
            "}"
    }
};
