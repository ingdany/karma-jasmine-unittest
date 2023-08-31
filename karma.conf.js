module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine','@angular-devkit/build-angular'],
        files: [
            {
                pattern:'src/**/*.spec.ts',
                type: 'js',
                included: true
            },
        ],

        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-html-reporter'),
            require('karma-junit-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],

        client: {
            clearContext: false
        },

        reporters: ['progress', 'html', 'junit'],
        
        htmlReporter: {
            outputDir: 'html', 
            templatePath: null, 
            focusOnFailures: true, 
            namedFiles: false,
            pageTitle: null,
            urlFriendlyName: false,
            reportName: 'summary',

            preserveDescribeNesting: false,
            foldAll: false,
        },
    
        junitReporter: {
            outputDir: 'xml',
            outputFile: 'junit.xml',
            useBrowserName: false, 
            suite: 'Custom Suite Name',           
            nameFormatter: undefined,
            classNameFormatter: undefined,
            properties: {},
            xmlVersion: null,
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,

        browsers: ['ChromeHeadless'],
        // browsers: ['ChromeHeadlessNoSandbox'],
        // customLaunchers: {
        //     ChromeHeadlessNoSandbox: {
        //     base: 'ChromeHeadless',
        //     flags: ['--no-sandbox']
        //     }        
        // },        

        singleRun: true,
    });
};