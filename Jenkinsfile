#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
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