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
            choices: ['smoke','all','e2e', 'api', 'db', 'regression'],
            description: 'Test suite to run'
        )
        booleanParam(
            name: 'HEADED',
            defaultValue: false,
            description: 'Run tests in headed mode?'
        )
    }

    environment {
        NODE_ENV = "${params.ENVIRONMENT}"
    }

    stages {
        stage('Checkout') { steps { checkout scm } }

        stage('Print Parameters') {
            steps {
                echo "========================================="
                echo "🚀 Selected Parameters:"
                echo "  ENVIRONMENT = ${params.ENVIRONMENT}"
                echo "  TEST_SUITE  = ${params.TEST_SUITE}"
                echo "  HEADED      = ${params.HEADED}"
                echo "========================================="
            }
        }

        stage('Setup Node.js') {
            steps {
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
                        withCredentials([
                            usernamePassword(
                                credentialsId: 'test-credentials',
                                usernameVariable: 'TEST_USERNAME',
                                passwordVariable: 'TEST_PASSWORD'
                            )
                        ]) {
                            def command = (params.TEST_SUITE == 'all')
                                ? "npm run test:${params.ENVIRONMENT} ${params.HEADED ? '--headed' : ''}"
                                : "npm run test:${params.ENVIRONMENT}:${params.TEST_SUITE} ${params.HEADED ? '--headed' : ''}"
                            echo "Running: ${command}"
                            sh command
                        }
                    }
                }
            }
        }
    }

    post {
        always {
            // Publish Playwright HTML report
            publishHTML([
                reportDir: 'reports/html-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Test Report',
                keepAll: true,
                alwaysLinkToLastBuild: true,
                allowMissing: true
            ])

            // Publish Allure report – uses the default Allure installation
            // If you have multiple installations, you can specify the tool name
            // by adding 'tool: 'your-tool-name'' – but this may not be supported
            // in older plugin versions. Remove it if you get "Invalid parameter" error.
            allure([
                // tool: 'allure',   // <-- commented out to avoid error
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'reports/allure-results']]
            ])

            cleanWs()
        }
        success {
            echo '✅ All tests passed!'
        }
        failure {
            echo '❌ Some tests failed. Check the reports above.'
        }
    }
}