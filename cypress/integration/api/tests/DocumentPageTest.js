
/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doCatalogLogin } from '../pages/loginPage.js';
import { doCreateDocument, doGetDocumentById, doPutDocumentById, doPatchDocumentById, doDeleteDocumentById, doGetListCodePackages, doCreateCodePackages, doGetCodePackagestById, doPutCodePackageById, doPatchCodePackageById } from '../pages/DocumentPage.js';

let document_id;
let app_id;
let app_name;
let authKey;
let codepackage_id;
describe("Document Page", () => {
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Create document flow', () => {
        doCatalogLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                app_id = response.body.id;
                app_name = response.body.name;
                localStorage.setItem('app_id', response.body.id);
                doCreateDocument(authKey, app_id).then((response) => {
                    document_id = response.body.id;
                    expect(response.status).to.eq(201)
                    cy.log("Create document flow response", response.body)
                })
            })
        })
    })
    it('Get document by id flow', () => {
        doGetDocumentById(authKey, app_id, document_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get document by id flow response", response.body)
        })
    })
    it('Put document by id flow', () => {
        doPutDocumentById(authKey, app_id, document_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put document by id flow response", response.body)
        })
    })
    it('Patch document by id flow', () => {
        doPatchDocumentById(authKey, app_id, document_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch document by id flow response", response.body)
        })
    })
    it('Delete document by id flow', () => {
        doDeleteDocumentById(authKey, app_id, document_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete document by id flow response", response.body)
        })
    })
    it('Get all code packages flow', () => {
        doGetListCodePackages(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get all code packages flow response", response.body)
        })
    })
    it('Create new code packages flow', () => {
        const codePackage_name = 'My New Code Packages' + (Math.random() + 1).toString(36).substring(7);
        doCreateCodePackages(authKey, codePackage_name).then((response) => {
            codepackage_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create new code packages flow response", response.body)
        })
    })
    it('Get code packages by Id flow', () => {
        doGetCodePackagestById(authKey, codepackage_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get code packages by Id flow response", response.body)
        })
    })
    it('Put code packages flow', () => {
        const codePackage_name = 'My New Code Packages' + (Math.random() + 1).toString(36).substring(7);
        const codePackage_Description = 'Create new code packages for login functionality and also there is some different login functioality like login with google and so on' + (Math.random() + 1).toString(36).substring(7);
        const codePackage_Link = 'http://www.demo.com' + (Math.random() + 1).toString(36).substring(7);
        doPutCodePackageById(authKey, codepackage_id, codePackage_name, codePackage_Description, codePackage_Link).then((response) => {
            codepackage_id = response.body.id;
            expect(response.status).to.eq(200)
            cy.log("Create new code packages flow response", response.body)
        })
    })
    it('Patch code packages flow', () => {
        const codePackage_name = 'My New Code Packages' + (Math.random() + 1).toString(36).substring(7);
        const codePackage_Description = 'Create new code packages for login functionality and also there is some different login functioality like login with google and so on' + (Math.random() + 1).toString(36).substring(7);
        const codePackage_Link = 'http://www.demo.com' + (Math.random() + 1).toString(36).substring(7);
        doPatchCodePackageById(authKey, codepackage_id, codePackage_name, codePackage_Description, codePackage_Link).then((response) => {
            codepackage_id = response.body.id;
            expect(response.status).to.eq(200)
            cy.log("Create new code packages flow response", response.body)
        })
    })
})