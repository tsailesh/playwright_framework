pipeline {
    agent any

    parameters {
        choice(
            name: 'ENVIRONMENT',
            choices: ['staging', 'prod'],
            description: 'Target environment (staging or prod)'
        )
        choice(
            name: 'TEST_SUITE',
            choices: ['all', 'smoke', 'e2e', 'api', 'db', 'regression'],
            description: 'Test suite to run'
        )
        booleanParam(
            name: 'HEADED',
            defaultValue: false,
            description: 'Run tests in headed mode?'
        )
    }

    environment {
        // Only set NODE_ENV here; credentials will be injected later
        NODE_ENV = "${params.ENVIRONMENT}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup Node.js') {
            steps {
                // Use NodeJS plugin; ensure 'node-18' is configured in Jenkins Tools
                nodejs(nodeJSInstallationName: 'node-18') {
                    sh 'node --version'
                    sh 'npm --version'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                nodejs(nodeJSInstallationName: 'node-18') {
                    sh 'npm ci'
                }
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                nodejs(nodeJSInstallationName: 'node-18') {
                    sh 'npx playwright install --with-deps chromium firefox webkit'
                }
            }
        }

        stage('Run Tests') {
            steps {
                nodejs(nodeJSInstallationName: 'node-18') {
                    script {
                        // Inject the combined credential as environment variables
                        withCredentials([
                            usernamePassword(
                                credentialsId: 'test-credentials',
                                usernameVariable: 'TEST_USERNAME',
                                passwordVariable: 'TEST_PASSWORD'
                            )
                        ]) {
                            def suite = params.TEST_SUITE
                            def env = params.ENVIRONMENT
                            def headed = params.HEADED ? '--headed' : ''
                            def command = (suite == 'all')
                                ? "npm run test:${env} ${headed}"
                                : "npm run test:${env}:${suite} ${headed}"
                            echo "Running: ${command}"
                            sh command
                        }
                    }
                }
            }
        }

        stage('Publish Reports') {
            steps {
                publishHTML([
                    reportDir: 'reports/html-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Test Report',
                    reportTitles: '',
                    keepAll: true,
                    alwaysLinkToLastBuild: true,
                    allowMissing: false
                ])
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo '✅ All tests passed!'
        }
        failure {
            echo '❌ Some tests failed. Check the Jenkins console and Playwright report.'
        }
    }
}