pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/bhagwatsatyam/webhook_ci.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t flask-event-app .'
            }
        }

        stage('Run Container') {
            steps {
                bat '''
                docker stop flask-container || exit 0
                docker rm flask-container || exit 0
                docker run -d -p 3007:3007 --name flask-container flask-event-app
                '''
            }
        }

        stage('Run Tests') {
            steps {
                bat 'node test.js'
            }
        }

        stage('Cleanup') {
            steps {
                bat '''
                docker stop flask-container || exit 0
                docker rm flask-container || exit 0
                '''
            }
        }
    }

    post {
        success {
            echo '✅ BUILD SUCCESS'
        }
        failure {
            echo '❌ BUILD FAILED'
        }
    }
}