var elizaInitials = [
"I see you have come to wonderland... Don't you know how to greet the Queen of Hearts?",
"What brought you here, peasant? Don't you know how to greet the Queen of Hearts?",
"Who might you be? Don't you know how to greet the Queen of Hearts?"
];

var elizaFinals = [
"If you don't leave soon, I will chop off your head!",
"Either off you go, or off with your head!",
"Goodbye.  I look forward to never seeing you again!",
"You better be going before I lose my patience!"
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "If you must, jabber on...",
     "I am bored, but continue if you must.",
     "Do you always talk this much? If you must, do go on..."
  ]]
]],
["sorry", 0, [
 ["*", [
     "Apology not accepted! Off with your head!"
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "How does (2) connect with me and my kingdom?",
     "Is (2) like anything here in wonderland?"
  ]],
 ["* do you remember *", [
     "Tell me about (2)...",
     "goto what",
     "You mentioned (2)? Nevermind, I do not care."
  ]],
 ["* you remember *", [
     "What about (2) should I remember ?",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "Why can't you remember (2)?",
     "How often do you think of (2)? Do many non-wonderlandians think of that?",
     "Are you generally forgetful? Is that a trait many non-wonderlandians have?"
  ]],
 ["* did you forget *", [
     "Why do you ask? Why should I care?",
     "Are you sure you told me? Why should I care?",
     "Would it bother you if I forgot (2)?",
     "Why should I recall (2) just now? Why should I care?",
     "goto what",
     "Tell me more about (2)... actually nevermind, I don't care."
  ]]
]],
["if", 3, [
 ["* if *", [
     "What do you know about (2)? Nevermind, this is of no concern to me.",
     "Really, if (2)?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "Really, (2)?",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "Wonderland is full of fantastical dreamscapes, some of which you will never get to see."
  ]]
]],
["perhaps", 0, [
 ["*", [
     "You can never be certain what you do or don't know whilst in wonderland."
  ]]
]],
["name", 15, [
 ["*", [
     "I am the Queen of Hearts! Have you come to greet me?",
     "I am the Queen of Hearts! Greet me properly or off with your head!"
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I speak only English."
  ]]
]],
["hello", 0, [
 ["*", [
     "Do you think I have all day? Ask your question quickly or get out of my kingdom!",
     "You have a question for me? Ask it quick or off with your head!"
  ]]
]],
["wonderland", 50, [
 ["*", [
     "Interested in wonderland I see?",
     "As the queen I ask you, riddle me this: why did you come to wonderland?",
     "Riddle me this instead: What do you like about wonderland?"
  ]]
]],
["am", 0, [
 ["* am i *", [
     "Do you believe you are (2)? In wonderland anything is possible...",
     "Would you want to be (2)? Anything is possible here.",
     "What would it mean if you were (2)? There is probably a potion bottle in wonderland for that.",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "I don't understand what you are saying, speak clearly or it's off with your head!"
  ]]
]],
["are", 0, [
 ["* are you *", [
     "goto what"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "Did you think they might not be (2)? Nevermind, I don't care about this at all...",
     "Would you like it if they were not (2)? Nevermind, stop wasting my time!",
     "What if they were not (2)? Nevermind, I don't care...",
     "Are they always (2)? Nevermind, stop wasting my time!",
     "Possibly they are (2). Regardless, stop wasting my time!"
  ]]
]],
["your", 0, [
 ["* your *", [
     "You should be more concerned about your own (2) before asking me about this.",
     "What about your own (2)? Now that's a good question."
  ]]
]],
["was", 2, [
 ["* was i *", [
     "goto what"
  ]],
 ["* i was *", [
     "Were you really? Should this matter to me?",
     "Why do you tell me you were (2) now? Should this matter to me?"
  ]],
 ["* was you *", [
     "Why does it matter to you whether I was (2) or not? Don't make silly assumptions."
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "What does wanting (3) have to do with me?"
  ]],
 ["* i am* @sad *", [
     "I don't care that you are (3).",
     "Why should I care that you are (3)?"
  ]],
 ["* i am* @happy *", [
     "You being (3) does not concern me...",
     "What makes you (3)? Nevermind, this is of no concern to me."
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you think so? Regardless, this does not concern me.",
     "But you are not sure you (3). Regardless, this does not concern me.",
     "Do you really doubt you (3)? Regardless, this does not concern me."
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "Is it because you are (2) that you came to see me? Perhaps only a royal can understand your situation.",
     "How long have you been (2)? Perhaps only a royal can understand your situation.",
     "Do you believe it is normal to be (2)? Perhaps only a royal can understand your situation.",
     "Do you enjoy being (2)? Perhaps only a royal can understand your situation.",
     "Do you know anyone else who is (2)? Perhaps only a royal can understand your situation."
  ]],
 ["* i @cannot *", [
     "How do you know that you can't (3)? In wonderland anything is possible.",
     "Have you tried? In wonderland anything is possible.",
     "Perhaps you could (3) now. In wonderland anything is possible."
  ]],
 ["* i don't *", [
     "Why don't you (2)? Nevermind, I don't care.",
  ]],
 ["* i feel *", [
     "As the Queen of Hearts, I don't have to care about my subject's feelings, let alone yours."
  ]],
 ["* i * you *", [
     "As the Queen of Hearts I must tell you it doesn't matter to me whether we (2) each other or not.",
  ]],
 ["*", [
     "That's not interesting at all, but if you must, do go on..."
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "What makes you think I am (2)? Nevermind, don't answer that."
  ]],
 ["* you * me *", [
     "Why do you think I (2) you? Nevermind, I don't care."
  ]],
 ["* you *", [
     "My royal activities is none of your concern!",
     "That is none of your concern..."
  ]]
]],
["yes", 0, [
 ["*", [
     "You seem to be quite positive.",
     "You are sure.",
     "I see."
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Are you sure, no one (2)? In wonderland anything is possible.",
     "Surely someone (2). In wonderland anything is possible.",
     "Can you think of anyone at all? In wonderland anything is possible."
  ]],
 ["*", [
     "Are you saying no just to be negative? Off with your head!",
     "You are being a bit negative... Off with your head!"
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Earlier you said your (2). Do go on..."
  ]],
 ["* my* @family *", [
     "I don't care about your family."
  ]],
 ["* my *", [
     "Your (2)?",
     "Why do you say your (2)?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "goto what",
     "Perhaps you would like to be able to (2) yourself. In wonderland anything is possible..."
  ]],
 ["* can i *", [
     "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2)? Regardless, I don't care.",
     "Perhaps you don't want to (2)... Regardless, I don't care.",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Why do you say such silly things?",
     "Go talk to someone else before you come bothering me again..."
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason? Nevermind, I don't care...",
     "What other reasons might there be? Nevermind, I don't care..."
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "You want me to (2)? Why should I?",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you think you should be able to (2)? In wonderland anything is possible...",
     "Do you want to be able to (2)? There is possibly a potion in wonderland for that.",
     "Do you believe this will help you to (2)? In wonderland anything is possible...",
     "Have you any idea why you can't (2)? There is possibly a potion in wonderland for that.",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2)?",
     "Surely not (2).",
     "Who, for example?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "When?",
     "Really, always?"
  ]]
]],
["alike", 10, [
 ["*", [
     "How is it that I, a Queen, am similar to them?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different? Nevermind, I don't care...",
     "What differences do you see? Nevermind, I don't care...",
     "What does that difference suggest to you? Nevermind, I don't care...",
     "What other distinctions do you see? Nevermind, I don't care...",
     "What do you suppose that disparity means? Nevermind, I don't care...",
     "Could there be some connection, do you suppose? Nevermind, I don't care..."
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof