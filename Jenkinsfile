pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout main
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    def customImageName = "node-app:latest"  // Define your custom image name
                    def dockerfile = "Dockerfile"  // Path to your Dockerfile

                    docker.build(customImageName, "-f ${dockerfile} .")
                }
            }
        }
        stage('Deploy') {
            steps {
                // Add deployment steps here
            }
        }
    }
}
