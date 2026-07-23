pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                sh '''
                echo "Jenkinsfile Version 2"
                cp -r * /var/www/project1/TechNova-Solutions/
                '''
            }
        }
    }
}
