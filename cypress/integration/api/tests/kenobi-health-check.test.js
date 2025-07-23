/// <reference types = "cypress"/>
import { 
    getVectorStoreStatus, 
    getVectorStoreSchema, 
    getVectorStoreExport, 
    getVectorStoreExportStream,
    getAgentRecentQueries,
    getPromptsList,
    getCodeOverallAnalysis,
    getDiscoveryIdentifyCoreFeatures,
    getDiscoveryQuestions,
    getGraphCacheStats,
    getGraphCacheDump,
    getPrdList,
    getAuthWhoami,
    getAuthWhoamiOptional,
    getAuthProfile,
    getAuthHeadersDebug,
    getAuthLogoutInfo,
    getAuthCheckGroupAdmin,
    getAccuracyEvals,
    getRoot,
    getHealth
} from '../pages/KenobiHealthCheckPage.js';

describe('Kenobi API Health Check Tests', () => {
    // TODO: Add authentication when required
    const auth_key = null; // Currently no auth required

    describe('Vector Store Endpoints', () => {
        it('should get vector store status', () => {
            getVectorStoreStatus(auth_key).then((response) => {
                expect(response.status).to.eq(200);
                cy.log('Vector store status response:', response.body);
            });
        });

        it('should get vector store schema', () => {
            getVectorStoreSchema(auth_key).then((response) => {
                expect(response.status).to.eq(200);
                cy.log('Vector store schema response:', response.body);
            });
        });

        it('should get vector store export', () => {
            getVectorStoreExport(auth_key).then((response) => {
                expect(response.status).to.eq(200);
                cy.log('Vector store export response:', response.body);
            });
        });

        it('should get vector store export stream', () => {
            getVectorStoreExportStream(auth_key).then((response) => {
                expect(response.status).to.eq(200);
                cy.log('Vector store export stream response:', response.body);
            });
        });
    });

    describe('Agent Endpoints', () => {
        it('should get agent recent queries', () => {
            getAgentRecentQueries(auth_key).then((response) => {
                expect(response.status).to.eq(200);
                cy.log('Agent recent queries response:', response.body);
            });
        });
    });

    describe('Prompts Endpoints', () => {
        it('should get prompts list', () => {
            getPromptsList(auth_key).then((response) => {
                expect(response.status).to.eq(200);
                cy.log('Prompts list response:', response.body);
            });
        });
    });

    describe('Code Analysis Endpoints', () => {
        it('should get code overall analysis', () => {
            getCodeOverallAnalysis(auth_key).then((response) => {
                expect(response.status).to.eq(200);
                cy.log('Code overall analysis response:', response.body);
            });
        });
    });

    describe('Discovery Endpoints', () => {
        it('should get discovery identify core features', () => {
            getDiscoveryIdentifyCoreFeatures(auth_key).then((response) => {
                expect(response.status).to.eq(200);
                cy.log('Discovery identify core features response:', response.body);
            });
        });

        it('should get discovery questions', () => {
            getDiscoveryQuestions(auth_key).then((response) => {
                expect(response.status).to.eq(200);
                cy.log('Discovery questions response:', response.body);
            });
        });
    });

    describe('Graph Cache Endpoints', () => {
        it('should get graph cache stats', () => {
            getGraphCacheStats(auth_key).then((response) => {
                expect(response.status).to.eq(200);
                cy.log('Graph cache stats response:', response.body);
            });
        });

        it('should get graph cache dump', () => {
            getGraphCacheDump(auth_key).then((response) => {
                expect(response.status).to.eq(200);
                cy.log('Graph cache dump response:', response.body);
            });
        });
    });

    describe('PRD Endpoints', () => {
        it('should get PRD list', () => {
            getPrdList(auth_key).then((response) => {
                expect(response.status).to.eq(200);
                cy.log('PRD list response:', response.body);
            });
        });
    });

    describe('Authentication Endpoints', () => {
        it('should get auth whoami', () => {
            getAuthWhoami(auth_key).then((response) => {
                expect(response.status).to.eq(200);
                cy.log('Auth whoami response:', response.body);
            });
        });

        it('should get auth whoami optional', () => {
            getAuthWhoamiOptional(auth_key).then((response) => {
                expect(response.status).to.eq(200);
                cy.log('Auth whoami optional response:', response.body);
            });
        });

        it('should get auth profile', () => {
            getAuthProfile(auth_key).then((response) => {
                expect(response.status).to.eq(200);
                cy.log('Auth profile response:', response.body);
            });
        });

        it('should get auth headers debug', () => {
            getAuthHeadersDebug(auth_key).then((response) => {
                expect(response.status).to.eq(200);
                cy.log('Auth headers debug response:', response.body);
            });
        });

        it('should get auth logout info', () => {
            getAuthLogoutInfo(auth_key).then((response) => {
                expect(response.status).to.eq(200);
                cy.log('Auth logout info response:', response.body);
            });
        });

        it('should get auth check group admin', () => {
            getAuthCheckGroupAdmin(auth_key).then((response) => {
                expect(response.status).to.eq(200);
                cy.log('Auth check group admin response:', response.body);
            });
        });
    });

    describe('Accuracy Endpoints', () => {
        it('should get accuracy evals', () => {
            getAccuracyEvals(auth_key).then((response) => {
                expect(response.status).to.eq(200);
                cy.log('Accuracy evals response:', response.body);
            });
        });
    });

    describe('Root and Health Endpoints', () => {
        it('should get root endpoint', () => {
            getRoot(auth_key).then((response) => {
                expect(response.status).to.eq(200);
                cy.log('Root endpoint response:', response.body);
            });
        });

        it('should get health endpoint', () => {
            getHealth(auth_key).then((response) => {
                expect(response.status).to.eq(200);
                cy.log('Health endpoint response:', response.body);
            });
        });
    });
}); 