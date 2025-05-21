/// <reference types = "cypress"/>

export const doCreateAppWithRepoC2S = (auth_key, app_name) => {
    // ******************* CREATE AN APP WITH REPO (C2S) ******************** //
    cy.readFile('cypress/fixtures/api_create_app_with_repo_c2s.json').then((data) => {
        data.custom_name = app_name;
        cy.writeFile('cypress/fixtures/api_create_app_with_repo_c2s.json', JSON.stringify(data))
    })
    return cy.fixture('api_create_app_with_repo_c2s.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createAppWithRepoC2S'),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doCreateCodetospegenerate = (auth_key, app_id) => {
    return cy.fixture('api_add_codetospec_generate.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('creategeneratecodetospec1') + app_id + Cypress.env('creategeneratecodetospec2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doGetC2SErrorLog = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getC2SErrorlog1') + app_id + Cypress.env('getC2SErrorlog2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doGetC2SSummaryDetails = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getC2SErrorlog1') + app_id + Cypress.env('getC2SErrorlog2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const dogetDownloadErrorLogFile = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getDownloadErrorLogFile1') + app_id + Cypress.env('getDownloadErrorLogFile2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const dogetDownloadPRDMetaData = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getDownloadPRDMetaData1') + app_id + Cypress.env('getDownloadPRDMetaData2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const dogetErroLogDetails = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + '/api/v1/apps/' + app_id +'/code-to-spec/error-log-detail/' ,
        //url: Cypress.env('baseUrl') + Cypress.env('getErroLogDetails1') + app_id + Cypress.env('getErroLogDetails2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doCreateC2S = (auth_key, app_id) => {
    return cy.fixture('api_create_C2S.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createC2s1') + app_id + Cypress.env('createC2s2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const dogetC2SArchitectureActor = (auth_key, c2sId) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getC2SArchitectureActor1') + c2sId + Cypress.env('getC2SArchitectureActor2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doGetC2SArchitectureC4 = (auth_key, c2sId) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getC2SArchitectureC41') + c2sId + Cypress.env('getC2SArchitectureC42'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doGetC2SArchitectureCodeGraph = (auth_key, c2sId) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getC2SArchitectureCodeGraph1') + c2sId + Cypress.env('getC2SArchitectureCodeGraph2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doGetC2SArchitectureDatabases = (auth_key, c2sId) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getC2SArchitectureDatabases1') + c2sId + Cypress.env('getC2SArchitectureDatabases2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};