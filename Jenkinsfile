pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                sh '''
                cp -r * /var/www/project1/TechNova-Solutions/
                sudo systemctl reload nginx
                '''
            }
        }
    }
}
