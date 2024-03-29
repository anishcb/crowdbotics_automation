const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 20000,
  env:
  {
    baseUrl: "https://crowdbotics-slack-dev.herokuapp.com",
    username: "sneh@crowdbotics.com",
    password: "devstringx@123",
    authenticationToken: "U634c6bd8d6ff4482000de25a378a80e238d336e6",
    token_key: "",
    loginEndPoint: "/api/v2/totp-login/",
    logoutEndPoint: "/api/v2/logout/",
    createApp: "/api/v1/github-repos/",
    getAppInfo1: "/api/v2/apps/",
    getAppInfo2: "/",
    checkAppGeneration1: "/api/v2/apps/",
    getInvoice: "/api/v2/billing/invoices/?limit=10&page=1",
    searchInvoice: "/api/v2/billing/invoices/?limit=10&page=1&app_id=",
    getAppLog1: "/api/v2/apps/",
    getAppLogUsingAppId: "/api/v2/apps_logs/",
    getAppLog2: "/logs/",
    checkAppGeneration2: "/logs/",
    searchApp1: "/api/v2/apps/?custom_name=",
    searchApp2: "&page=1&limit=8",
    createTags: "/api/v1/prd_tags/?app=",
    createUserRoles: "/api/v1/prd_roles/?app=",
    createprdGroup: "/api/v1/prd_groups/?app=",
    createprdItem: "/api/v1/prd_items/?app=",
    getprdGroup: "/api/v1/prd_groups/?app=",
    getprdItem: "/api/v1/prd_items/?group=",
    deleteprdItem: "/api/v1/prd_groups/bulk-delete/?app=",
    deleteprdGroup: "/api/v1/prd_groups/?app=",
    createprdai1: "/api/v1/apps/",
    createprdai2: "/prd-ai-generator/generate_features/",
    createcatalogtemplates: "/api/v1/prd_groups/import-archetype/?app=",
    createprdfeature: "/api/v1/prd_groups/import-features/?app=",
    updateAppName: "/api/v2/apps/",
    codePrivacyPrivateToPublic1: "/api/v1/github-repos/",
    codePrivacyPrivateToPublic2: "/private/",
    codePrivacyPublicToPrivate1: "/api/v1/github-repos/",
    codePrivacyPublicToPrivate2: "/private/",
    deleteApp: "/api/v2/apps/",
    addJobRequest1: "/api/v2/apps/",
    addJobRequest2: "/jobs/",
    getJobRequest1: "/api/v2/apps/",
    getJobRequest2: "/jobs/",
    getJobRequestUsingId1: "/api/v2/apps/",
    getJobRequestUsingId2: "/jobs/",
    editJobRequest1: "/api/v2/apps/",
    editJobRequest2: "/jobs/",
    deleteJobRequest1: "/api/v2/apps/",
    deleteJobRequest2: "/jobs/",
    changePlan1: "/api/v2/apps/",
    changePlan2: "/plan/update/",
    viewTask1: "/api/v2/apps/",
    viewTask2: "/milestones/",
    getTaskId1: "/api/v2/tasks/",
    getTaskId2: "/",
    addMileStone1: "/api/v2/apps/",
    addMileStone2: "/milestones/",
    getTaskSharableStatus: "/api/v2/tasks/shareable-status/",
    getMilestone1: "/api/v2/apps/",
    getMilestone2: "/milestones/",
    getMilestone2: "/",
    updateMilestone1: "/api/v2/apps/",
    updateMilestone2: "/milestones/",
    updateMilestone3: "/",
    deleteMilestone1: "/api/v2/apps/",
    deleteMilestone2: "/milestones/",
    deleteMilestone3: "/",
    createTask: "/api/v2/tasks/",
    addTaskIntoMilestone1: "/api/v2/apps/",
    addTaskIntoMilestone2: "/milestones/",
    addTaskIntoMilestone3: "/add-task/",
    publicTask1: "/api/v2/tasks/",
    publicTask2: "/public/",
    searchTask1: "/api/v2/tasks/search-by-id/?search=",
    searchTask2: "&app=",
    getAllMilestone1: "/api/v2/apps/",
    getAllMilestone2: "/milestones/?current_tab=proposal",
    addCatalogfeature: "/api/v1/catalog/feature/",
    getCatalogFeature: "/api/v1/catalog/feature/",
    addCatalogCategory: "/api/v1/catalog/category/",
    getCatologCategory: "/api/v1/catalog/category/",
    getCatalogCategoryById1: "/api/v1/catalog/category/",
    getCatalogCategoryById2: "/",
    updateWithPutCatalogCategoryById1: "/api/v1/catalog/category/",
    updateWithPutCatalogCategoryById2: "/",
    updateWithPatchCatalogCategoryById1: "/api/v1/catalog/category/",
    updateWithPatchCatalogCategoryById2: "/",
    deleteCatalogCategory1: "/api/v1/catalog/category/",
    deleteCatalogCategory2: "/",
    getCatalogModules: "/api/v1/catalog/module/",
    addCatalogModules: "/api/v1/catalog/module/",
    getCatalogModulesById1: "/api/v1/catalog/module/",
    getCatalogModulesById2: "/",
    updateWithPutCatalogModulesById1: "/api/v1/catalog/module/",
    updateWithPutCatalogModulesById2: "/",
    updateWithPatchCatalogModulesById1: "/api/v1/catalog/module/",
    updateWithPatchCatalogModulesById2: "/",
    deleteCatalogModules1: "/api/v1/catalog/module/",
    deleteCatalogModules2: "/",
    importFeature: "/api/v1/prd_groups/import-features/?app=",
    importModule1: "/api/v1/prd_groups/",
    importModule2: "/import-from-catalog/?app=",
    importCatalog1: "/api/v1/prd_groups/",
    importCatalog2: "/import-from-catalog/",
    getArchetypeList: "/api/v1/catalog/archetype/",
    createArchetype: "/api/v1/catalog/archetype/",
    getCatalogArchetypeById1: "/api/v1/catalog/archetype/",
    getCatalogArchetypeById2: "/",
    updateWithPutCatalogArchetypeById1: "/api/v1/catalog/archetype/",
    updateWithPutCatalogArchetypeById2: "/",
    updateWithPatchCatalogArchetypeById1: "/api/v1/catalog/archetype/",
    updateWithPatchCatalogArchetypeById2: "/",
    deleteCatalogArchetype1: "/api/v1/catalog/archetype/",
    deleteCatalogArchetype2: "/",
    getCatalogAssertList: "/api/v1/catalog/asset/",
    createCatalogAssert: "/api/v1/catalog/asset/",
    getCatalogAssertById1: "/api/v1/catalog/asset/",
    getCatalogAssertById2: "/",
    updateWithPutCatalogAssertById1: "/api/v1/catalog/asset/",
    updateWithPutCatalogAssertById2: "/",
    updateWithPatchCatalogAssertById1: "/api/v1/catalog/asset/",
    updateWithPatchCatalogAssertById2: "/",
    deleteCatalogAssertById1: "/api/v1/catalog/asset/",
    deleteCatalogAssertById2: "/",
    catalogCodeModule: "/api/v1/catalog/code-module/",
    getCatalogCodeModuleById1: "/api/v1/catalog/code-module/",
    getCatalogCodeModuleById2: "/",
    UpdateWithPutCatalogCodeModuleById1: "/api/v1/catalog/code-module/",
    UpdateWithPutCatalogCodeModuleById2: "/",
    UpdateWithPatchCatalogCodeModuleById1: "/api/v1/catalog/code-module/",
    UpdateWithPatchCatalogCodeModuleById2: "/",
    deleteCatalogCodeModule1: "/api/v1/catalog/code-module/",
    deleteCatalogCodeModule2: "/",

    // This end point not available in trac list
    catalogEmbeddingSearch: "/api/v1/embedding-search/",
    createConnectors1: "/api/v2/apps/",
    createConnectors2: "/connectors/",
    getConnectors1: "/api/v2/apps/",
    getConnectors2: "/connectors/",
    getConnectorsUsingID1: "/api/v2/apps/",
    getConnectorsUsingID2: "/connectors/",
    editConnectors1: "/api/v2/apps/",
    editConnectors2: "/connectors/",
    deleteConnector1: "/api/v2/apps/",
    deleteConnector2: "/connectors/",
    deleteConnector3: "/",
    addDataModel1: "/api/v2/apps/",
    addDataModel2: "/models/",
    getDataModel1: "/api/v2/apps/",
    getDataModel2: "/models/",
    addLibrary1: "/api/v2/apps/",
    addLibrary2: "/code_packages/",
    addLibrary3: "/install/",
    getLibrary1: "/api/v2/apps/",
    getLibrary2: "/code_packages/",
    removeLibrary1: "/api/v2/apps/",
    removeLibrary2: "/code_packages/",
    removeLibrary3: "/uninstall/",
    addGcpPlatform1: "/api/v2/apps/",
    addGcpPlatform2: "/platforms/",
    getRepoBranch1: "/api/v2/apps/",
    getRepoBranch2: "/repo-branches/",
    patchGroup1: "/api/v1/prd_groups/",
    patchGroup2: "/?app=",
    patchItem1: "/api/v1/prd_items/",
    patchItem2: "/?app=",
    //This endpoint is not available in trac list
    approvePrd: "/api/v1/prd_groups/approve/",
    updatePrdVersionStatus: "/api/v1/update_prd_version_status/",
    getGroupUsingId: "/api/v1/prd_groups/",
    patchItemUpdateOrder1: "/api/v1/prd_groups/",
    patchItemUpdateOrder2: "/update-order/",
    getItemUsingId: "/api/v1/prd_items/",
    addPrdRoles: "/api/v1/prd_roles/",
    removePrdRoles1: "/api/v1/prd_items/",
    removePrdRoles2: "/remove-role/",
    addPrdTag: "/api/v1/prd_tags/",
    getPrdTag: "/api/v1/prd_tags/?app=",
    getPrdTagUsingId: "/api/v1/prd_tags/",
    deletePrdTag: "/api/v1/prd_tags/",
    getPrdVersion: "/api/v1/prd_versions/?app=",
    addComment: "/api/v1/comments/?app=",
    getComment: "/api/v1/comments/",
    getChangeCommentStatus1: "/api/v1/comments/",
    getChangeCommentStatus2: "/?app=",
    getViewInStudioPrd1: "/api/v2/apps/",
    getViewInStudioPrd2: "/screens/",
    deleteComment1: "/api/v1/comments/",
    deleteComment2: "/?app=",
    editComment1: "/api/v1/comments/",
    editComment2: "/?app=",
    addFeatureIntoPrd: "/api/v1/prd_groups/import-features/?app=",
    addModuleIntoPrd1: "/api/v1/prd_groups/",
    addModuleIntoPrd2: "/import-modules/?app=",
    addArchetypeIntoPrd: "/api/v1/prd_groups/import-archetype/?app=",
    getCodeStatusPrd: "/api/v1/code_stats/?app=",
    deployeApp1: "/api/v2/apps/",
    deployeApp2: "/platforms/",
    deployeApp3: "/deploy/",
    GetDeployeApp1: "/api/v2/apps/",
    GetDeployeApp2: "/platforms/",
    GetDeployeApp3: "/server-status/",
    createApiStagingEnv1: "/api/v2/apps/",
    createApiStagingEnv2: "/platforms/",
    cancelAndroidDeploy1: "/api/v2/apps/",
    cancelAndroidDeploy2: "/platforms/",
    cancelAndroidDeploy3: "/deploy/cancel/",
    inviteTeamMember1: "/api/v2/apps/",
    inviteTeamMember2: "/send-project-invitation/",
    getMember1: "/api/v2/apps/",
    getMember2: "/members/",
    getMemberUsingId1: "/api/v2/apps/",
    getMemberUsingId2: "/members/",
    changeTeamMemberRole1: "/api/v2/apps/",
    changeTeamMemberRole2: "/members/",
    changeTeamMemberRole3: "/",
    resendInvite1: "/api/v2/apps/",
    resendInvite2: "/members/",
    resendInvite3: "/resend_invitation/",
    editMemberDescription1: "/api/v2/apps/",
    editMemberDescription2: "/members/",
    changeSubscription1: "/api/v2/apps/",
    changeSubscription2: "/plan/update/",
    appTypeList: "/api/v1/app-types/",
    appTypeList1: "/api/v1/app-types/",
    appTypeList2: "3/",
    getSkills: "/api/v2/skills/",
    getCertificateList: "/api/v2/certifications/",
    getAppSupportType: "/api/v2/app-support-types/",
    getPrdAiCategories1: "/api/v1/apps/",
    getPrdAiCategories2: "/prd_ai_categories/",
    getAllFeatureFromBacklog1: "/api/v1/apps/",
    getAllFeatureFromBacklog2: "/prd_ai_features/backlog/",
    getCurrentlyApprovedPrdVersion: "/api/v1/prd_versions/currently_approved/?app=",
    getCBCarePlanUsingId: "/api/v2/cbcare-plans?app_id=",
    getMilestoneIndex1: "/api/v2/apps/",
    getMilestoneIndex2: "/milestones-index/",
    getMilestoneSummy1: "/api/v2/apps/",
    getMilestoneSummy2: "/milestones/status-summary/",
    // I am working here
    createPrdVersionStatus: "/api/v1/update_prd_version_status/?app=",
    getNotification1: "/api/v2/apps/",
    getNotification2: "/",
    getPendingInvite1: "/api/v2/apps/",
    getPendingInvite2: "/pending-invitations/",
    getAppPerformanceList1: "/api/v2/apps/",
    getAppPerformanceList2: "/performance/",
    getRoles: "/api/v2/roles/",
    getCodestateList: "/api/v1/code_stats/?app=",
    getTaskById1: "/api/v2/tasks/",
    getTaskById2: "/",
    addQuoteInTask1: "/api/v2/apps/",
    addQuoteInTask2: "/milestones/quotes/",
    deleteTask1: "/api/v2/tasks/",
    deleteTask2: "/",
    deleteSubTask1: "/api/v2/tasks/",
    deleteSubTask2: "/",
    getAllSubTask1: "/api/v2/tasks/?app_id=",
    getAllSubTask2: "&ids=",
    getAllSubTask3: "&limit=1",
    updateTaskIntoMilestone1: "/api/v2/tasks/",
    updateTaskIntoMilestone2: "/",
    updateSubTask1: "/api/v2/tasks/",
    updateSubTask2: "/",
    updateOtherSubTask1: "/api/v2/tasks/",
    updateOtherSubTask2: "/",
    approvePricing1: "/api/v2/apps/",
    approvePricing2: "/finalize-pricing/",
    undoApprovePricing1: "/api/v2/apps/",
    undoApprovePricing2: "/undo-finalized-pricing/",
    approvePayment1: "/api/v2/apps/",
    approvePayment2: "/finalize-payments/",
    undoApprovedPayment1: "/api/v2/apps/",
    undoApprovedPayment2: "/undo-finalized-payments/",
    addPaymentMilestone1: "/api/v1/apps/",
    addPaymentMilestone2: "/payment-proposals/",
    getPaymentMilestone1: "/api/v1/apps/",
    getPaymentMilestone2: "/payment-proposals/",
    getPaymentMilestone3: "/",
    getAllPaymentMilestone1: "/api/v1/apps/",
    getAllPaymentMilestone2: "/payment-proposals/",
    deletePaymentMilestone1: "/api/v1/apps/",
    deletePaymentMilestone2: "/payment-proposals/",
    deletePaymentMilestone3: "/",
    addQuote1: "/api/v1/apps/",
    addQuote2: "/milestones/quotes/",
    getQuoteMilestone1: "/api/v1/apps/",
    getQuoteMilestone1: "/milestones/quotes/",
    checkoutWithAch1: "/api/v1/apps/",
    checkoutWithAch2: "/milestones/quotes/",
    checkoutWithAch3: "/paymentproposal/charge/ach/",
    getJobType1: "/api/v2/job_types/?app=",
    getJobType2: "&limit=20",
    updateJobTypeRate: "/api/v2/job_types/316909/",
    createBillingSchedule1: "/api/v1/apps/",
    createBillingSchedule2: "/billing-schedule/",
    updateBillingSchedule1: "/api/v1/apps/",
    updateBillingSchedule2: "/billing-schedule/",
    getBillingSchedule1: "/api/v1/apps/",
    getBillingSchedule2: "/billing-schedule/",
    createSubTask1: "/api/v2/tasks/",
    createSubTask2: "/create-default-subtasks/",
    createOtherSubTask: "/api/v2/tasks/",
    moveTask1: "/api/v2/apps/",
    moveTask2: "/milestones/",
    moveTask3: "/move-task/",
    updateMilestoneCostHrs1: "/api/v2/apps/",
    updateMilestoneCostHrs2: "/milestones/",
    updateMilestoneCostHrs3: "/",
    addTaskIntoWhishlist1: "/api/v2/apps/",
    addTaskIntoWhishlist2: "/milestones/",
    addTaskIntoWhishlist3: "/add-task/",
    getCurrentPrdPdf1: "/api/v1/apps/",
    getCurrentPrdPdf2: "/current-prd-pdf/",
    getUserReposList: "/api/v1/user/repos/",
    getAddonsList1: "/api/v1/apps/",
    getAddonsList2: "/addons/",
    createAttributes1: "/api/v1/apps/",
    createAttributes2: "/attributes/",
    getAttributes1: "/api/v1/apps/",
    getAttributes2: "/attributes/",
    getAuditLogList1: "/api/v1/apps/",
    getAuditLogList2: "/audit-logs/",
    addSuggestedFeatures1: "/api/v1/apps/",
    addSuggestedFeatures2: "/prd-ai-generator/suggest_features/",
    getAnalyzeRisk1: "/api/v1/apps/",
    getAnalyzeRisk2: "/prd_ai_analyze_risks/",
    getStratOverPrdAi1: "api/v1/apps/",
    getStratOverPrdAi2: "/start-over-prd-ai/",
    installerInstall1: "/api/v2/apps/",
    installerInstall2: "/installer/install/",
    getPaymentReceipt1: "/api/v1/apps/",
    getPaymentReceipt2: "/payment-receipts/",
    getUsefullLinks1: "/api/v1/apps/",
    getUsefullLinks2: "/useful-links/",
    getStatementOfWork1: "/api/v2/apps/",
    getStatementOfWork2: "/statement-of-work/",
    getCodePackage1: "/api/v2/apps/",
    getCodePackage2: "/code_packages/",
    getUserList: "/api/v2/users/?id=",
    getEdges1: "/api/v1/apps/",
    getEdges2: "/edges/",
    getPrdActivityLog1: "/api/v1/apps/",
    getPrdActivityLog1: "/prd-activity-logs/",
    getPrdAiUserType1: "/api/v1/apps/",
    getPrdAiUserType2: "/prd_ai_usertype/",
    getAppetizeBuilds1: "/api/v1/apps/",
    getAppetizeBuilds2: "/appetize-builds/",
    editAmountInPaymentMilestone1: "/api/v1/apps/",
    editAmountInPaymentMilestone2: "/payment-proposals/",
    editAmountInPaymentMilestone3: "/",
    addFeaturewithAI1: "/api/v1/apps/",
    addFeaturewithAI2: "/prd-ai-generator/generate-features-with-description/",
    addTaskFromTemplete: "/api/v2/tasks/templates/?page=1&limit=50",
    getSettingsFEList: "/api/v2/settings/fe/",
    addFeaturewithAI1: "/api/v1/apps/",
    addFeaturewithAI2: "/prd-ai-generator/generate-features-with-description/",
    addFeaturemanually1: "/api/v1/apps/",
    addFeaturemanually2: "/prd_ai_features/",
    getCatalogPlatformList: "/api/v1/catalog/platform/",
    addCatalogPlatform: "/api/v1/catalog/platform/",
    getCatalogPlatformById1: "/api/v1/catalog/platform/",
    getCatalogPlatformById2: "/",
    putCatalogPlatformById1: "/api/v1/catalog/platform/",
    putCatalogPlatformById2: "/",
    patchCatalogPlatformById1: "/api/v1/catalog/platform/",
    patchCatalogPlatformById2: "/",
    deleteCatalogPlatformById1: "/api/v1/catalog/platform/",
    deleteCatalogPlatformById2: "/",
    getCatalogPlatformCustomDomain1 : "/api/v1/apps/",
    getCatalogPlatformCustomDomain2 : "/platforms/",
    getCatalogPlatformCustomDomain3 : "/custom-domain/",
    postCatalogPlatformCustomDomain1 : "/api/v1/apps/",
    postCatalogPlatformCustomDomain2 : "/platforms/",
    postCatalogPlatformCustomDomain3 : "/custom-domain/",
    getCatalogResourceList: "/api/v1/catalog/resource/",
    createCatalogResource: "/api/v1/catalog/resource/",
    getCatalogResourceUsingId1: "/api/v1/catalog/resource/",
    getCatalogResourceUsingId2: "/",
    updateWithPutCatalogResourceUsingId1: "/api/v1/catalog/resource/",
    updateWithPutCatalogResourceUsingId2: "/",
    updateWithPatchCatalogResourceUsingId1: "/api/v1/catalog/resource/",
    updateWithPatchCatalogResourceUsingId2: "/",
    deleteCatalogResource1: "/api/v1/catalog/resource/",
    deleteCatalogResource2: "/",
    getCatalogSectorList: "/api/v1/catalog/sector/",
    createCatalogSector: "/api/v1/catalog/sector/",
    getCatalogSectorById1: "/api/v1/catalog/sector/",
    getCatalogSectorById2: "/",
    updateWithPutCatalogSectorById1: "/api/v1/catalog/sector/",
    updateWithPutCatalogSectorById2: "/",
    updateWithPatchCatalogSectorById1: "/api/v1/catalog/sector/",
    updateWithPatchCatalogSectorById2: "/",
    deleteCatalogSector1: "/api/v1/catalog/sector/",
    deleteCatalogSector2: "/",
    getCatalogTaskList : "/api/v1/catalog/task/",
    createCatalogTask : "/api/v1/catalog/task/",
    getCatalogTaskById1 : "/api/v1/catalog/task/",
    getCatalogTaskById2 : "/",
    updateWithPutCatalogTaskById1 : "/api/v1/catalog/task/",
    updateWithPutCatalogTaskById2 : "/",
    updateWithPatchCatalogTaskById1 : "/api/v1/catalog/task/",
    updateWithPatchCatalogTaskById2 : "/",
    deleteCatalogTask1 : "/api/v1/catalog/task/",
    deleteCatalogTask2 : "/",
    getCatalogFeatureType: "/api/v1/catalog/feature-type/",
    createCatalogFeatureType: "/api/v1/catalog/feature-type/",
    getCatalogFeatureTypeById1: "/api/v1/catalog/feature-type/",
    getCatalogFeatureTypeById2: "/",
    updateWithPutCatalogFeatureTypeById1: "/api/v1/catalog/feature-type/",
    updateWithPutCatalogFeatureTypeById2: "/",
    updateWithPatchCatalogFeatureTypeById1: "/api/v1/catalog/feature-type/",
    updateWithPatchCatalogFeatureTypeById2: "/",
    deleteCatalogFeatureTypeById1: "/api/v1/catalog/feature-type/",
    deleteCatalogFeatureTypeById2: "/",
    getCatalogModuleTypeList: "/api/v1/catalog/module-type/",
    createCatalogModuleType: "/api/v1/catalog/module-type/",
    getCatalogModuleTypeById1: "/api/v1/catalog/module-type/",
    getCatalogModuleTypeById2: "/",
    updateWithPutCatalogModuleTypeById1: "/api/v1/catalog/module-type/",
    updateWithPutCatalogModuleTypeById2: "/",
    updateWithPatchCatalogModuleTypeById1: "/api/v1/catalog/module-type/",
    updateWithPatchCatalogModuleTypeById2: "/",
    deleteCatalogModuleType1: "/api/v1/catalog/module-type/",
    deleteCatalogModuleType2: "/",
    getCatalogBaseArchetypeList: "/api/v1/catalog/base-archetype/",
    createCatalogBaseArchetype: "/api/v1/catalog/base-archetype/",
    updateWithPutCatalogBaseArchetype1: "/api/v1/catalog/base-archetype/",
    updateWithPutCatalogBaseArchetype2: "/",
    updateWithPatchCatalogBaseArchetype1: "/api/v1/catalog/base-archetype/",
    updateWithPatchCatalogBaseArchetype2: "/",
    deleteCatalogBaseArchetype1: "/api/v1/catalog/base-archetype/",
    deleteCatalogBaseArchetype2: "/",
    addFeaturewithAI1 : "/api/v1/apps/",
    addFeaturewithAI2 : "/prd-ai-generator/generate-features-with-description/",
    addFeaturemanually1 : "/api/v1/apps/",
    addFeaturemanually2 : "/prd_ai_features/",
    getInstallerInstalledComponents1 : "/api/v1/apps/",
    getInstallerInstalledComponents2 : "/installer/installed-components/",
    getpreinstallmodule1 : "/installer/installed-modules/",
    getpreinstallmodule2 : "/api/v1/apps/",
    addmodules1 : "/api/v2/apps/",
    addmodules2 : "/installer/install/",
    cancelPendingInvitation1 : "/api/v2/apps/",
    cancelPendingInvitation2 : "/pending-invitations/",
    cancelPendingInvitation3 : "/cancel-invitation/",
    getprdfeatures1 : "/api/v1/apps/",
    getprdaifeatures2 : "/api/v1/apps/132957/prd_ai_features/",
    approveallfeatures1 : "/api/v1/apps/",
    approveallfeatures2 : "/prd_ai_features/approve-all/",
    createcategories1 : "/api/v1/apps/",
    createcategories2 : "/prd_ai_categories/",
    deletecategories1 : "/api/v1/apps/",
    deletecategories2 : "/prd_ai_categories/",
    getEdgeList1 : "/api/v1/apps/",
    getEdgeList2 : "/edges/",

    createEdge1 : "/api/v1/apps/",
    createEdge2 : "/edges/",

    getEdgeById1 : "/api/v1/apps/",
    getEdgeById2  : "/edges/",
    getEdgeById3  : "/",

    putEdgeById1 : "/api/v1/apps/",
    putEdgeById2  : "/edges/",
    putEdgeById3  : "/",

    patchEdgeById1 : "/api/v1/apps/",
    patchEdgeById2  : "/edges/",
    patchEdgeById3  : "/",

    deleteEdgeById1 : "/api/v1/apps/",
    deleteEdgeById2  : "/edges/",
    deleteEdgeById3  : "/",
    
    putcreatecategories1 : "/api/v1/apps/",
    putcreatecategories2 : "/prd_ai_categories/",
    putFeature1 : "/api/v1/apps/",
    putFeature2 : "/prd_ai_features/",
    patchFeature1 : "/api/v1/apps/",
    patchFeature2 : "/prd_ai_features/",
    deleteFeature1 : "/api/v1/apps/",
    deleteFeature2 : "/prd_ai_features/",
    getShareableComponentsList: "/api/v2/shareable-components/",
    createShareableComponents: "/api/v2/shareable-components/",
    getShareableComponentsById1: "/api/v2/shareable-components/",
    getShareableComponentsById2: "/",
    patchShareableComponentsById1: "/api/v2/shareable-components/",
    patchShareableComponentsById2: "/",
    changeMemberJobTitle1 : "/api/v2/apps/",
    changeMemberJobTitle2 : "/members/",
    changeMemberJobTitle3 : "/",
    getAllMemberList1 : "/api/v2/apps/",
    getAllMemberList2 : "/members/",
    deleteFeature2 : "/prd_ai_features/",


    getBugTaskList1 : "/api/v1/apps/",
    getBugTaskList2 : "/bug-tasks/",

    createBugTask1 : "/api/v1/apps/",
    createBugTask2 : "/bug-tasks/",
    
    getBugTaskById1: "/api/v1/apps/",
    getBugTaskById2: "/bug-tasks/",
    getBugTaskById3: "/",

    putBugTaskById1: "/api/v1/apps/",
    putBugTaskById2: "/bug-tasks/",
    putBugTaskById3: "/",

    patchBugTaskById1: "/api/v1/apps/",
    patchBugTaskById2: "/bug-tasks/",
    patchBugTaskById3: "/",

    deleteBugTaskById1: "/api/v1/apps/",
    deleteBugTaskById2: "/bug-tasks/",
    deleteBugTaskById3: "/",
    
    getComponentList1: "/api/v1/apps/",
    getComponentList2: "/components/",

    createComponent1: "/api/v1/apps/",
    createComponent2: "/components/",

    getComponentById1: "/api/v1/apps/",
    getComponentById2: "/components/",
    getComponentById3: "/",

    putComponent1: "/api/v1/apps/",
    putComponent2: "/components/",
    putComponent3: "/",

    patchComponent1: "/api/v1/apps/",
    patchComponent2: "/components/",
    patchComponent3: "/",

    deleteComponent1: "/api/v1/apps/",
    deleteComponent2: "/components/",
    deleteComponent3: "/",

    getFilesList1: "/api/v1/apps/",
    getFilesList2: "/files/",

    createFilesList1: "/api/v1/apps/",
    createFilesList2: "/files/",

    getFilesById1: "/api/v1/apps/",
    getFilesById2: "/files/",
    getFilesById3: "/",

    putFilesById1: "/api/v1/apps/",
    putFilesById2: "/files/",
    putFilesById3: "/",

    patchFilesById1: "/api/v1/apps/",
    patchFilesById2: "/files/",
    patchFilesById3: "/",

    deleteFiles1: "/api/v1/apps/",
    deleteFiles2: "/files/",
    deleteFiles3: "/",



    appsConnectorUpdate1: "/api/v2/apps/",
    appsConnectorUpdate2: "/connectors/",
    appsconnectorUpdate3: "/",

    appsPRDlist1: "/api/v1/apps/",
    appsPRDlist2: "/prd/",
    prdPartialUpdate1: "/api/v1/apps/",
    prdPartialUpdate2: "/prd/",

    getStudioScreen1 : "/api/v2/apps/",
    getStudioScreen2 : "/screens/?limit=40&page=1",
    getStudioScreenEdge1 : "/api/v2/apps/",
    getStudioScreenEdge2 : "/edges/?page=1&limit=20",
    postCreateScreen1 : "/api/v2/apps/",
    postCreateScreen2 : "/screens/create-screens/",
    getStudiopage1:"/api/v2/apps/",
    getStudiopage2:"/",

    // ---------------PRD New FLow----------------------//
    getOrganizationPRDList: "/api/v1/prd/",
    generateOrganizationPRD: " /api/v1/prd/generate-prd/",
    getOrganizationPRDById1: "/api/v1/prd/",
    getOrganizationPRDById2: "/",
    putOrganizationPRDById1: "/api/v1/prd/",
    putOrganizationPRDById2: "/",
    patchOrganizationPRDById1: "/api/v1/prd/",
    patchOrganizationPRDById2: "/",
    deleteOrganizationPRD1: "/api/v1/prd/",
    deleteOrganizationPRD2: "/",

    

  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/api/tests/*.js'
    //specPattern: 'cypress/integration/pagetest/add_test_case.js'
  }
});