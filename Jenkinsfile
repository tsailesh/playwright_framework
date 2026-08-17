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
        stage('Checkout') {
            steps { checkout scm }
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

        // Optional: you can still keep a stage to generate Allure report,
        // but it's simpler to do it in post.
    }

    post {
        always {
            // 1. Publish Playwright HTML report (if it exists)
            publishHTML([
                reportDir: 'reports/html-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Test Report',
                keepAll: true,
                alwaysLinkToLastBuild: true,
                allowMissing: true    // don't fail if report missing
            ])

            // 2. Generate and publish Allure report
            // Assumes Allure plugin is installed and an Allure installation named 'allure' exists.
            // The results must be in 'reports/allure-results' (configured in playwright.config.ts)
            allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'reports/allure-results']]
            ])

            // 3. Clean workspace
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