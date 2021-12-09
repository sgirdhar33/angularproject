import jenkins.model.Jenkins
pipeline {
  agent any
  tools {nodejs "NodeJS"}

  stages{
    stage('Install') {
      steps {
        bat 'npm install'
      }
    }
  
  stage('Build') {
    steps{
    bat 'ng build'
    }
  }
    
    stage('Code Coverage') {
      steps{
        bat 'ng test --no-watch --code-coverage'
      }
    }
  }
}
