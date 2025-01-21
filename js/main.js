const txt = `<strong class="g">Hi there!</strong><br />
I am <strong>Chintapalli Sri Ratna</strong>, a master's graduate in computer
science. As an enthusiastic to technology my journey has been very fascinating,
full of curiosity, innovation, and always striving to convert ideas into
real-world impact. <br />
<br />
<strong>Let's get into my story!</strong><br /><br /><br />

<strong class="h">Who Am I?</strong><br />
Imagine a problem-solver with a knack for blending creativity and
technology—that's me! My prime skills are in <strong>Web Development</strong>,
<strong>Data Analytics</strong> and
<strong>Artificial Intelligence</strong> with solutions that solve real-world
challenges. <br />
<br />
I am on day one of my professional life, but rich with skills and ambition
waiting to get employed. <br /><br /><br />

<strong class="h">What I Can Offer?</strong><br />
Here I can assure you that I am equipped with considerable expertise on all
these technologies below.<br />
<br />
<strong class="sh">Programming Expertise</strong><br />
- Proficient in: C, C++, Java, Python, JavaScript<br /><br />
<strong class="sh">Web Development</strong><br />
- Core Skills: HTML, CSS, React.js, Express.js, Node.js<br /><br />
<strong class="sh">Database Management</strong><br />
- Core Skills: SQL, PostgreSQL, NoSQL, MongoDB<br /><br />
<strong class="sh">Data Analytics</strong><br />
- Data Pipeline Management: Skilled in ETL (Extract, Transform, Load)
workflows<br />
- Analytical Tools & Libraries: Plotly, NumPy, Pandas, Matplotlib, Seaborn,
SciPy, Scikit-learn<br />
- Data Visualization Platforms: Power BI, Tableau<br /><br />
<strong class="sh">Artificial Intelligence & Machine Learning</strong><br />
- Expertise in developing intelligent systems to automate and simplify complex
tasks<br /><br /><br />

<strong class="h">My Projects</strong><br />
Here’s a glimpse of what I’ve created so far: <br />
<br />
<strong class="sh">Music Player</strong><br />
This music player app allows you to easily organize and play your music files.
Create playlists, control playback, adjust volume, and enjoy visualizations with
repeat and shuffle modes for a personalized listening experience. <br />
> <a href="https://shorturl.at/n4jKk" target="_blank">View Project</a
><br /><br />
<strong>For more projects, please visit my GitHub profile by clicking on the link provided in the "Connect" section below.</strong><br /><br /><br />

<strong class="h">What’s Next?</strong><br />
The world of technology is boundless, and so is my vision. And that is, to be
able to design solutions that drive innovation and enterprise in
entrepreneurship while making a meaningful impact.<br />
<br />
I’m always looking to grow, collaborate, and learn—because the journey is too
important as the destination.<br /><br /><br />

<strong class="h">Let's Connect!</strong><br />
<strong>Enough about me—now it's your turn!</strong><br />
<br />
Want to collaborate, brainstorm, or just chat about tech? I'd love to hear from
you. <br />
>
<a href="mailto:sriratnachintapalli@gmail.com">sriratnachintapalli@gmail.com</a
><br />
> <a href="https://shorturl.at/S9pgp" target="_blank">LinkedIn</a><br />
> <a href="https://shorturl.at/erxB7" target="_blank">GitHub</a><br /><br />
Let's build something extraordinary together. The best journeys are the ones we
share! `;

const outerContainer = document.getElementById("oc");

function typeHTML(htmlContent) {
  const container = document.createElement("div");
  container.className = "ic";
  outerContainer.appendChild(container);

  let i = 0;
  function typeChar() {
    container.innerHTML = htmlContent.slice(0, i + 1);
    i++;
    if (i < htmlContent.length) {
      setTimeout(typeChar, 30);
    }
    scrollToBottom();
  }
  typeChar();
}

function scrollToBottom() {
  outerContainer.scrollTop = outerContainer.scrollHeight;
}

typeHTML(txt);
