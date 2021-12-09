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
  }
  stage('Build') {
    bat 'ng build'
  }

}
