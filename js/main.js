
function setLightMode() {
  document.body.setAttribute("data-bs-theme", "light");
  document.getElementById("sun").classList.add("visually-hidden");
  document.getElementById("moon").classList.remove("visually-hidden");
}
function setDarkMode() {
  document.body.setAttribute("data-bs-theme", "dark");
  document.getElementById("sun").classList.remove("visually-hidden");
  document.getElementById("moon").classList.add("visually-hidden");
}
var x = [];
function generateQuote() {
  const min = 0;
  const max = 100;
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  if (x.length < 1 || x.length == 100) {
    x = [1];
  }
  while (x.includes(randomNumber))
  {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
    x.push(randomNumber);
    x.sort((a, b) => a - b);
    var qu= q[randomNumber].quote;
    var au= q[randomNumber].author;
    console.log(qu);
    console.log(au);

        document.getElementById('quoteText').innerHTML = qu;
        document.getElementById('quoteAuthor').innerHTML = au;
}
const q = [
  { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
  { quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", author: "Oprah Winfrey" },
  { quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron" },
  { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
  { quote: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt" },
  { quote: "Always remember that you are absolutely unique. Just like everyone else.", author: "Margaret Mead" },
  { quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin" },
  { quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller" },
  { quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { quote: "Whoever is happy will make others happy too.", author: "Anne Frank" },
  { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { quote: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou" },
  { quote: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
  { quote: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
  { quote: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
  { quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison" },
  { quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
  { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
  { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { quote: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
  { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
  { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "Success seems to be connected with action. Successful people keep moving. They make mistakes but they don't quit.", author: "Conrad Hilton" },
  { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
  { quote: "Don't be distracted by criticism. Remember -- the only taste of success some people get is to take a bite out of you.", author: "Zig Ziglar" },
  { quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
  { quote: "Success isn't just about what you accomplish in your life; it's about what you inspire others to do.", author: "Unknown" },
  { quote: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
  { quote: "Some people dream of success, while other people get up every morning and make it happen.", author: "Wayne Huizenga" },
  { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { quote: "It does not matter how slowly you go, as long as you do not stop.", author: "Confucius" },
  { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
  { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
  { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { quote: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
  { quote: "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.", author: "Steve Jobs" },
  { quote: "People who are crazy enough to think they can change the world, are the ones who do.", author: "Rob Siltanen" },
  { quote: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" },
  { quote: "Knowing is not enough; we must apply. Wishing is not enough; we must do.", author: "Johann Wolfgang Von Goethe" },
  { quote: "Imagine your life is perfect in every respect; what would it look like?", author: "Brian Tracy" },
  { quote: "We generate fears while we sit. We overcome them by action.", author: "Dr. Henry Link" },
  { quote: "Whether you think you can or think you can’t, you’re right.", author: "Henry Ford" },
  { quote: "Security is mostly a superstition. Life is either a daring adventure or nothing.", author: "Helen Keller" },
  { quote: "The man who has confidence in himself gains the confidence of others.", author: "Hasidic Proverb" },
  { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { quote: "Creativity is intelligence having fun.", author: "Albert Einstein" },
  { quote: "What you lack in talent can be made up with desire, hustle and giving 110% all the time.", author: "Don Zimmer" },
  { quote: "Do what you can with all you have, wherever you are.", author: "Theodore Roosevelt" },
  { quote: "Develop an ‘Attitude of Gratitude’. Say thank you to everyone you meet for everything they do for you.", author: "Brian Tracy" },
  { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { quote: "To see what is right and not do it is a lack of courage.", author: "Confucius" },
  { quote: "Reading is to the mind, as exercise is to the body.", author: "Brian Tracy" },
  { quote: "Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality.", author: "Brian Tracy" },
  { quote: "The future belongs to the competent. Get good, get better, be the best!", author: "Brian Tracy" },
  { quote: "For every reason it’s not possible, there are hundreds of people who have faced the same circumstances and succeeded.", author: "Jack Canfield" },
  { quote: "Things work out best for those who make the best of how things work out.", author: "John Wooden" },
  { quote: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
  { quote: "I think goals should never be easy, they should force you to work, even if they are uncomfortable at the time.", author: "Michael Phelps" },
  { quote: "One of the lessons that I grew up with was to always stay true to yourself and never let what somebody else says distract you from your goals.", author: "Michelle Obama" },
  { quote: "Today’s accomplishments were yesterday’s impossibilities.", author: "Robert H. Schuller" },
  { quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
  { quote: "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.", author: "William James" },
  { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
  { quote: "With the new day comes new strength and new thoughts.", author: "Eleanor Roosevelt" },
  { quote: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { quote: "Always do your best. What you plant now, you will harvest later.", author: "Og Mandino" },
  { quote: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
  { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
  { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "When something is important enough, you do it even if the odds are not in your favor.", author: "Elon Musk" },
  { quote: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.", author: "Jamie Paolinetti" },
  { quote: "It is never too late to be what you might have been.", author: "George Eliot" },
  { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { quote: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
  { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
  { quote: "Keep your eyes on the stars, and your feet on the ground.", author: "Theodore Roosevelt" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
  { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { quote: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" }
];
