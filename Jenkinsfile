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
    stage('Static Analysis') {
      steps {
            sh ' /var/lib/jenkins/workspace/AngularApp/node_modules/eslint/bin/eslint.js -f checkstyle src > eslint.xml'
        }
        post {
            always {
                recordIssues enabledForFailure: true, aggregatingResults: true, tools: checkStyle(pattern: 'eslint.xml')
            }
        }
    }
    
  }
}
