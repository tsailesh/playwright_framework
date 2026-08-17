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
            description: 'Run headed?'
        )
    }

    environment {
        NODE_ENV = "${params.ENVIRONMENT}"
    }

    stages {

        /*
         * =========================================
         * CHECKOUT
         * =========================================
         */
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        /*
         * =========================================
         * PRINT PARAMETERS
         * =========================================
         */
        stage('Print Parameters') {
            steps {
                echo """
=========================================
🚀 Selected Parameters:
  ENVIRONMENT = ${params.ENVIRONMENT}
  TEST_SUITE  = ${params.TEST_SUITE}
  HEADED      = ${params.HEADED}
=========================================
"""
            }
        }

        /*
         * =========================================
         * NODE.JS
         * =========================================
         */
        stage('Setup Node.js') {
            steps {
                nodejs(nodeJSInstallationName: 'node-18') {
                    sh 'node --version'
                    sh 'npm --version'
                }
            }
        }

        /*
         * =========================================
         * INSTALL DEPENDENCIES
         * =========================================
         */
        stage('Install Dependencies') {
            steps {
                nodejs(nodeJSInstallationName: 'node-18') {
                    sh 'npm ci'
                }
            }
        }

        /*
         * =========================================
         * INSTALL PLAYWRIGHT BROWSERS
         * =========================================
         */
        stage('Install Playwright Browsers') {
            steps {
                nodejs(nodeJSInstallationName: 'node-18') {
                    sh 'npx playwright install --with-deps chromium firefox webkit'
                }
            }
        }

        /*
         * =========================================
         * RUN TESTS
         * =========================================
         */
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

                            /*
                             * IMPORTANT:
                             *
                             * We do NOT catch the Playwright exit code.
                             *
                             * Exit 0  -> Jenkins SUCCESS
                             * Exit != 0 -> Jenkins FAILURE
                             */
                            sh command
                        }
                    }
                }
            }
        }

        /*
         * =========================================
         * REPORT LINKS
         * =========================================
         */
        stage('Print Report Links') {
            steps {
                echo """
=========================================
📊 Report Links
=========================================

HTML Report:
${env.BUILD_URL}Playwright_20Test_20Report

Allure Report:
${env.BUILD_URL}allure

=========================================
"""
            }
        }
    }

    /*
     * =========================================
     * POST ACTIONS
     * =========================================
     */
    post {

        always {

            script {

                /*
                 * =========================================
                 * PUBLISH PLAYWRIGHT HTML REPORT
                 * =========================================
                 *
                 * Report publishing must NOT change
                 * the Playwright test result.
                 */
                catchError(
                    buildResult: 'SUCCESS',
                    stageResult: 'SUCCESS'
                ) {

                    publishHTML([
                        reportDir: 'reports/html-report',
                        reportFiles: 'index.html',
                        reportName: 'Playwright Test Report',
                        keepAll: true,
                        alwaysLinkToLastBuild: true,
                        allowMissing: true
                    ])
                }

                /*
                 * =========================================
                 * PUBLISH ALLURE REPORT
                 * =========================================
                 *
                 * Allure publishing must NOT change
                 * the Playwright test result.
                 */
                catchError(
                    buildResult: 'SUCCESS',
                    stageResult: 'SUCCESS'
                ) {

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
                }
            }

            /*
             * =========================================
             * CLEAN WORKSPACE
             * =========================================
             */
            cleanWs()
        }

        /*
         * =========================================
         * SUCCESS
         * =========================================
         */
        success {
            echo """
=========================================
✅ BUILD SUCCESS
=========================================
All Playwright tests passed.
Reports have been published.
=========================================
"""
        }

        /*
         * =========================================
         * FAILURE
         * =========================================
         */
        failure {
            echo """
=========================================
❌ BUILD FAILED
=========================================
One or more Playwright tests failed.

Check:
- Console output
- Playwright HTML Report
- Allure Report
=========================================
"""
        }

        /*
         * =========================================
         * UNSTABLE
         * =========================================
         */
        unstable {
            echo """
=========================================
⚠️ BUILD UNSTABLE
=========================================
Jenkins marked the build as UNSTABLE.

Check the Jenkins console output and
report publishing steps for the cause.
=========================================
"""
        }
    }
}