/** 
 * Arindam Roy
 * arindam.roy.developer@gmail.com
 * https://github.com/dev-arindam-roy 
 * */
const allDesignations = [
    "Developer", 
    "Designer", 
    "QA/Tester", 
    "Manager", 
    "TL/Senior Dev", 
    "DevOps",
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "UI/UX Designer",
    "Network Administrator",
    "DevOps Engineer",
    "Cybersecurity Analyst",
    "Database Administrator",
    "IT Project Manager",
    "Systems Analyst",
    "IT Consultant",
    "Web Developer"
];
const clientNames = [
    "John Doe",
    "Alice Smith",
    "Michael Johnson",
    "Emily Brown",
    "Robert Davis",
    "Olivia Wilson",
    "David Anderson",
    "Sophia Thomas",
    "James Jackson",
    "Ava Martinez",
    "William Lee",
    "Mia Harris",
    "Joseph Taylor",
    "Charlotte Clark",
    "Daniel Rodriguez",
    "Amelia Lewis",
    "Matthew Walker",
    "Harper Young",
    "Andrew Hall",
    "Abigail Baker"
];
const allProjects = [
    "E-commerce Website",
    "Blogging Platform",
    "Social Media App",
    "Online Marketplace",
    "Travel Booking Website",
    "Food Delivery App",
    "Portfolio Website",
    "Event Management System",
    "Online Learning Platform",
    "Job Board Website",
    "Real Estate Listing Website",
    "Weather Forecast App",
    "Task Management Tool",
    "Music Streaming Platform",
    "Fitness Tracking App",
    "Ecommerce Website",
    "Social Media Platform",
    "Blogging Platform",
    "Online Learning Platform",
    "Event Management System",
    "Job Portal",
    "Real Estate Listing Website",
    "Food Delivery App",
    "Travel Booking Website",
    "Music Streaming Platform",
    "Task Management Application",
    "Fitness Tracker Website",
    "Portfolio Website",
    "Online Marketplace",
    "Appointment Booking System"
];
const allTasks = [
    {
      name: "Wireframing",
      description: "Creating visual representations (wireframes) of web pages or app screens to establish the basic structure and layout."
    },
    {
      name: "Front-end Development",
      description: "Implementing the user interface and interaction of a website or application using HTML, CSS, and JavaScript."
    },
    {
      name: "Back-end Development",
      description: "Building the server-side logic and database integration of a website or application using technologies like Node.js and databases like MongoDB or MySQL."
    },
    {
      name: "Database Design",
      description: "Designing and structuring the database schema and relationships to store and retrieve data efficiently."
    },
    {
      name: "API Development",
      description: "Building and documenting APIs (Application Programming Interfaces) to enable communication between different software systems."
    },
    {
      name: "Testing and Debugging",
      description: "Identifying and fixing issues, bugs, or errors in the code and conducting comprehensive testing to ensure proper functionality."
    },
    {
      name: "Responsive Design",
      description: "Optimizing websites or applications to be visually appealing and usable across various devices and screen sizes."
    },
    {
      name: "Security Implementation",
      description: "Implementing security measures like authentication, authorization, and data encryption to protect against vulnerabilities and unauthorized access."
    },
    {
      name: "Performance Optimization",
      description: "Analyzing and optimizing the speed and performance of a website or application by minimizing load times and improving efficiency."
    },
    {
      name: "Content Management System Integration",
      description: "Integrating a content management system like WordPress or Drupal to enable easy content creation, editing, and management."
    },
    {
      name: "Version Control",
      description: "Using version control systems like Git to manage and track changes to the codebase, enabling collaboration and easy rollback if needed."
    },
    {
      name: "Deployment and Hosting",
      description: "Deploying the web application to a server or cloud platform and setting up proper hosting and configuration for public access."
    },
    {
      name: "Search Engine Optimization (SEO)",
      description: "Implementing techniques to improve the visibility and ranking of a website in search engine results."
    },
    {
      name: "Analytics and Tracking",
      description: "Integrating tools like Google Analytics to track and analyze user behavior, traffic, and conversions on the website or application."
    },
    {
      name: "User Experience (UX) Design",
      description: "Designing the overall user experience, including user flows, interaction design, and usability testing."
    }
];
const allResources = [
    "Arindam Roy",
    "Linus Torvalds",
    "Bill Gates",
    "Mark Zuckerberg",
    "Tim Berners-Lee",
    "Elon Musk",
    "Arindam Roy",
    "Sundar Pichai",
    "Satya Nadella",
    "Ada Lovelace",
    "Grace Hopper",
    "Arindam Roy",
    "James Gosling",
    "Guido van Rossum",
    "Larry Page",
    "Sergey Brin",
    "Arindam Roy",
    "Jeff Dean",
    "Brendan Eich",
    "Yukihiro Matsumoto",
    "Anders Hejlsberg",
    "Arindam Roy",
    "John Carmack",
    "Arindam Roy",
    "Martin Fowler",
    "Kent Beck",
    "Arindam Roy"
];
const billingPlans = [
    {
      name: "Basic Plan",
      description: "Ideal for small businesses with basic IT needs",
      price: 99.99,
      features: ["24/7 Helpdesk Support", "Hardware Maintenance", "Software Updates"],
    },
    {
      name: "Standard Plan",
      description: "Perfect for medium-sized businesses with growing IT demands",
      price: 199.99,
      features: ["24/7 Helpdesk Support", "Hardware Maintenance", "Software Updates", "Network Monitoring", "Data Backup"],
    },
    {
      name: "Premium Plan",
      description: "Tailored for large enterprises with comprehensive IT requirements",
      price: 399.99,
      features: ["24/7 Helpdesk Support", "Hardware Maintenance", "Software Updates", "Network Monitoring", "Data Backup", "Security Audits", "Disaster Recovery"],
    }
];
const statusArr = ["Active", "Inactive"];
  
