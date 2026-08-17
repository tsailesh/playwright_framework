pipeline {
    agent any

    parameters {
        choice(
            name: 'ENVIRONMENT',
            choices: ['staging', 'prod'],
            description: 'Target environment'
        )

        choice(
            name: 'TEST_SUITE',
            choices: ['smoke', 'all', 'e2e', 'api', 'db', 'regression'],
            description: 'Test suite'
        )

        booleanParam(
            name: 'HEADED',
            defaultValue: false,
            description: 'Run Playwright tests in headed mode'
        )
    }

    environment {
        NODE_ENV = "${params.ENVIRONMENT}"
    }

    stages {

        // =========================================================
        // CHECKOUT
        // =========================================================

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        // =========================================================
        // PRINT PARAMETERS
        // =========================================================

        stage('Print Parameters') {
            steps {
                echo """
=========================================
🚀 Selected Parameters
=========================================
Environment : ${params.ENVIRONMENT}
Test Suite  : ${params.TEST_SUITE}
Headed      : ${params.HEADED}
=========================================
"""
            }
        }

        // =========================================================
        // NODE.JS
        // =========================================================

        stage('Setup Node.js') {
            steps {
                nodejs(nodeJSInstallationName: 'node-18') {
                    sh '''
                        echo "Node version:"
                        node --version

                        echo "NPM version:"
                        npm --version
                    '''
                }
            }
        }

        // =========================================================
        // INSTALL DEPENDENCIES
        // =========================================================

        stage('Install Dependencies') {
            steps {
                nodejs(nodeJSInstallationName: 'node-18') {
                    sh 'npm ci'
                }
            }
        }

        // =========================================================
        // INSTALL PLAYWRIGHT BROWSERS
        // =========================================================

        stage('Install Playwright Browsers') {
            steps {
                nodejs(nodeJSInstallationName: 'node-18') {
                    sh 'npx playwright install --with-deps chromium firefox webkit'
                }
            }
        }

        // =========================================================
        // RUN TESTS
        // =========================================================

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

                            def command

                            if (params.TEST_SUITE == 'all') {
                                command = "npm run test:${params.ENVIRONMENT}"
                            } else {
                                command = "npm run test:${params.ENVIRONMENT}:${params.TEST_SUITE}"
                            }

                            if (params.HEADED) {
                                command += " --headed"
                            }

                            echo """
=========================================
🧪 Running Playwright Tests
=========================================
Environment : ${params.ENVIRONMENT}
Test Suite  : ${params.TEST_SUITE}
Headed      : ${params.HEADED}
Command     : ${command}
=========================================
"""

                            sh command
                        }
                    }
                }
            }
        }

        // =========================================================
        // PRINT REPORT LINKS
        // =========================================================

        stage('Print Report Links') {
            steps {
                script {

                    def buildUrl = env.BUILD_URL ?: ''

                    echo """
=========================================
📊 Report Links
=========================================

Playwright HTML Report:
${buildUrl}Playwright_20Test_20Report

Allure Report:
${buildUrl}allure

=========================================
"""
                }
            }
        }
    }

    // =============================================================
    // POST ACTIONS
    // =============================================================

    post {

        always {

            script {

                echo """
=========================================
📌 BUILD STATUS BEFORE REPORTS
=========================================
Current Result : ${currentBuild.currentResult}
Raw Result     : ${currentBuild.result}
=========================================
"""

                // =================================================
                // PLAYWRIGHT HTML REPORT
                // =================================================

                echo "📊 Publishing Playwright HTML Report..."

                publishHTML([
                    reportDir: 'reports/html-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Test Report',
                    keepAll: true,
                    alwaysLinkToLastBuild: true,
                    allowMissing: true
                ])

                echo "✅ Playwright HTML Report published."


                // =================================================
                // ALLURE REPORT
                // =================================================

                echo "📊 Publishing Allure Report..."

                allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [
                        [
                            path: 'reports/allure-results'
                        ]
                    ]
                ])

                echo "✅ Allure Report published."


                // =================================================
                // STATUS AFTER REPORTS
                // =================================================

                echo """
=========================================
📌 BUILD STATUS AFTER REPORTS
=========================================
Current Result : ${currentBuild.currentResult}
Raw Result     : ${currentBuild.result}
=========================================
"""
            }

            // =====================================================
            // CLEAN WORKSPACE
            // =====================================================

            cleanWs()
        }

        // =========================================================
        // SUCCESS
        // =========================================================

        success {
            echo """
=========================================
✅ BUILD SUCCESS
=========================================
All Playwright tests passed successfully.
Reports have been published.
=========================================
"""
        }

        // =========================================================
        // FAILURE
        // =========================================================

        failure {
            echo """
=========================================
❌ BUILD FAILED
=========================================
One or more Playwright tests failed.

Please check:
- Jenkins Console Output
- Playwright HTML Report
- Allure Report
=========================================
"""
        }

        // =========================================================
        // UNSTABLE
        // =========================================================

        unstable {
            echo """
=========================================
⚠️ BUILD UNSTABLE
=========================================
Jenkins marked this build as UNSTABLE.

Check the console output above to determine
which step changed the build status.
=========================================
"""
        }
    }
}