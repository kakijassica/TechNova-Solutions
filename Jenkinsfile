pipeline {
    agent any

    stages {
        stage('Debug') {
            steps {
                sh '''
                whoami
                pwd
                ls -la
                touch test_from_pipeline.txt
                cp test_from_pipeline.txt /var/www/project1/TechNova-Solutions/
                '''
            }
        }
    }
}
