// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doLogin } from '../pages/loginPage.js';
import { change_plan } from '../pages/ChangePlanPage.js';

let authKey;
let app_id;
let pro_id = 169;
let  advanced_id = 170;
let community_id = 168;
let custom_id= 171;

describe("Change Plan Page", () => {
    it('community to pro test', () => {
        doLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                app_name = response.body.name;
                localStorage.setItem('app_id', response.body.id);
                // const app_id = localStorage.getItem('app_id');
                change_plan(authKey, app_id,pro_id).then((response) => {
                    expect(response.status).to.eq(200)
                    cy.log("create tags response", response.body)
                })
            })
        })
    })

    it('pro to advanced test', () => {
       
                change_plan(authKey, app_id,advanced_id).then((response) => {
                    expect(response.status).to.eq(200)
                    cy.log("create tags response", response.body)
                })
            })
        

        it('pro to advanced test', () => {
       
            change_plan(authKey, app_id,community_id).then((response) => {
                expect(response.status).to.eq(200)
                cy.log("create tags response", response.body)
            })
        })

        it('community to custom test', () => {
       
            change_plan(authKey, app_id,custom_id).then((response) => {
                expect(response.status).to.eq(200)
                cy.log("create tags response", response.body)
            })
        })
    
    })
