/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doNewPrdLogin } from '../pages/loginPage.js';
import { addFeatureMaually,generateAzureCostEstimation,unlinkJiraUrl,getStarterCode,requestTechnicalRecomandation,generateStarterCode,getTecnicalReconmondationList,featureAutoEstimation,featureDecompose, deleteFeatureCommet, patchFeatureComments, putFeatureComments, getFeatureCommentById, addCommentsIntoFeature, getAllFeatureComments, downloadPrd, doGetAllChatMessage, doCreateChatMessage, doGetChatMessageById, doDeleteChatMessageById, doClearChatMessage, doDeleteUserRoleByIdOrganizationPRD, doPatchUserRoleOrganizationPRD, doPutUserRoleOrganizationPRD, doGetUserRoleByIdOrganizationPRD, doCreateUserRolesOrganizationPRD, doGetAllUserRolesOrganizationPRD, doGetPRDWishlist, doDeletePhaseByIdOrganizationPRD, doPutPhaseOrganizationPRD, doPatchPhaseOrganizationPRD, doCreatePhaseOrganizationPRD, doGetPhaseByIdOrganizationPRD, doGetAllPhaseOrganizationPRD, doRemoveModuleIntoFeatureOrganizationPRD, doAddModuleIntofeatureOrganizationPRD, doDeletefeatureUsingIdOrganizationPRD, doPatchfeatureUsingIdOrganizationPRD, doPutfeatureUsingIdOrganizationPRD, doGetfeatureUsingIdOrganizationPRD, doCreatefeatureOrganizationPRD, doGetAllfeatureOrganizationPRD, doMoveFetaureIntoCategoryOrganizationPRD, doDeleteOrganizationPRDCategoryUsingId, doPatchOrganizationPRDCategory, doPutOrganizationPRDCategory, doGetOrganizationPRDCategoryUsingId, doCreateOrganizationPRDCategory, doGetOrganizationPRDCategoryList, dogetOrganizationPRDEstimate, doGetOrganizationPRDList, doGenerateOrganizationPRD, doGetOrganizationPRDById, doPutOrganizationPRD, doPatchOrganizationPRD, doDeleteOrganizationPRD } from '../pages/NewPrdPage.js';

