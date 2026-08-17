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
        // Jenkins credentials
        TEST_USERNAME = credentials('test-username')
        TEST_PASSWORD = credentials('test-password')

        // Selected environment
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
                    // macOS Jenkins agent
                    sh 'npx playwright install chromium firefox webkit'
                }
            }
        }

        stage('Run Tests') {
            steps {
                nodejs(nodeJSInstallationName: 'node-18') {
                    script {
                        def suite = params.TEST_SUITE
                        def environment = params.ENVIRONMENT
                        def headed = params.HEADED ? '--headed' : ''

                        def command

                        if (suite == 'all') {
                            command = "npm run test:${environment} ${headed}"
                        } else {
                            command = "npm run test:${environment}:${suite} ${headed}"
                        }

                        echo "Environment: ${environment}"
                        echo "Test Suite: ${suite}"
                        echo "Headed: ${params.HEADED}"
                        echo "Running: ${command}"

                        sh command
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
                    allowMissing: true
                ])
            }
        }

        /*
         * Keep cleanWs() inside a stage so Jenkins has
         * the workspace/FilePath context required by the step.
         */
        stage('Cleanup') {
            steps {
                cleanWs(
                    deleteDirs: true,
                    disableDeferredWipeout: true,
                    notFailBuild: true
                )
            }
        }
    }

    post {
        success {
            echo '✅ All tests passed!'
        }

        failure {
            echo '❌ Some tests failed. Check the Jenkins console and Playwright report.'
        }

        aborted {
            echo '⚠️ Build was aborted.'
        }
    }
}