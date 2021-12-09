import jenkins.model.Jenkins
pipeline {
  agent any
  tools {nodejs "NodeJS"}

  stages{
    stage('Install') {
      steps {
        dnf install npm 
      }
    }
  
  stage('Build') {
    steps{
     dnf ng build
    }
  }
    
   /* stage('Code Coverage') {
      steps{
        ng test --no-watch --code-coverage
      }
    }*/
  }
}
