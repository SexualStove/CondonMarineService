#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }

    stages {
        stage('Install') {
            steps {
                echo 'Installing...'
                sh 'sudo npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'sudo npm run build'
            }
        }

    }
}