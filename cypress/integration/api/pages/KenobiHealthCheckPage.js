/// <reference types = "cypress"/>

// Vector Store Endpoints
export const getVectorStoreStatus = (auth_key = null) => {
    const headers = {};
    
    // TODO: Enable authentication when required
    if (auth_key) {
        headers['Authorization'] = 'Token ' + auth_key;
    }
    
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/api/vector-store/status`,
        headers
    });
};

export const getVectorStoreSchema = (auth_key = null) => {
    const headers = {};
    
    // TODO: Enable authentication when required
    if (auth_key) {
        headers['Authorization'] = 'Token ' + auth_key;
    }
    
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/api/vector-store/schema`,
        headers
    });
};

export const getVectorStoreExport = (auth_key = null) => {
    const headers = {};
    
    // TODO: Enable authentication when required
    if (auth_key) {
        headers['Authorization'] = 'Token ' + auth_key;
    }
    
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/api/vector-store/export`,
        headers
    });
};

export const getVectorStoreExportStream = (auth_key = null) => {
    const headers = {};
    
    // TODO: Enable authentication when required
    if (auth_key) {
        headers['Authorization'] = 'Token ' + auth_key;
    }
    
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/api/vector-store/export/stream`,
        headers
    });
};

// Agent Endpoints
export const getAgentRecentQueries = (auth_key = null) => {
    const headers = {};
    
    // TODO: Enable authentication when required
    if (auth_key) {
        headers['Authorization'] = 'Token ' + auth_key;
    }
    
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/api/agent/recent_queries`,
        headers
    });
};

// Prompts Endpoints
export const getPromptsList = (auth_key = null) => {
    const headers = {};
    
    // TODO: Enable authentication when required
    if (auth_key) {
        headers['Authorization'] = 'Token ' + auth_key;
    }
    
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/api/prompts/list`,
        headers
    });
};

// Code Analysis Endpoints
export const getCodeOverallAnalysis = (auth_key = null) => {
    const headers = {};
    
    // TODO: Enable authentication when required
    if (auth_key) {
        headers['Authorization'] = 'Token ' + auth_key;
    }
    
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/api/code/overall-analysis`,
        headers
    });
};

// Discovery Endpoints
export const getDiscoveryIdentifyCoreFeatures = (auth_key = null) => {
    const headers = {};
    
    // TODO: Enable authentication when required
    if (auth_key) {
        headers['Authorization'] = 'Token ' + auth_key;
    }
    
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/api/discovery/identify-core-features`,
        headers
    });
};

export const getDiscoveryQuestions = (auth_key = null) => {
    const headers = {};
    
    // TODO: Enable authentication when required
    if (auth_key) {
        headers['Authorization'] = 'Token ' + auth_key;
    }
    
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/api/discovery/questions`,
        headers
    });
};

// Graph Cache Endpoints
export const getGraphCacheStats = (auth_key = null) => {
    const headers = {};
    
    // TODO: Enable authentication when required
    if (auth_key) {
        headers['Authorization'] = 'Token ' + auth_key;
    }
    
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/api/graph/cache/stats`,
        headers
    });
};

export const getGraphCacheDump = (auth_key = null) => {
    const headers = {};
    
    // TODO: Enable authentication when required
    if (auth_key) {
        headers['Authorization'] = 'Token ' + auth_key;
    }
    
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/api/graph/cache/dump`,
        headers
    });
};

// PRD Endpoints
export const getPrdList = (auth_key = null) => {
    const headers = {};
    
    // TODO: Enable authentication when required
    if (auth_key) {
        headers['Authorization'] = 'Token ' + auth_key;
    }
    
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/api/prd/list`,
        headers
    });
};

// Authentication Endpoints
export const getAuthWhoami = (auth_key = null) => {
    const headers = {};
    
    // TODO: Enable authentication when required
    if (auth_key) {
        headers['Authorization'] = 'Token ' + auth_key;
    }
    
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/api/auth/whoami`,
        headers
    });
};

export const getAuthWhoamiOptional = (auth_key = null) => {
    const headers = {};
    
    // TODO: Enable authentication when required
    if (auth_key) {
        headers['Authorization'] = 'Token ' + auth_key;
    }
    
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/api/auth/whoami-optional`,
        headers
    });
};

export const getAuthProfile = (auth_key = null) => {
    const headers = {};
    
    // TODO: Enable authentication when required
    if (auth_key) {
        headers['Authorization'] = 'Token ' + auth_key;
    }
    
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/api/auth/profile`,
        headers
    });
};

export const getAuthHeadersDebug = (auth_key = null) => {
    const headers = {};
    
    // TODO: Enable authentication when required
    if (auth_key) {
        headers['Authorization'] = 'Token ' + auth_key;
    }
    
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/api/auth/headers-debug`,
        headers
    });
};

export const getAuthLogoutInfo = (auth_key = null) => {
    const headers = {};
    
    // TODO: Enable authentication when required
    if (auth_key) {
        headers['Authorization'] = 'Token ' + auth_key;
    }
    
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/api/auth/logout-info`,
        headers
    });
};

export const getAuthCheckGroupAdmin = (auth_key = null) => {
    const headers = {};
    
    // TODO: Enable authentication when required
    if (auth_key) {
        headers['Authorization'] = 'Token ' + auth_key;
    }
    
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/api/auth/check-group/admin`,
        headers
    });
};

// Accuracy Endpoints
export const getAccuracyEvals = (auth_key = null) => {
    const headers = {};
    
    // TODO: Enable authentication when required
    if (auth_key) {
        headers['Authorization'] = 'Token ' + auth_key;
    }
    
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/api/accuracy/1/get-accuracy-evals/`,
        headers
    });
};

// Root and Health Endpoints
export const getRoot = (auth_key = null) => {
    const headers = {};
    
    // TODO: Enable authentication when required
    if (auth_key) {
        headers['Authorization'] = 'Token ' + auth_key;
    }
    
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/`,
        headers
    });
};

export const getHealth = (auth_key = null) => {
    const headers = {};
    
    // TODO: Enable authentication when required
    if (auth_key) {
        headers['Authorization'] = 'Token ' + auth_key;
    }
    
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/health`,
        headers
    });
}; 