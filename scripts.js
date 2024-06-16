document.addEventListener("DOMContentLoaded", function() {
    const outputElement = document.getElementById("output");
    const commandInput = document.getElementById("commandInput");
    const terminalBody = document.getElementById("terminalBody");
    let promptTimeout;
    let promptShown = false;
  
    const sections = {
        about: `
          <pre><b><h2> 🤖 About RootKid:</h2></b>
Hey there! I'm <b>RootKid</b>, also known as <b>Pavan Saxena😅</b>, your go-to cybersecurity friend !!! 👋

My passion lies in delving deep into <b>identifying vulnerabilities and exploiting them like a pro! 💻</b> Through My Cyber Journal, YouTube videos, and hands-on workshops, I'm on a mission to spread cyber wisdom far and wide. 😎
          
I firmly <i>believe in practical learning</i> because, let's be real, in the cyber world, theory is about as useful as a chocolate teapot! 🍫☕️ That's why my mantra is <b><i>"Skills over knowledge, baby!"</b></i> It's all about being able to <b>learn and troubleshoot effectively over time to become a Cyber Expert in Hacking.</b> 💡 Plus, with over six cyber events and Meet-Ups under my belt as a keynote speaker, I've got plenty of experience to share! 🎤 When I'm not hacking into networks and code, you might find me contributing to the open-source community or cooking up some hands-on labs for aspiring cybersecurity pros. 
          
Oh, and one more thing: I and one of my friend, <a href="https://www.linkedin.com/in/kathannx/" class="link"><b><i><u>Kathan</u></a></b></i>, are Co-founders of <a href="https://chat.whatsapp.com/F1ZVC7GBYYM3YQp6wMe8jn" class="link"><b><i><u>Nest InfoSec Community</u></a></b></i>, offering free resources to aspiring professionals. 🌐
         
🌟 So let's keep it fun, keep it secure, and always remember: if it's smart, it's vulnerable!
          
🛡️🔐 Happy Hacking, Everyone! 👨‍💻🤖

<div class="social-icons">
  <a href="https://im-rootkid.medium.com/" target="_blank"><i class="fab fa-medium"></i></a>
  <a href="https://github.com/im-rootkid" target="_blank"><i class="fab fa-github"></i></a>
  <a href="https://www.youtube.com/@im_rootkid" target="_blank"><i class="fab fa-youtube"></i></a>
  <a href="https://twitter.com/im_rootkid" target="_blank"><i class="fab fa-twitter"></i></a>
  <a href="https://www.instagram.com/im_rootkid/" target="_blank"><i class="fab fa-instagram"></i></a>
  <a href="https://www.linkedin.com/in/im-rootkid/" target="_blank"><i class="fab fa-linkedin"></i></a>
  <a href="mailto:info.rootkid@rootkid.in"><i class="fas fa-envelope"></i></a>
</div>
        `,
        
        experience: `<b><h2>👜 Professional Experience:</h2></b>

I have <b>three years of experience in cybersecurity, with a focus on Vulnerability Assessment and Penetration Testing (VAPT)</b>. In addition to full-time roles, I've also undertaken various freelancing projects, which are confidential due to non-disclosure agreements (NDAs) with the clients.

<span style="color: red;"><b>Lead - Security Analyst (VAPT)</b></span> - TechDefence Labs - Nov 2023 to Present - 8 Months*
<b>Roles and Responsibilities:</b>

    • Led a team of 17+ members in conducting comprehensive Vulnerability Assessment and Penetration Testing (VAPT) across APIs, source code, web, mobile, thick-client applications, and more using both manual and automated methodologies.
    • Implemented and integrated robust processes for VAPT projects, ensuring efficiency and consistency within the department.
    • Established a centralized repository for maintaining detailed project reports and documentation, improving data management and accessibility.
    • Developed and standardized a VAPT checklist applicable to all domains, ensuring thorough and consistent assessment procedures.
    • Ensured the timely delivery of comprehensive technical reports to clients, meeting all specified requirements and maintaining high standards of quality.
    • Addressed and resolved all technical and non-technical client queries, providing exceptional customer service and support.
    • Developed training programs and materials to streamline the onboarding process for new interns and team members.
    • Trained and mentored 30+ interns, fostering the development of future talent in the VAPT domain.
        
<span style="color: red;"><b>Security Analyst (VAPT)</b></span> - TechDefence Labs - Aug 2022 to Nov 2023 - 1 Year 4 Months
<b>Roles and Responsibilities:</b>

    • Conducted Vulnerability Assessment and Penetration Testing for Network, API, Source Code, Web, Mobile, and Thick-Client Applications using manual and automated approaches.
    • Conducted Secure Configuration Reviews for OS, DB, Firewall, Routers, Switches, and other Security Devices/Components.
    • Managed 5+ Quarterly Clients Single-Handedly.
    • Prepared 150+ Detailed Technical Reports and Explained them to the Clients.
    • Handled 200+ technical Queries from Clients.
    • Made significant changes in the Technical Reports shared with the clients.
    • Ensured timely delivery of Technical Reports to Clients.
    • Trained 25+ interns in the VAPT domain.
        
<span style="color: red;"><b>Application Security Analyst</b></span> - Adani Enterprises Limited - Jun 2023 to Nov 2023 - 6 Months
<b>Roles and Responsibilities:</b>

    • I have been assigned as an Associate Application Security Engineer by Techdefence Labs at Adani Enterprises
        
<span style="color: red;"><b>Security Researcher</b></span> - NCIIPC India (A unit of NTRO) - Freelance - Dec 2021 to Dec 2023 - 2 Years 1 Months
<b>Roles and Responsibilities:</b>

    • Reported 400+ Vulnerabilities in Government Domains.
    • Received Hall of Fame in April 2022 News Letter.
        
<span style="color: red;"><b>Security Analyst (VAPT) Intern</b></span> - TechDefence Labs - Oct 2021 to Apr 2022 - 7 Months
<b>Roles and Responsibilities:</b>

    • Learned in detail about the Architecture and working of Network, Web, and Mobile Applications.
    • Learned in detail about the Security Perspective and Security Assessment for Network, Web, and Mobile Applications.
    • Reported 70+ Vulnerabilities in Responsible Disclosure Programs as part of my tasks.
    • Conducted 20+ Vulnerability Assessments and Penetration Testing for Network and Web Applications.
    • Prepared 30+ detailed technical reports for clients.
    
<div class="social-icons">
  <a href="https://im-rootkid.medium.com/" target="_blank"><i class="fab fa-medium"></i></a>
  <a href="https://github.com/im-rootkid" target="_blank"><i class="fab fa-github"></i></a>
  <a href="https://www.youtube.com/@im_rootkid" target="_blank"><i class="fab fa-youtube"></i></a>
  <a href="https://twitter.com/im_rootkid" target="_blank"><i class="fab fa-twitter"></i></a>
  <a href="https://www.instagram.com/im_rootkid/" target="_blank"><i class="fab fa-instagram"></i></a>
  <a href="https://www.linkedin.com/in/im-rootkid/" target="_blank"><i class="fab fa-linkedin"></i></a>
  <a href="mailto:info.rootkid@rootkid.in"><i class="fas fa-envelope"></i></a>
</div>
    
    `,


        certifications: `
        <pre><b><h2>📚 My Academic and Certification Journey:</h2></b>

I am currently pursuing a <span style="color: red;"><b>Bachelor's degree in Computer Applications (BCA)</b></span>, driven by my strong passion for computer science and dedication to academic excellence. My fascination with cybersecurity ignited early, leading me to acquire several noteworthy certifications as I progress in my career. Currently, I'm gearing up for advanced industry-level certifications. Here's a summary:

<b><h3>Preparing for the following Certifications:</h3></b>
• <span style="color: red;"><b>OffSec Certified Professional (OSCP)</b></span> by Offensive Security
• <span style="color: red;"><b>Certified Ethical Hacker (C|EH v12) (Practical)</b></span> by EC-Council

<b><h3>Obtained Certifications:</h3></b>
• <span style="color: red;"><b>Certified Ethical Hacker (C|EH v12) (Theory)</b></span> by EC-Council
• <span style="color: red;"><b>eLearnSecurity Junior Penetration Tester v2 (eJPT v2)</b></span> by INE
• <span style="color: red;"><b>Certified Network Security Practitioner (CNSP)</b></span> by The SecOps Group
• <span style="color: red;"><b>Microsoft Azure Fundamentals (AZ-900)</b></span> by Microsoft
• <span style="color: red;"><b>Certified in Cybersecurity (CC)</b></span> by (ISC)²
• <span style="color: red;"><b>Certified AppSec Practitioner (CAP)</b></span> by The SecOps Group
• <span style="color: red;"><b>Mobile Application Penetration Testing</b></span> by TCM Security
<br>
As I continue to expand my knowledge and skills in cybersecurity, I am committed to making a meaningful contribution to the ever-evolving field of Cyber Security.  
  <div class="social-icons">
    <a href="https://im-rootkid.medium.com/" target="_blank"><i class="fab fa-medium"></i></a>
    <a href="https://github.com/im-rootkid" target="_blank"><i class="fab fa-github"></i></a>
    <a href="https://www.youtube.com/@im_rootkid" target="_blank"><i class="fab fa-youtube"></i></a>
    <a href="https://twitter.com/im_rootkid" target="_blank"><i class="fab fa-twitter"></i></a>
    <a href="https://www.instagram.com/im_rootkid/" target="_blank"><i class="fab fa-instagram"></i></a>
    <a href="https://www.linkedin.com/in/im-rootkid/" target="_blank"><i class="fab fa-linkedin"></i></a>
    <a href="mailto:info.rootkid@rootkid.in"><i class="fas fa-envelope"></i></a>
  </div>
      `,

        achievements: `
        <pre><b><h2>🎯 Key Achievements</h2></b>
In the exciting world of cybersecurity, I have spent the last three years specializing in Vulnerability Assessment and Penetration Testing (VAPT). With extensive training and hands-on experience, I have led over 300 security assessments for various companies, including Adani Group, Torrent Power, Astral Pipes, Bajaj Auto Finance Limited (BAFL), The Great Eastern Shipping Company (GESCO), 1Cyber Valley, and Saraswat Infotech Ltd (SIL).
<br>
My work involves performing security assessments in different areas such as web apps, mobile apps, networks, and APIs to identify and fix security weaknesses. I have worked with top organizations across various industries, helping them strengthen their security posture. This opportunity was provided to me by my current employer.
<br>
I've had the privilege of <b>being recognized by esteemed organizations</b> for my contributions in identifying and reporting security vulnerabilities within their applications. Among these acknowledgments are from renowned entities including:
        
• <span style="color: red;"><b>NCIIPC India</b></span>
• <span style="color: red;"><b>IOM UN-Migration</b></span>
• <span style="color: red;"><b>KnowledgeOwl</b></span>
• <span style="color: red;"><b>NTUC Enterprise</b></span>
• <span style="color: red;"><b>Inflectra</b></span>
                
I have had the honor of being a keynote speaker at several prominent cybersecurity events, where I shared my expertise and insights with the community. Here are some of the key events where I have presented:

➤ <span style="color: red;"><b>Hackers Community Meet-Up - Vadodara and Ahmedabad - May 2023:</b></span> Presented on Introduction to HTTP Request Smuggling Attack.

➤ <span style="color: red;"><b>ExploitXplorers Community Meet-Up - Mar 2024:</b></span> Discussed Android and iOS Application Penetration Testing.

➤ <span style="color: red;"><b>Unitedworld School of Computational Intelligence (USCI) at Karnavati University (KU) - Feb 2024:</b></span> Delivered a technical session on Kali Linux and wireless hacking, including practical exercises.

➤ <span style="color: red;"><b>Hackers Community Meet-Up - Vadodara - Dec 2023:</b></span> Presented on Red Team - Recon 101, featuring live demonstrations.

➤ <span style="color: red;"><b>Parul University - Dec 2023:</b></span> Conducted a session on VAPT fundamentals, focusing on security standards, methodologies, and hands-on exercises with SQL Injection (SQLi) and Cross-Site Scripting (XSS) attacks.

➤ <span style="color: red;"><b>Unitedworld School of Computational Intelligence (USCI) at Karnavati University (KU) - Oct 2023:</b></span> Provided insights into tools and techniques for Capture The Flag (CTF) competitions, followed by a practical CTF session.

➤ <span style="color: red;"><b>Hackers Community Meet-Up - Ahmedabad - Jul 2023:</b></span> Presented "Linux Privilege Escalation: Elevate Your Controls" and organized a Custom CTF for participants.

➤ <span style="color: red;"><b>Hackers Community Meet-Up - Ahmedabad - Jun 2023:</b></span> Delivered a session on The Art of Exploiting Logic Flaws.
<br>
These engagements reflect my dedication to sharing knowledge and promoting best practices in cybersecurity within the community.

  <div class="social-icons">
    <a href="https://im-rootkid.medium.com/" target="_blank"><i class="fab fa-medium"></i></a>
    <a href="https://github.com/im-rootkid" target="_blank"><i class="fab fa-github"></i></a>
    <a href="https://www.youtube.com/@im_rootkid" target="_blank"><i class="fab fa-youtube"></i></a>
    <a href="https://twitter.com/im_rootkid" target="_blank"><i class="fab fa-twitter"></i></a>
    <a href="https://www.instagram.com/im_rootkid/" target="_blank"><i class="fab fa-instagram"></i></a>
    <a href="https://www.linkedin.com/in/im-rootkid/" target="_blank"><i class="fab fa-linkedin"></i></a>
    <a href="mailto:info.rootkid@rootkid.in"><i class="fas fa-envelope"></i></a>
  </div>
      `,
        connect: `<h3 style="text-align: center;"><br>🔗🔒💻 Join Rootkid on social media to dive deeper into the world of cybersecurity. 🛡️🔐🔗<br></h3>
        <div class="social-icons">
        <a href="https://im-rootkid.medium.com/" target="_blank"><i class="fab fa-medium"></i></a>
        <a href="https://www.youtube.com/@im_rootkid" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>
        <a href="https://twitter.com/im_rootkid" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/im_rootkid/" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/im-rootkid/" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:info.rootkid@rootkid.in"><i class="fas fa-envelope"></i></a>
      </div>
      `
      };
  
    terminalBody.addEventListener("click", function() {
      commandInput.focus();
    });
  
    commandInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        clearTimeout(promptTimeout);
        const command = commandInput.value.trim().toLowerCase();
        commandInput.value = "";
        if (!promptShown) {
          promptShown = true;
        }
        processCommand(command);
        resetPromptTimeout();
      }
    });
  
    function processCommand(command) {
      const output = document.createElement("div");
      output.classList.add("command-output");
      output.innerHTML = `<pre>Rootkid@Kernel:~$ ${command}</pre>`;
  
      if (command === "help") {
        output.innerHTML += formatList({
          "cat [section]": "Display the content of the specified section.",
          "clear": "Clear the terminal output.",
          "help": "Show available commands.",
          "ls or dir": "List all available sections.",
          "exit": "Exit the terminal."
        });
      } else if (command === "clear") {
        outputElement.innerHTML = "";
        return;
      } else if (command === "ls" || command === "dir") {
        output.innerHTML += formatList({
          "About": "Information About Rootkid.",
          "Experience": "Rootkid's professional experiences including job roles and responsibilities.",
          "Certifications": "List of Rootkid's certifications with badges and details.",
          "Achievements": "Hall of Fame recognitions, keynote speaker, and other notable achievements of Rootkid.",
          "Connect": "Connect with Rootkid"
        });
      } else if (command.startsWith("cat ")) {
        const section = command.split(" ")[1];
        if (sections[section]) {
          output.innerHTML += `<pre>${sections[section]}</pre>`;
        } else {
          output.innerHTML += `<pre>cat: ${section}: No such file or directory</pre>`;
        }
      } else if (command === "exit") {
        outputElement.innerHTML = "";
        output.innerHTML = "<pre>Thank you for visiting!</pre>";
        commandInput.disabled = true;
        return;
      } else {
        output.innerHTML += `<pre>Command not found: ${command}</pre>`;
      }
  
      outputElement.appendChild(output);
      outputElement.scrollTop = outputElement.scrollHeight;
    }
  
    function formatList(commands) {
      let list = "<ul>";
      for (const [command, description] of Object.entries(commands)) {
        list += `<li><strong>${command}</strong> - ${description}</li>`;
      }
      list += "</ul>";
      return list;
    }
  
    function showPromptMessage() {
      if (!promptShown) {
        const message = document.createElement("p");
        message.id = "promptMessage";
        message.innerHTML = 'Welcome to RootKid Terminal 👨‍💻🤖 !!!! Type <span style="color: red;">"help"</span> to explore the web app!';
        outputElement.appendChild(message);
        outputElement.scrollTop = outputElement.scrollHeight;
      }
    }
  
    function resetPromptTimeout() {
      promptTimeout = setTimeout(showPromptMessage, 5000);
    }
  
    resetPromptTimeout();

   
  });
  
