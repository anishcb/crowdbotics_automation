import { doCreateKenobiC2SUsingPrivateRepo, doGetKenobiC2SUsingPrivateRepoById, doPutKenobiC2SUsingPrivateRepo, doPatchKenobiC2SUsingPrivateRepo, doDeleteKenobiC2SUsingPrivateRepoById, doCreateKenobiC2SUsingPublicRepo, doGetKenobiC2SUsingPublicRepoById, doPutKenobiC2SUsingPublicRepo, doPatchKenobiC2SUsingPublicRepo, doDeleteKenobiC2SUsingPublicRepoById } from '../pages/KenobiPage.js';
import { doC2SLogin } from '../pages/loginPage.js';


let authKey, C2SKenobi_id,C2SKenobi_idPUB;

describe("Kenobi Test Flow", () => {


    it('Create C2S Kenobi using Private Repo', () => {
        doC2SLogin().then((response) => {
            authKey = response.body.key;
            doCreateKenobiC2SUsingPrivateRepo(authKey).then((response) => {
                C2SKenobi_id = response.body.id;
                cy.log("Create C2S Kenobi using Private Repo Response", response.body)
                expect(response.status).to.eq(201)
            })
        })
    })

    it('Get C2S Kenobi by ID using Private Repo', () => {
        doGetKenobiC2SUsingPrivateRepoById(authKey, C2SKenobi_id).then((response) => {
            cy.log("Get C2S Kenobi by ID using Private Repo Response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('PUT C2S Kenobi by ID using Private Repo', () => {
        doPutKenobiC2SUsingPrivateRepo(authKey, C2SKenobi_id).then((response) => {
            cy.log("PUT C2S Kenobi by ID using Private Repo Response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('PATCH C2S Kenobi by ID using Private Repo', () => {
        doPatchKenobiC2SUsingPrivateRepo(authKey, C2SKenobi_id).then((response) => {
            cy.log("PATCH C2S Kenobi by ID using Private Repo Response", response.body)
            expect(response.status).to.eq(200)
        })
    })
    it('Delete C2S Kenobi by ID using Private Repo', () => {
        doDeleteKenobiC2SUsingPrivateRepoById(authKey, C2SKenobi_id).then((response) => {
            cy.log("Delete C2S Kenobi by ID using Private Repo Response", response.body)
            expect(response.status).to.eq(204)
        })
    })

    it('Create C2S Kenobi using Public Repo', () => {
        doCreateKenobiC2SUsingPublicRepo(authKey).then((response) => {
            C2SKenobi_idPUB = response.body.id;
            cy.log("Create C2S Kenobi using Public Repo Response", response.body)
            expect(response.status).to.eq(201)
        })
    })

    it('Get C2S Kenobi by ID using Public Repo', () => {
        doGetKenobiC2SUsingPublicRepoById(authKey, C2SKenobi_idPUB).then((response) => {
            cy.log("Get C2S Kenobi by ID using Public Repo Response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('PUT C2S Kenobi by ID using Public Repo', () => {
        doPutKenobiC2SUsingPublicRepo(authKey, C2SKenobi_idPUB).then((response) => {
            cy.log("PUT C2S Kenobi by ID using Public Repo Response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('PATCH C2S Kenobi by ID using Public Repo', () => {
        doPatchKenobiC2SUsingPublicRepo(authKey, C2SKenobi_idPUB).then((response) => {
            cy.log("PATCH C2S Kenobi by ID using Public Repo Response", response.body)
            expect(response.status).to.eq(200)
        })
    })
    it('Delete C2S Kenobi by ID using Public Repo', () => {
        doDeleteKenobiC2SUsingPublicRepoById(authKey, C2SKenobi_idPUB).then((response) => {
            cy.log("Delete C2S Kenobi by ID using Public Repo Response", response.body)
            expect(response.status).to.eq(204)
        })
    })
});