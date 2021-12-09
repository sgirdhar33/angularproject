import jenkins.model.Jenkins
pipeline {
  agent any
  tools {nodejs "NodeJS"}

  stages{
    stage('Install') {
      steps {
        npm install
      }
    }
  
  stage('Build') {
    steps{
     ng build
    }
  }
    
   /* stage('Code Coverage') {
      steps{
        ng test --no-watch --code-coverage
      }
    }*/
  }
}
