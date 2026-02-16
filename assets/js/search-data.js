// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "my github repositories",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-beyond-position-control-the-philosophy-of-interaction",
        
          title: "Beyond Position Control: The Philosophy of Interaction",
        
        description: "Basic PD Controller for Robot",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/trajectory-generation/";
          
        },
      },{id: "post-beyond-position-control-the-philosophy-of-interaction",
        
          title: "Beyond Position Control: The Philosophy of Interaction",
        
        description: "Basic PD Controller for Robot",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/cartesian-impedance-control/";
          
        },
      },{id: "post-paper-review-quot-sim-to-real-learning-agile-locomotion-for-quadruped-robots-quot",
        
          title: "Paper Review: &quot;Sim-to-Real: Learning Agile Locomotion For Quadruped Robots&quot;",
        
        description: "Focusing on the factors that impacts to sim-to-real gap",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/review03/";
          
        },
      },{id: "post-paper-review-quot-demonstrating-berkeley-humanoid-lite-an-open-source-accessible-and-customizable-3d-printed-humanoid-robot-quot",
        
          title: "Paper Review: &quot;Demonstrating Berkeley Humanoid Lite: An Open-source, Accessible, and Customizable 3D-printed Humanoid...",
        
        description: "Focusing on Actuator Design &amp; Evaluation Process",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/review02/";
          
        },
      },{id: "post-paper-review-quot-design-principles-for-energy-efficient-legged-locomotion-and-implementation-on-the-mit-cheetah-robot-quot",
        
          title: "Paper Review: &quot;Design Principles for Energy Efficient Legged Locomotion and Implementation on the...",
        
        description: "Focusing on Actuator Design &amp; Energy Flow Cycle",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/review01/";
          
        },
      },{id: "post-a-cycloidal-quasi-direct-drive-actuator-design-fabrication-and-control",
        
          title: "A Cycloidal Quasi-Direct Drive Actuator Design, Fabrication and Control",
        
        description: "Cycloidal-QDD Actuator, Customized BLDC Motor, FOC Controller, High Backdrivability, Responsiveness and High Dynamics &amp; Agility",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/qdd-actuator/";
          
        },
      },{id: "post-applications-of-a-proprioceptive-actuator-3dof-robotic-arm-amp-humanoid-upper-body-robot-through-impedance-control",
        
          title: "Applications of A Proprioceptive Actuator:3DoF Robotic Arm &amp; Humanoid Upper Body Robot through...",
        
        description: "This is an extension of my previous project, &#39;A Low-Cost Modular 3D-Printed Proprioceptive Actuator for HRI&#39;",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/dof-robotic-arm-impedance-control/";
          
        },
      },{id: "post-a-low-cost-modular-3d-printed-proprioceptive-actuator-for-hri",
        
          title: "A Low-Cost Modular 3D-Printed Proprioceptive Actuator for HRI",
        
        description: "10:1 ratio Reducer, BLDC Motor, FOC Controller and Proprioceptive Sense",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/modular-3d-printed-proprioceptive-actuators/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%75%73%74%69%6E%6C%75%69%73@%64%67%75.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/JeongSeoJin", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/engineering.seojin_n.n", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@engineeringseojin", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
