const techDomains = [
    {
        name: "Frontend",
        technologies: [
            { name: "HTML", logo: "html.png", description: "Markup language." },
            { name: "CSS", logo: "css.png", description: "Styling language." },
            { name: "JavaScript", logo: "javascript.png", description: "Scripting language." },
            { name: "React", logo: "react.png", description: "UI library." },
            { name: "Bootstrap", logo: "bootstrap_1.jpeg", description: "UI framework" },
            { name: "jQuery", logo: "jquery.jpeg", description: "UI framework" },
            
        ],
    },
    {
        name: "Backend",
        technologies: [
            { name: "Spring", logo: "springboot.png", description: "Spring framework." },
            
            { name: "CURD", logo: "crud_download.png", description: "JavaScript runtime." },
            { name: "Ollama", logo: "ollama.png", description: "Ollama local ai llm model." },
            { name: "Spring AI", logo: "springai.png", description: "Spring framework." },
            { name: "Kafka", logo: "kafka.png", description: "Messaging queue" },
            { name: "Spring Boot", logo: "spring_1.png", description: "Spring framework." },
            
        ],
    },
    {
        name: "Database",
        technologies: [
            { name: "SQL", logo: "sql.png", description: "Relational database." },
            { name: "NoSQL", logo: "nosql.png", description: "Non-relational database." },
            { name: "MongoDB", logo: "mongodb.png", description: "NoSQL database." },
        ],
    },
    {
        name: "Programming Language",
        technologies: [
            { name: "Java", logo: "java.jpeg", description: "Language" },
            { name: "C", logo: "image_skills_c-programming.png", description: "Language" },
            { name: "C++", logo: "image_skills_c-plus-programming.png", description: "Language" },
            { name: "Python", logo: "image_skills_python-programming-language.png", description: "Language" },
        ],
    },
    
    {
        name: "Version Control System",
        technologies: [
            { name: "Git", logo: "git_1.png", description: "Version control." },
            { name: "GitLab", logo: "gitlab.png", description: "Version control." },
            { name: "GitHub", logo: "github.jpeg", description: "Version control." },
            { name: "BitBucket", logo: "bitbucket.png", description: "Version control." },
            { name: "Jira", logo: "jira.png", description: "Task Ticket Management" },
        ],
    },
    {
        name: "Containerization",
        technologies: [
            // { name: "AWS", logo: "aws.png", description: "Cloud services." },
            { name: "Docker", logo: "docker.png", description: "Containerization platform." },
            { name: "Kubernetes", logo: "kubernetes.png", description: "Orchestration tool." },
        ],
    },

    {
        name: "Microsoft Office",
        technologies: [
            { name: "Excel", logo: "msexcel.jpeg", description: "Spreadsheet software." },
            { name: "PowerPoint", logo: "mspowerpoint.jpeg", description: "Presentation software." },
            { name: "Word", logo: "msword.jpeg", description: "Wordsheet software." },
        ],
    },
    {
        name: "Testing",
        technologies: [
            { name: "jMeter", logo: "jmeter.png", description: "Testing tool" },
            { name: "JUnit", logo: "junit.png", description: "API load testing tool" },
            { name: "Mockito", logo: "mockito.jpeg", description: "API testing" },
        ],
    },
    {
        name: "Others",
        technologies: [
            { name: "AWS", logo: "aws.png", description: "Cloud services." },
            { name: "Eclipse", logo: "eclipse.png", description: "IDE." },
            { name: "VS Code", logo: "vscode.png", description: "IDE." },
            { name: "Intellij", logo: "intellij.jpeg", description: "IDE" },
            { name: "STS", logo: "springtoolsuits.jpeg", description: "IDE" },
            { name: "Scrum", logo: "scrum.png", description: "Methologies" },
        ],
    },
];

const domainsContainer = document.querySelector('.domains-container');

techDomains.forEach(domain => {
    const domainCard = document.createElement('div');
    domainCard.classList.add('domain-card');
    domainCard.innerHTML = `
        <h2>${domain.name}</h2>
        <div class="tech-grid">
            ${domain.technologies.map(tech => `
                <div class="tech-item">
                    <img src="/Images/${tech.logo}" alt="${tech.name}">
                    <p>${tech.name}</p>
                </div>
            `).join('')}
        </div>
    `;

    // Calculate card size based on the number of technologies
    const techCount = domain.technologies.length;
    const cardWidth = Math.max(200, techCount * 100); // Adjust as needed
    domainCard.style.minWidth = `${cardWidth}px`;

    domainsContainer.appendChild(domainCard);
});