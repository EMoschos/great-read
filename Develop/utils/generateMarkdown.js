// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ![License](https://img.shields.io/static/v1?label=Licesne&message=${data.license}&color=green)
  

  ## Description ✏️
  
  ${data.description}
  
  ## Table of Contents 📚
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#Contributing)
  * [Testing](#Testing)
  * [Questions](#Questions)
  
  ## Installation 

  \`\`\`
  📥 ${data.installation}
  \`\`\`

  ## Usage 

  \`\`\`
  ▶️ ${data.usage}
  \`\`\`

  ## License 
  
  📜 License Code: ${data.license}

  For detailed information on license [Click Here](https://opensource.org/licenses/${data.license})
  
  ## Contributing
  
  👌 ${data.contributing}
  
  ## Testing 

  \`\`\`
  ✔️ ${data.test}
  \`\`\`

  ## Questions 
  
  Direct questions to me via email 📧 at [${data.email}](${data.email}).  Please use "${data.title} questions" in the subject and I will hopefully return a response within 48hrs.

  More information can be found at my [GitHub Profile](https://github.com/${data.github}).
  
---
This README was created by the "Great-Read" 📝 Node.js app.  Developed by Eleftherios Moschos
`;
};

module.exports = {
  generateMarkdown: generateMarkdown
};