let app_name;
let app_id;
let authKey;
let generatePrd_id;
let category_id;
let feature_id;
let myPhaseId;
let userRoles_id;
let chat_id;
let comment_id;
let newFaetiureId;
describe("New PRD Page", () => {
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Get all PRD List by organization User', () => {
        doNewPrdLogin().then((response) => {
            authKey = response.body.key;
            doGetOrganizationPRDList(authKey).then((response) => {
                expect(response.status).to.eq(200)
                cy.log("Get all PRD List by organization User response", response.body)
            })
        })
    })
    // })

    it('Generate PRD by organization User without app', () => {
        doGenerateOrganizationPRD(authKey).then((response) => {
            let ids = response.body.data.id;
            generatePrd_id = ids - 1;
            expect(response.status).to.eq(202)
            cy.log(ids);
            cy.log(generatePrd_id);
            cy.log("Generate PRD by organization User Response", response.body)
        })
    })
    it('Get generated PRD Using Id by organization User', () => {
        doGetOrganizationPRDById(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get generated PRD Using Id by organization User", response.body)

        })
    })
    it('Put generated PRD by organization User', () => {
        doPutOrganizationPRD(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put generated PRD by organization User response", response.body)
        })
    })
    it('Patch generated PRD by organization User', () => {
        doPatchOrganizationPRD(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch generated PRD by organization User response", response.body)
        })
    })


    it('Get PRD Estimate by organization User', () => {
        dogetOrganizationPRDEstimate(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get PRD Estimate by organization User Response", response.body)
        })

    })
    it('Get PRD Category List by organization User', () => {
        doGetOrganizationPRDCategoryList(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Response Body:", JSON.stringify(response.body))
            cy.log("Get PRD Category List by organization User Response", response.body)
        })

    })


    it('Get All Phase from PRD for organization User', () => {
        doGetAllPhaseOrganizationPRD(authKey, generatePrd_id).then((response) => {
            cy.log("Response Body:", JSON.stringify(response.body));
            expect(response.status).to.eq(200);
        })
    })
    it('Create Phase by PRD organizational user', () => {
        doCreatePhaseOrganizationPRD(authKey, generatePrd_id).then((response) => {
            myPhaseId = response.body.id;
            expect(response.status).to.eq(201);
            cy.log("Response Body:", JSON.stringify(response.body));

        })
    })
    it('Get Phase by ID PRD organizational user', () => {
        doGetPhaseByIdOrganizationPRD(authKey, generatePrd_id, myPhaseId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Response Body:", JSON.stringify(response.body))

        })
    })
    it('Put Phase by ID PRD organizational user', () => {
        doPutPhaseOrganizationPRD(authKey, generatePrd_id, myPhaseId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Response Body:", JSON.stringify(response.body))

        })
    })
    it('Patch Phase by ID PRD organizational user', () => {
        doPatchPhaseOrganizationPRD(authKey, generatePrd_id, myPhaseId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Response Body:", JSON.stringify(response.body))

        })
    })
    it('Get All User Roles from PRD for organization User', () => {
        doGetAllUserRolesOrganizationPRD(authKey, generatePrd_id).then((response) => {
            cy.log("Response Body:", JSON.stringify(response.body));
            expect(response.status).to.eq(200);
        })
    })
    it('Create User Roles  by PRD organizational user', () => {
        doCreateUserRolesOrganizationPRD(authKey, generatePrd_id).then((response) => {
            userRoles_id = response.body.id;
            expect(response.status).to.eq(201);
            cy.log("Response Body:", JSON.stringify(response.body));

        })
    })
    it('Get User Roles by ID PRD organizational user', () => {
        doGetUserRoleByIdOrganizationPRD(authKey, generatePrd_id, userRoles_id).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Response Body:", JSON.stringify(response.body))

        })
    })
    it('Put User Roles by ID PRD organizational user', () => {
        doPutUserRoleOrganizationPRD(authKey, generatePrd_id, userRoles_id).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Response Body:", JSON.stringify(response.body))

        })
    })
    it('Patch User Roles by ID PRD organizational user', () => {
        doPatchUserRoleOrganizationPRD(authKey, generatePrd_id, userRoles_id).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Response Body:", JSON.stringify(response.body))

        })
    })
    it('Delete User Roles by ID PRD organizational user', () => {
        doDeleteUserRoleByIdOrganizationPRD(authKey, generatePrd_id, userRoles_id).then((response) => {
            expect(response.status).to.eq(204);
            cy.log("Response Body:", JSON.stringify(response.body))

        })
    })

    it('Create PRD Category by organization User', () => {
        const tiltle = 'Cat' + (Math.random() + 1).toString(36).substring(7);
        doCreateOrganizationPRDCategory(authKey, generatePrd_id, tiltle, myPhaseId).then((response) => {
            category_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create PRD Category by organization User Response", response.body)
        })
    })
    it('Get category using Id for organization User', () => {
        doGetOrganizationPRDCategoryUsingId(authKey, generatePrd_id, category_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get category using Id for organization User Response", response.body)
        })
    })
    it('Put category using Id for organization User', () => {
        const tiltleput = 'CatPut' + (Math.random() + 1).toString(36).substring(7);
        doPutOrganizationPRDCategory(authKey, generatePrd_id, category_id, tiltleput, myPhaseId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put category using Id for organization User Response", response.body)
        })

    })
    it('Patch category using Id for organization User', () => {
        const tiltlepatch = 'CatPatch' + (Math.random() + 1).toString(36).substring(7);
        doPatchOrganizationPRDCategory(authKey, generatePrd_id, category_id, tiltlepatch, myPhaseId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch category using Id for organization User Response", response.body)
        })
    })

    // })
    // it('Move feature one category to another for organization User', () => {
    //     doMoveFetaureIntoCategoryOrganizationPRD(authKey, generatePrd_id,category_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Patch category using Id for organization User Response", response.body)
    //     })

    // })

    // it('Get all feature from category for organization User', () => {
    //     doGetAllfeatureOrganizationPRD(authKey, generatePrd_id).then((response) => {
    //  
    //        expect(response.status).to.eq(200)
    //         cy.log("Get all feature from category for organization User Response", response.body)
    //     })

    // })
    it('Create Feature into category for organization User', () => {
        doCreatefeatureOrganizationPRD(authKey, generatePrd_id).then((response) => {
            feature_id=response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create Feature into category for organization User Response", response.body)
        })

    })

    // it('Get Feature using Id from category for organization User', () => {
    //     doGetfeatureUsingIdOrganizationPRD(authKey, generatePrd_id,feature_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Feature using Id from category for organization User Response", response.body)
    //     })

    // })
    // it('Put Feature using Id from category for organization User', () => {
    //     doPutfeatureUsingIdOrganizationPRD(authKey, generatePrd_id,feature_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Put Feature using Id from category for organization User Response", response.body)
    //     })

    // })
    // it('Patch Feature using Id from category for organization User', () => {
    //     doPatchfeatureUsingIdOrganizationPRD(authKey, generatePrd_id,feature_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Patch Feature using Id from category for organization User Response", response.body)
    //     })

    // })

    // it('Add Module into the feature for organization User', () => {
    //     doAddModuleIntofeatureOrganizationPRD(authKey, generatePrd_id,feature_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Add Module into the feature for organization User response", response.body)
    //     })

    // })
    // it('Remove Module into the feature for organization User', () => {
    //     doRemoveModuleIntoFeatureOrganizationPRD(authKey, generatePrd_id,feature_id).then((response) => {
    //         expect(response.status).to.eq(204)
    //         cy.log("Remove Module into the feature for organization User response", response.body)
    //     })

    // })
    // it('Delete Feature using Id from category for organization User', () => {
    //     doDeletefeatureUsingIdOrganizationPRD(authKey, generatePrd_id,feature_id).then((response) => {
    //         expect(response.status).to.eq(204)
    //         cy.log("Patch Feature using Id from category for organization User Response", response.body)
    //     })

    // })
    // it('Delete category using Id for organization User', () => {
    //     doDeleteOrganizationPRDCategoryUsingId(authKey, generatePrd_id,category_id).then((response) => {
    //         expect(response.status).to.eq(204)
    //         cy.log("Delete category using Id for organization User Response", response.body)
    //     })

    // })

    // it('Delete Phase by ID PRD organizational user', () => {
    //     doDeletePhaseByIdOrganizationPRD(authKey, generatePrd_id, myPhaseId).then((response) => {
    //         expect(response.status).to.eq(204);
    //         cy.log("Response Body:", JSON.stringify(response.body))

    //     })
    // })
    it('Get All Chat Message', () => {
        doGetAllChatMessage(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get All Chat Message Response", response.body)
        })
    })
    it('Create Chat Message', () => {
        doCreateChatMessage(authKey, generatePrd_id).then((response) => {
            chat_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create Chat Message Response", response.body)
        })
    })
    it('Get Chat Message using Id', () => {
        doGetChatMessageById(authKey, generatePrd_id, chat_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Chat Message using Id Response", response.body)
        })
    })
    it('Delete Chat Message using Id', () => {
        doDeleteChatMessageById(authKey, generatePrd_id, chat_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Chat Message using Id Response", response.body)
        })
    })
    it('Clear All Chat Message', () => {
        doClearChatMessage(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Clear All Chat Message Response", response.body)
        })
    })
    it('download PRD ', () => {
        downloadPrd(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("download PRD Response", response.body)
        })
    })

    it('Get All comment from feature', () => {
        getAllFeatureComments(authKey, generatePrd_id, feature_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get All comment from feature", response.body)
        })
    })
    it('Add comment into the feature', () => {
        addCommentsIntoFeature(authKey, generatePrd_id, feature_id).then((response) => {
            comment_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Add comment into the feature Response", response.body)
        })
    })
    it('Get comment from feature using ID', () => {
        getFeatureCommentById(authKey, generatePrd_id, feature_id, comment_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get comment from feature using ID Response", response.body)
        })

    })

    it('Update comment into the feature using put', () => {
        putFeatureComments(authKey, generatePrd_id, feature_id, comment_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update comment into the feature using put Response", response.body)
        })

    })
    it('Update comment into the feature using patch', () => {
        patchFeatureComments(authKey, generatePrd_id, feature_id, comment_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update comment into the feature using patch Response", response.body)
        })

    })
    
    it('Feature decompose flow', () => {
        newFaetiureId = feature_id - 1;
        cy.log("Feature ID:", feature_id);
        cy.log("New Feature ID:", newFaetiureId);
        featureDecompose(authKey, generatePrd_id, newFaetiureId).then((response) => {
            expect(response.status).to.eq(202)
            cy.log("Feature decompose flow Response", response.body)
        })
    })
    
    it('Feature Auto Estimation flow', () => {
        featureAutoEstimation(authKey, generatePrd_id, newFaetiureId).then((response) => {
            expect(response.status).to.eq(202)
            cy.log("Feature Auto Estimation flow Response", response.body)
        })
    })
    
    it('Get All Technical Recomandation flow', () => {
        getTecnicalReconmondationList (authKey, generatePrd_id, newFaetiureId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get All Technical Recomandation flow Response", response.body)
        })
    })
    
    it('Generate Starter Code flow', () => {
        generateStarterCode(authKey, generatePrd_id, newFaetiureId).then((response) => {
            expect(response.status).to.eq(202)
            cy.log("Generate Starter Code flow Response", response.body)
        })

    })
    
    it('Request Tecnical Recomandation flow', () => {
        requestTechnicalRecomandation(authKey, generatePrd_id, newFaetiureId).then((response) => {
            expect(response.status).to.eq(202)
            cy.log("Request Tecnical Recomandation flow Response", response.body)
        })
    })
    
    it('Get Starter Code flow', () => {
        getStarterCode (authKey, generatePrd_id, newFaetiureId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Starter Code flow Response", response.body)
        })
    })
    
    it('Unlink Jira Url flow', () => {
        unlinkJiraUrl (authKey, generatePrd_id, newFaetiureId).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Unlink Jira Url flow Response", response.body)
        })
    })
   
    it('Generate Azure Cost Estimation  flow', () => {
        generateAzureCostEstimation(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(202)
            cy.log("Generate Azure Cost Estimation  flow Response", response.body)
        })
    })
    
    it('Add Feature Manually flow', () => {
        addFeatureMaually(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(201)
            cy.log("Add Feature Manually flow Response", response.body)
        })
    })
    it('Delete generated PRD by organization User', () => {
        doDeleteOrganizationPRD(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete generated PRD by organization User Response", response.body)
        })

    })

     it('delete comment from feature', () => {
        deleteFeatureCommet(authKey, generatePrd_id, comment_id,feature_id).then((response) => {
            cy.log("Auth Key:", authKey);
            cy.log("Generated PRD ID:", generatePrd_id);
            cy.log("Comment ID:", comment_id);
            expect(response.status).to.eq(204)
            cy.log("Delete comment from feature Response", response.body)
        })

    })
})

