#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
        node {
              label 'my-defined-label'
              customWorkspace '../../../../www/html/Vue/'
            }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Installing...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Building...'
                sh 'npm run build'
            }
        }
    }
}