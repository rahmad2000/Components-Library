
# ComponentsLearning
# ahmad_rafeh_coding_assignment12

# Overview
React Component Library: Utilizing TypeScript, it includes basic UI elements like Buttons and Labels, table components, and advanced elements like Hero Images and Cards.
Storybook Integration: For UI development and testing, with controls for dynamic property manipulation.
Testing: Each component is accompanied by basic tests, ensuring functionality and responsiveness.
Docker Setup: The app is containerized for easy deployment, accessible on localhost port 8083.

# Prerequisites
- Docker installed on your machine.

# Setup and Running
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Build the Docker image:
docker build -t ahmad_rafeh_ui_garden .
4. Run the Docker container:
docker run -d -p 8083:80 --name ahmad_rafeh_coding_assignment12 ahmad_rafeh_ui_garden
5. Open your web browser and go to `http://localhost:8083` to see the application running.
## Updating the Application
If you make changes to the React application, rebuild the Docker image and run the container again to reflect those changes.

# This is a Package file and can be run through: npm install @rahmad2000/Component-Library <-- But I have set it to Private so this option is out
# User can pull the file using: https://github.com/rahmad2000/Component-Library.git and then put the Component Folder in Your src file to start using components.