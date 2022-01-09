import jenkins.model.Jenkins
pipeline {
  agent any
  tools {nodejs "NodeJS"}

  stages{
    stage('Install') {
      steps {
        bat 'npm install -g'
        bat 'npm install eslint -g'
        bat 'npm install -g @angular/cli@latest'
        bat 'npm install -g gulp-cli'
        bat 'npm install --save-dev gulp-zip'
      }
    }
  
  stage('Build') {
    steps {
     bat 'ng build && gulp compress'
    }
  }
    
  /*stage('Code Coverage') {
      steps{
        sh "ng test --no-watch --code-coverage"
      }
    }*/
    
    /*stage('Static Analysis') {
      steps {
            bat 'node node_modules/eslint/bin/eslint.js -f checkstyle src > eslint.xml'
        }
        post {
            always {
                recordIssues enabledForFailure: true, aggregatingResults: true, tools: checkStyle(pattern: 'eslint.xml')
            }
        }
    }*/
    
  }
}
