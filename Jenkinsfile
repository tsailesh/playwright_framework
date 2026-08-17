pipeline {
    agent any

    // Build parameters – user selects these when triggering the job
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
            description: 'Run tests in headed mode? (for debugging)'
        )
    }

    environment {
        // Inject credentials from Jenkins secrets
        // Create these as "Secret text" credentials with IDs 'test-username' and 'test-password'
        TEST_USERNAME = credentials('test-username')
        TEST_PASSWORD = credentials('test-password')
        // Set NODE_ENV to the selected environment (staging or prod)
        NODE_ENV = "${params.ENVIRONMENT}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Clones the repository configured in the job
                checkout scm
            }
        }

        stage('Setup Node.js') {
            steps {
                // Use the NodeJS plugin – ensure a Node.js installation named 'node-18' exists in Jenkins
                nodejs(nodeJSInstallationName: 'node-18') {
                    sh 'node --version'
                    sh 'npm --version'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                nodejs(nodeJSInstallationName: 'node-18') {
                    // Clean install – uses package-lock.json for reproducible builds
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
                        // Build the npm command dynamically based on parameters
                        def suite = params.TEST_SUITE
                        def env = params.ENVIRONMENT
                        def headed = params.HEADED ? '--headed' : ''
                        // Map test suite to npm script: test:${env}:${suite}
                        // For 'all', use just test:${env}
                        def command
                        if (suite == 'all') {
                            command = "npm run test:${env} ${headed}"
                        } else {
                            command = "npm run test:${env}:${suite} ${headed}"
                        }
                        echo "Running: ${command}"
                        sh command
                    }
                }
            }
        }

        stage('Publish Reports') {
            steps {
                // Use HTML Publisher Plugin to show Playwright's built‑in report
                publishHTML([
                    reportDir: 'reports/html-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Test Report',
                    reportTitles: '',
                    keepAll: true,
                    alwaysLinkToLastBuild: true,
                    allowMissing: false
                ])
                // If you also use Allure, uncomment the following:
                // allure([
                //     includeProperties: false,
                //     jdk: '',
                //     properties: [],
                //     reportBuildPolicy: 'ALWAYS',
                //     results: [[path: 'reports/allure-results']]
                // ])
            }
        }
    }

    post {
        always {
            // Clean up workspace to save disk space
            cleanWs()
        }
        success {
            echo '✅ All tests passed!'
        }
        failure {
            echo '❌ Some tests failed. Check the report above.'
        }
    }
}