function newJson() {
    displayPlaceholder();
    setTimeout(renderJson, 3000);
}

function renderJson() {
    let jsonString = createNewJson();
    document.getElementById('jsonOutput').innerHTML = `<pre class="line-numbers" style="border-radius: 0; margin-top: 0;"><code class="language-json">${jsonString}</code></pre>`;
    Prism.highlightAll();
    document.getElementById('jsonOutputBox').scrollTo({top: 0, behavior: 'smooth'});
}

function createNewJson() {
    let finalArr = {};

    finalArr['clients'] = [];
    for (let i = 0; i < 10; i++) {
      let client = {};
      client['name'] = clientNames[Math.floor(Math.random() * clientNames.length)];
      client['project_name'] = allProjects[Math.floor(Math.random() * allProjects.length)];
      client['dates'] = {'start_date' : startDate(), 'end_date' : endDate()};
      client['billing_plan'] = billingPlans[Math.floor(Math.random() * billingPlans.length)];

      client['tasks'] = [];
      for (let j = 0; j < Math.floor(Math.random() * (10 - 5) ) + 5; j++) {
        let task = {}
        let getTaskObj = allTasks[Math.floor(Math.random() * allTasks.length)];
        task['name'] = getTaskObj.name;
        task['description'] = getTaskObj.description;
        task['bugs'] = {'inProgress' : Math.floor(Math.random() * 100), 'completed' : Math.floor(Math.random() * 100), 'done' : Math.floor(Math.random() * 100)};
        
        task['resources'] = [];
        for (let k = 0; k < Math.floor(Math.random() * (5 - 3) ) + 3; k++) {
            let resource = {};
            resource['name'] = allResources[Math.floor(Math.random() * allResources.length)];
            resource['designation'] = allDesignations[Math.floor(Math.random() * allDesignations.length)];
            resource['info'] = {'experience' : Math.floor(Math.random() * 10) + ' Years', 'skill' : Math.floor(Math.random() * 100) + '%'};
            task['resources'].push(resource);
        }
    
        client['tasks'].push(task);
      }
      
      finalArr['clients'].push(client);
    }
    finalArr['status'] = statusArr[Math.floor(Math.random() * statusArr.length)];
    finalArr['report_generate_date'] = currentRandomDate();

    return JSON.stringify(finalArr, null, 4);
}

function currentRandomDate() {
    return new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)).toLocaleDateString('en-US');
}

function startDate() {
    return new Date(new Date('2018-02-12T01:57:45.271Z').getTime() + Math.random() * (new Date('2020-02-12T01:57:45.271Z').getTime() - new Date('2019-02-12T01:57:45.271Z').getTime())).toLocaleDateString('en-US');
}

function endDate() {
    return new Date(new Date('2024-02-12T01:57:45.271Z').getTime() + Math.random() * (new Date('2026-02-12T01:57:45.271Z').getTime() - new Date('2024-02-12T01:57:45.271Z').getTime())).toLocaleDateString('en-US');
}

function displayPlaceholder() {
    let placeholder = `<div class="ph-item" style="padding: 8px;">
        <div class="ph-col-12">
        <div class="ph-row">
            <div class="ph-col-6 big"></div>
            <div class="ph-col-6 empty big"></div>
            <div class="ph-col-4"></div>
            <div class="ph-col-8 empty"></div>
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-12"></div>
            <div class="ph-col-6 big"></div>
            <div class="ph-col-6 empty big"></div>
            <div class="ph-col-4"></div>
            <div class="ph-col-8 empty"></div>
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-12"></div>
            <div class="ph-col-6 big"></div>
            <div class="ph-col-6 empty big"></div>
            <div class="ph-col-4"></div>
            <div class="ph-col-8 empty"></div>
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-12"></div>
            <div class="ph-col-6 big"></div>
            <div class="ph-col-6 empty big"></div>
            <div class="ph-col-4"></div>
            <div class="ph-col-8 empty"></div>
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-12"></div>
        </div>
    </div>`;
    document.getElementById('jsonOutput').innerHTML = placeholder;
}
newJson();
