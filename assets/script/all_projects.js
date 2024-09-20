// Array of project objects
const projects = [
    {
      title: "Perforyou",
      description: "A perfume recommendation system using an Item2Vec model.",
      image: "/assets/img/perfume.jpg",
      line1:"Collected 4 original raw datasets consisting of item and user data by data-scraping 2 websites.",
      line2:"Trained the Item2Vec model on dataset and achieved a Recall@20 that exceeded the other attempted models by 11.5%.",
      githubLink: "https://github.com/lee14334/",
      date: "2022-04-01"
    },
    {
      title: "Pitch Predictor",
      description: "An ensemble ANN+RNN model that predicts the incoming pitch of a baseball player.",
      image: "/assets/img/baseball.jpg",
      line1:"Coded and tested multiple neural network architectures including ANNs and RNNs.",
      line2:"Developed the final model and tuned the hyperparameters, increasing predictive accuracy by 44%.",
      githubLink: "https://github.com/lee14334/",
      date: "2020-07-01"
    },
    {
      title: "Liver Disease Detector",
      description: "A liver disease detector using machine learning models.",
      image: "/assets/img/liver.jpg",
      line1:"Conducted data augmentation on ultrasound liver images using translations, rotations, Gaussian noise, etc.",
      line2:"Trained and tested an SVM and CNN as well as fine-tuned pre-trained deep learning models.",
      githubLink: "https://github.com/lee14334/",
      date: "2023-04-01"
    }
  ];

  // Sort projects
  projects.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Function to create the project HTML and insert it into the page
  function loadProject() {
    const projectContainer = document.getElementById('project-container');
    const mostRecent = projects[0];

    projectContainer.innerHTML = `
        <div class="col s12 m6 l4">
            <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                <img alt="Screenshot of  web app" src="${mostRecent.image}" style="height: 100%; width: 100%" class="activator" />
              </div>
              <div class="card-content">
                <span class="card-title activator teal-text hoverline">${mostRecent.title}<i
                    class="mdi-navigation-more-vert right"></i></span>
                <p>
                  ${mostRecent.description}
                </p>
              </div>
              <div class="card-reveal">
                <span class="card-title teal-text"><small>Accomplishments</small><i
                    class="mdi-navigation-close right"></i></span>
                <ul>
                  <li> ${mostRecent.line1}</li>
                  <li> ${mostRecent.line2}</li>
                </ul>
                <div class="card-action">
                  <a aria-label="Visit the GitHub repo for  project" href="${mostRecent.githubLink}"
                    target="_blank" data-position="top" data-tooltip="View Source"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-github"></i></a>
                </div>
              </div>
            </div>
          </div>`
          ;
  }

  // Load the first project when the page loads
  window.onload = loadProject;
  let displayedProjects = 1;

  // Function to load remaining projects
  function allProjects() {
    const projectContainer = document.getElementById('project-container');

    for (let i = 1; i < projects.length; i++){
        const project = projects[i]
        displayedProjects++;

        projectContainer.innerHTML += `
        <div class="col s12 m6 l4">
            <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                <img alt="Screenshot of  web app" src="${project.image}" style="height: 100%; width: 100%" class="activator" />
              </div>
              <div class="card-content">
                <span class="card-title activator teal-text hoverline">${project.title}<i
                    class="mdi-navigation-more-vert right"></i></span>
                <p>
                  ${project.description}
                </p>
              </div>
              <div class="card-reveal">
                <span class="card-title teal-text"><small>Accomplishments</small><i
                    class="mdi-navigation-close right"></i></span>
                <ul>
                  <li> ${project.line1}</li>
                  <li> ${project.line2}</li>
                </ul>
                <div class="card-action">
                  <a aria-label="Visit the GitHub repo for  project" href="${project.githubLink}"
                    target="_blank" data-position="top" data-tooltip="View Source"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-github"></i></a>
                </div>
              </div>
            </div>
          </div>`
          ;
    }

    if (displayedProjects >= projects.length) {
        document.getElementById('load-more').style.display = 'none';
    } else {
      document.getElementById('load-more').style.display = 'block';
    }
    

}

// Event listener for the "Load More" button
document.getElementById('load-more').addEventListener('click', allProjects);
