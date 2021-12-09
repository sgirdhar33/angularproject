import jenkins.model.Jenkins
pipeline {
  agent any
  tools {nodejs "NodeJS"}

  stages{
    stage('Install') {
      steps {
        sh "npm install"
      }
    }
  
  stage('Build') {
    steps{
     sh "ng build"
    }
  }
    
    stage('Code Coverage') {
      steps{
        sh "ng test --no-watch --code-coverage"
      }
    }
  }
}
