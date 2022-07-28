const dataSDDQuestions = {
    "2021": "https://educationstandards.nsw.edu.au/wps/wcm/connect/450c995e-07d0-445e-bac9-35627d510103/2021-hsc-software-design-and-development.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-450c995e-07d0-445e-bac9-35627d510103-nQBIUAd",
    "2020": "https://educationstandards.nsw.edu.au/wps/wcm/connect/cb7b8ab7-1a70-4a79-adda-37b0a4de403d/2020-hsc-software-design-and-development.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-cb7b8ab7-1a70-4a79-adda-37b0a4de403d-nmh6WZ5",
    "2019": "https://educationstandards.nsw.edu.au/wps/wcm/connect/96813e25-c129-46e1-ab5b-e3dee3094966/2019-hsc-software-design-and-development.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-96813e25-c129-46e1-ab5b-e3dee3094966-nbDp1l7",
    "2018": "https://educationstandards.nsw.edu.au/wps/wcm/connect/8b0014e8-87c9-415f-9077-2c4fde1e20a5/2018-hsc-software-design-and-development.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-8b0014e8-87c9-415f-9077-2c4fde1e20a5-mrHbJa3",
    "2017": "https://educationstandards.nsw.edu.au/wps/wcm/connect/e1b5d35d-15b8-4c5a-a502-b2c775826621/2017-hsc-sdd.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-e1b5d35d-15b8-4c5a-a502-b2c775826621-nbDp1l7",
    "2016": "https://educationstandards.nsw.edu.au/wps/wcm/connect/e4d81adc-99bb-45ee-92b8-85e939f60a05/2016-hsc-sdd.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-e4d81adc-99bb-45ee-92b8-85e939f60a05-nbDp1l7",
    "2015": "https://educationstandards.nsw.edu.au/wps/wcm/connect/5356b1f4-9a12-401d-b390-df520d6fe02c/software-design+-dev-hsc-exam-2015.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-5356b1f4-9a12-401d-b390-df520d6fe02c-nbDp1l7",
    "2014": "https://educationstandards.nsw.edu.au/wps/wcm/connect/dc23bd1e-959d-49fa-bd7c-2d0c0935dd04/software-design+-dev-hsc-exam-2014.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-dc23bd1e-959d-49fa-bd7c-2d0c0935dd04-nbDp1l7",
    "2013": "https://educationstandards.nsw.edu.au/wps/wcm/connect/afc00d76-1b35-464b-a524-b95f709c3002/software-design+-dev-hsc-exam-2013.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-afc00d76-1b35-464b-a524-b95f709c3002-nbDp1l7",
    "2012": "https://educationstandards.nsw.edu.au/wps/wcm/connect/2e0a9102-1e7a-47c2-8cf0-d04d84d35417/software-design-dev-hsc-exam-2012.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-2e0a9102-1e7a-47c2-8cf0-d04d84d35417-nbDp1l7",
    "2011": "https://educationstandards.nsw.edu.au/wps/wcm/connect/b764b81c-ee84-4174-8321-5e085a2617d5/software-design+-dev-hsc-exam-2011.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-b764b81c-ee84-4174-8321-5e085a2617d5-nbDp1l7",
    "2010": "https://educationstandards.nsw.edu.au/wps/wcm/connect/f1e1adc1-0a8d-4f33-945f-f3caea0fbac0/software-design+-dev-hsc-exam-2010.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-f1e1adc1-0a8d-4f33-945f-f3caea0fbac0-nbDp1l7",
    "2009": "https://educationstandards.nsw.edu.au/wps/wcm/connect/11cb93f6-8ef6-4842-adac-c8144ac08d47/software-design+-dev-hsc-exam-2009.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-11cb93f6-8ef6-4842-adac-c8144ac08d47-nbDp1l7",
    "2008": "https://educationstandards.nsw.edu.au/wps/wcm/connect/7e588f27-1ef7-40bc-bcb2-fe2a630c1cfe/software-design+-dev-hsc-exam-2008.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-7e588f27-1ef7-40bc-bcb2-fe2a630c1cfe-nbDp1l7",
    "2007": "https://educationstandards.nsw.edu.au/wps/wcm/connect/9348c383-5087-423f-8367-f4a349a1b6d4/software-design+-dev-hsc-exam-2007.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-9348c383-5087-423f-8367-f4a349a1b6d4-nbDp1l7",
    "2006": "https://educationstandards.nsw.edu.au/wps/wcm/connect/44bac1d3-411b-4931-98b9-178e112a6b6f/software-design+-dev-hsc-exam-2006.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-44bac1d3-411b-4931-98b9-178e112a6b6f-nbDp1l7",
    "2005": "https://educationstandards.nsw.edu.au/wps/wcm/connect/d9ef8b80-1be4-43c1-9799-e459a6a483c4/software-design+-dev-hsc-exam-2005.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-d9ef8b80-1be4-43c1-9799-e459a6a483c4-nbDp1l7",
    "2004": "https://educationstandards.nsw.edu.au/wps/wcm/connect/a2dab0e5-0f09-4715-b2a1-867826a0355a/software-design+-dev-hsc-exam-2004.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-a2dab0e5-0f09-4715-b2a1-867826a0355a-nbDp1l7",
    "2003": "https://educationstandards.nsw.edu.au/wps/wcm/connect/d1c04576-e715-410c-bb8d-85118d119dc0/software-design+-dev-hsc-exam-2003.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-d1c04576-e715-410c-bb8d-85118d119dc0-nbDp1l7",
    "2002": "https://educationstandards.nsw.edu.au/wps/wcm/connect/3ba0d79d-a061-426b-8360-69af25ee607d/software-design+-dev-hsc-exam-2002.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-3ba0d79d-a061-426b-8360-69af25ee607d-nbDp1l7",
    "2001": "https://educationstandards.nsw.edu.au/wps/wcm/connect/fd09ec86-bd27-4ddf-9250-083be703d812/software-design+-dev-hsc-exam-2001.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-fd09ec86-bd27-4ddf-9250-083be703d812-nbDp1l7"
}

const dataSDDMarking = {
    "2021": "https://educationstandards.nsw.edu.au/wps/wcm/connect/b83eb76b-51c8-40e4-a9ee-5cec68e443f2/2021-hsc-software-design-and-development-mg.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-b83eb76b-51c8-40e4-a9ee-5cec68e443f2-nWuZs7P",
    "2020": "https://educationstandards.nsw.edu.au/wps/wcm/connect/23b6cb6c-3c91-4a1e-91dc-59c80dc7426f/2020-hsc-software-design-and-development-mg.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-23b6cb6c-3c91-4a1e-91dc-59c80dc7426f-np4MgtL",
    "2019": "https://educationstandards.nsw.edu.au/wps/wcm/connect/3a414d3d-55c5-436e-899c-8a5b384b047e/2019-hsc-software-design-and-development-mg.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-3a414d3d-55c5-436e-899c-8a5b384b047e-nbDp1l7",
    "2018": "https://educationstandards.nsw.edu.au/wps/wcm/connect/a1f42606-b6f6-4716-83b3-37420babbbdb/2018-hsc-software-design-and-develop-mg.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-a1f42606-b6f6-4716-83b3-37420babbbdb-nbDp1l7",
    "2017": "https://educationstandards.nsw.edu.au/wps/wcm/connect/ce2a9eac-49c9-4708-9d50-c8dcee29d371/2017-hsc-mg-sdd.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-ce2a9eac-49c9-4708-9d50-c8dcee29d371-nbDp1l7",
    "2016": "https://educationstandards.nsw.edu.au/wps/wcm/connect/1a025378-cafa-463c-b043-7b96d0ae9901/2016-hsc-mg-sdd.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-1a025378-cafa-463c-b043-7b96d0ae9901-nbDp1l7",
    "2015": "https://educationstandards.nsw.edu.au/wps/wcm/connect/fec889a1-536a-48f2-8e34-36fbec3af79b/software-design+-dev-hsc-mg-2015.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-fec889a1-536a-48f2-8e34-36fbec3af79b-nbDp1l7",
    "2014": "https://educationstandards.nsw.edu.au/wps/wcm/connect/195b1715-877e-45b8-9002-17232c88b170/software-design-dev-hsc-mg-2014.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-195b1715-877e-45b8-9002-17232c88b170-nbDp1l7",
    "2013": "https://educationstandards.nsw.edu.au/wps/wcm/connect/2dfa672b-ec8e-4555-8cbc-2656efdb3cc5/software-design+-dev-hsc-mg-2013.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-2dfa672b-ec8e-4555-8cbc-2656efdb3cc5-nbDp1l7",
    "2012": "https://educationstandards.nsw.edu.au/wps/wcm/connect/d34605e2-cd08-4257-8cf9-e6b936b82c32/software-design-dev-hsc-mg-2012.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-d34605e2-cd08-4257-8cf9-e6b936b82c32-nbDp1l7",
    "2011": "https://educationstandards.nsw.edu.au/wps/wcm/connect/6975541c-5b89-460c-9bf8-2c8458471d46/software-design+-dev-hsc-mg-2011.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-6975541c-5b89-460c-9bf8-2c8458471d46-nbDp1l7",
    "2010": "https://educationstandards.nsw.edu.au/wps/wcm/connect/27d05aed-e711-4197-9701-7e17f65c9d91/software-design+-dev-hsc-mg-2010.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-27d05aed-e711-4197-9701-7e17f65c9d91-nbDp1l7",
    "2009": "https://educationstandards.nsw.edu.au/wps/wcm/connect/f57feec7-3329-4d95-b6bf-b980800103cd/software-design+-dev-hsc-mg-2009.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-f57feec7-3329-4d95-b6bf-b980800103cd-nbDp1l7",
    "2008": "https://educationstandards.nsw.edu.au/wps/wcm/connect/484df737-d955-4627-acd5-331d17271266/software-design+-dev-hsc-notes-2008.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-484df737-d955-4627-acd5-331d17271266-nbDp1l7",
    "2007": "https://educationstandards.nsw.edu.au/wps/wcm/connect/5b21061a-6a94-404c-9683-4fa828026dd5/software-design+-dev-hsc-notes-2007.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-5b21061a-6a94-404c-9683-4fa828026dd5-nbDp1l7",
    "2006": "https://educationstandards.nsw.edu.au/wps/wcm/connect/8af7c28c-c898-4426-ab66-b49649c5e0de/software-design+-dev-hsc-mg-2006.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-8af7c28c-c898-4426-ab66-b49649c5e0de-nbDp1l7",
    "2005": "https://educationstandards.nsw.edu.au/wps/wcm/connect/485fdeaf-6413-43c5-a15e-c487ccf9d94b/software-design+-dev-hsc-notes-2005.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-485fdeaf-6413-43c5-a15e-c487ccf9d94b-nbDp1l7",
    "2004": "https://educationstandards.nsw.edu.au/wps/wcm/connect/7e31ffce-cd68-45cf-abb8-4177fad6d92a/software-design+-dev-hsc-notes-2004.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-7e31ffce-cd68-45cf-abb8-4177fad6d92a-nbDp1l7",
    "2003": "https://educationstandards.nsw.edu.au/wps/wcm/connect/c74e7812-4e01-4eac-a1ac-66f3f1da017f/software-design+-dev-hsc-notes-2003.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-c74e7812-4e01-4eac-a1ac-66f3f1da017f-nbDp1l7",
    "2002": "https://educationstandards.nsw.edu.au/wps/wcm/connect/4efa91a1-6983-4c5f-950c-505e639468c6/software-design+-dev-hsc-notes-2002.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-4efa91a1-6983-4c5f-950c-505e639468c6-nbDp1l7",
    "2001": "https://educationstandards.nsw.edu.au/wps/wcm/connect/c837cba8-a1d2-4ba5-bf74-f663b22be005/software-design+-dev-hsc-notes-2001.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-c837cba8-a1d2-4ba5-bf74-f663b22be005-nbDp1l7"
}

const dataIPTQuestions = {
    "2021": "https://educationstandards.nsw.edu.au/wps/wcm/connect/35dd6dd5-edde-4ede-8fcf-c6266e49bc0c/2021-hsc-information-processes-and-technology.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-35dd6dd5-edde-4ede-8fcf-c6266e49bc0c-nScPQ7W",
    "2020": "https://educationstandards.nsw.edu.au/wps/wcm/connect/54777afb-7c9b-44da-9051-7033848c0b27/2020-hsc-information-processes-and-technology.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-54777afb-7c9b-44da-9051-7033848c0b27-nmVNxTo",
    "2019": "https://educationstandards.nsw.edu.au/wps/wcm/connect/a2b693c9-2a2a-4a5c-aacb-588c1bf45423/2019-hsc-ipt.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-a2b693c9-2a2a-4a5c-aacb-588c1bf45423-nbDp1l7",
    "2018": "https://educationstandards.nsw.edu.au/wps/wcm/connect/6f5008f1-b580-4293-8d4c-1e54bf7e75ec/2018-hsc-ipt.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-6f5008f1-b580-4293-8d4c-1e54bf7e75ec-nbDp1l7",
    "2017": "https://educationstandards.nsw.edu.au/wps/wcm/connect/683708fb-6b5f-4e8b-9d66-a1e28b170f68/2017-hsc-ipt.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-683708fb-6b5f-4e8b-9d66-a1e28b170f68-nbDp1l7",
    "2016": "https://educationstandards.nsw.edu.au/wps/wcm/connect/4f7d70bc-f48e-4bc2-9d10-ba0044432d40/2016-hsc-ipt.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-4f7d70bc-f48e-4bc2-9d10-ba0044432d40-nbDp1l7",
    "2015": "https://educationstandards.nsw.edu.au/wps/wcm/connect/0ad8b3bc-87b4-4867-9931-3e21fe5e6960/ipt-hsc-exam-2015.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-0ad8b3bc-87b4-4867-9931-3e21fe5e6960-nbDp1l7",
    "2014": "https://educationstandards.nsw.edu.au/wps/wcm/connect/284d30a3-3fe6-4b4f-a038-dd3dc894c72a/ipt-hsc-exam-2014.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-284d30a3-3fe6-4b4f-a038-dd3dc894c72a-nbDp1l7",
    "2013": "https://educationstandards.nsw.edu.au/wps/wcm/connect/87056a79-0c17-49ef-abde-0bdb0e1d5d18/ipt-hsc-exam-2013.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-87056a79-0c17-49ef-abde-0bdb0e1d5d18-nbDp1l7",
    "2012": "https://educationstandards.nsw.edu.au/wps/wcm/connect/f7b765d8-94fe-44a6-be6f-bda68ac38663/ipt-hsc-exam-2012.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-f7b765d8-94fe-44a6-be6f-bda68ac38663-nbDp1l7",
    "2011": "https://educationstandards.nsw.edu.au/wps/wcm/connect/d2a7b59d-82ef-4af7-821a-bb6b61c4dd6f/ipt-hsc-exam-2011.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-d2a7b59d-82ef-4af7-821a-bb6b61c4dd6f-nbDp1l7",
    "2010": "https://educationstandards.nsw.edu.au/wps/wcm/connect/3317ecc4-dbdd-4413-9830-7887ad027c1c/ipt-hsc-exam-2010.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-3317ecc4-dbdd-4413-9830-7887ad027c1c-nbDp1l7",
    "2009": "https://educationstandards.nsw.edu.au/wps/wcm/connect/beb9c555-f919-476d-b1cd-cd433f391edb/ipt-hsc-exam-2009.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-beb9c555-f919-476d-b1cd-cd433f391edb-nbDp1l7",
    "2008": "https://educationstandards.nsw.edu.au/wps/wcm/connect/420e79af-9942-4d60-9a48-0fcc17f5732e/ipt-hsc-exam-2008.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-420e79af-9942-4d60-9a48-0fcc17f5732e-nbDp1l7",
    "2007": "https://educationstandards.nsw.edu.au/wps/wcm/connect/9d29ac82-0f37-4224-aa12-cfaec5605a45/ipt-hsc-exam-2007.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-9d29ac82-0f37-4224-aa12-cfaec5605a45-nbDp1l7",
    "2006": "https://educationstandards.nsw.edu.au/wps/wcm/connect/9238baaf-3f94-4bc9-bb2e-b52a0a9b7fc7/ipt-hsc-exam-2006.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-9238baaf-3f94-4bc9-bb2e-b52a0a9b7fc7-nbDp1l7",
    "2005": "https://educationstandards.nsw.edu.au/wps/wcm/connect/2ad9328a-c75f-488a-aedc-8c70b5d892f7/ipt-hsc-exam-2005.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-2ad9328a-c75f-488a-aedc-8c70b5d892f7-nbDp1l7",
    "2004": "https://educationstandards.nsw.edu.au/wps/wcm/connect/307d97f2-a6df-47f6-b4b9-87e8faff071c/ipt-hsc-exam-2004.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-307d97f2-a6df-47f6-b4b9-87e8faff071c-nbDp1l7",
    "2003": "https://educationstandards.nsw.edu.au/wps/wcm/connect/35694663-82bf-445d-8f87-03bcf4fdae40/ipt-hsc-exam-2003.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-35694663-82bf-445d-8f87-03bcf4fdae40-nbDp1l7",
    "2002": "https://educationstandards.nsw.edu.au/wps/wcm/connect/86acb86e-030e-463b-b8ec-24a6eda53ed9/ipt-hsc-exam-2002.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-86acb86e-030e-463b-b8ec-24a6eda53ed9-nbDp1l7",
    "2001": "https://educationstandards.nsw.edu.au/wps/wcm/connect/67a352aa-6851-4810-8ba4-b188f5e310e8/ipt-hsc-exam-2001.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-67a352aa-6851-4810-8ba4-b188f5e310e8-nbDp1l7"
}

const dataIPTMarking = {
    "2021": "https://educationstandards.nsw.edu.au/wps/wcm/connect/0d84b54f-d074-459c-b33d-b82a00ef14da/2021-hsc-information-processes-and-technology-mg.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-0d84b54f-d074-459c-b33d-b82a00ef14da-nWUOMgR",
    "2020": "https://educationstandards.nsw.edu.au/wps/wcm/connect/2d86cb73-a294-4728-a8f5-d1dfb52d00a9/2020-hsc-information-processes-and-technology-mg.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-2d86cb73-a294-4728-a8f5-d1dfb52d00a9-np4RJW6",
    "2019": "https://educationstandards.nsw.edu.au/wps/wcm/connect/9fe5dead-a3a1-4d0d-926a-89fcbbb00b25/2019-hsc-information-processes-and-technology-mg.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-9fe5dead-a3a1-4d0d-926a-89fcbbb00b25-nbDp1l7",
    "2018": "https://educationstandards.nsw.edu.au/wps/wcm/connect/7c36c7b0-a69b-4929-b0fa-260ed71381ab/2018-hsc-ipt-mg.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-7c36c7b0-a69b-4929-b0fa-260ed71381ab-nbDp1l7",
    "2017": "https://educationstandards.nsw.edu.au/wps/wcm/connect/94cba97f-1b33-4e78-93ab-fe7f75d92851/2017-hsc-mg-ipt.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-94cba97f-1b33-4e78-93ab-fe7f75d92851-nbDp1l7",
    "2016": "https://educationstandards.nsw.edu.au/wps/wcm/connect/2374f056-3c74-454d-a494-a678ae6b03cf/2016-hsc-mg-ipt.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-2374f056-3c74-454d-a494-a678ae6b03cf-nbDp1l7",
    "2015": "https://educationstandards.nsw.edu.au/wps/wcm/connect/31912e7d-d560-4ff2-8cb6-8218d35b8d2c/ipt-hsc-mg-2015.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-31912e7d-d560-4ff2-8cb6-8218d35b8d2c-nbDp1l7",
    "2014": "https://educationstandards.nsw.edu.au/wps/wcm/connect/a1ca3b1f-1b4d-4e06-a5c2-de2dffa91d2b/ipt-hsc-mg-2014.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-a1ca3b1f-1b4d-4e06-a5c2-de2dffa91d2b-nbDp1l7",
    "2013": "https://educationstandards.nsw.edu.au/wps/wcm/connect/92b6d93d-33ae-4d3e-b63f-576c7aba76d2/ipt-hsc-mg-2013.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-92b6d93d-33ae-4d3e-b63f-576c7aba76d2-nbDp1l7",
    "2012": "https://educationstandards.nsw.edu.au/wps/wcm/connect/1f043705-ab52-4d1a-adb5-e360c6a5334a/ipt-hsc-mg-2012.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-1f043705-ab52-4d1a-adb5-e360c6a5334a-nbDp1l7",
    "2011": "https://educationstandards.nsw.edu.au/wps/wcm/connect/740e2455-20c9-4875-9e44-a27af5394aa3/ipt-hsc-mg-2011.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-740e2455-20c9-4875-9e44-a27af5394aa3-nbDp1l7",
    "2010": "https://educationstandards.nsw.edu.au/wps/wcm/connect/9577b531-4efd-4c32-834c-749d25ffdba1/ipt-hsc-mg-2010.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-9577b531-4efd-4c32-834c-749d25ffdba1-nbDp1l7",
    "2009": "https://educationstandards.nsw.edu.au/wps/wcm/connect/0cfb5d24-e72f-4926-8d60-5410ba1c30e2/ipt-hsc-mg-2009.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-0cfb5d24-e72f-4926-8d60-5410ba1c30e2-nbDp1l7",
    "2008": "https://educationstandards.nsw.edu.au/wps/wcm/connect/afcf8e9c-07b3-4126-b34f-2395b69de0c5/ipt-hsc-notes-2008.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-afcf8e9c-07b3-4126-b34f-2395b69de0c5-nbDp1l7",
    "2007": "https://educationstandards.nsw.edu.au/wps/wcm/connect/20acb894-07d1-4f9d-8c39-276fe6f78bd2/ipt-hsc-notes-2007.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-20acb894-07d1-4f9d-8c39-276fe6f78bd2-nbDp1l7",
    "2006": "https://educationstandards.nsw.edu.au/wps/wcm/connect/955a88a3-e924-48d9-8554-fb43baeebca7/ipt-hsc-notes-2006.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-955a88a3-e924-48d9-8554-fb43baeebca7-nbDp1l7",
    "2005": "https://educationstandards.nsw.edu.au/wps/wcm/connect/8ee5d07f-9ff4-439d-ae3c-cc49c0ceb501/ipt-hsc-notes-2005.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-8ee5d07f-9ff4-439d-ae3c-cc49c0ceb501-nbDp1l7",
    "2004": "https://educationstandards.nsw.edu.au/wps/wcm/connect/f43db86a-03b6-472e-bc4d-ebc240ee0443/ipt-hsc-notes-2004.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-f43db86a-03b6-472e-bc4d-ebc240ee0443-nbDp1l7",
    "2003": "https://educationstandards.nsw.edu.au/wps/wcm/connect/7e9aba7c-f089-4626-8550-5c2580f4c1dd/ipt-hsc-notes-2003.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-7e9aba7c-f089-4626-8550-5c2580f4c1dd-nbDp1l7",
    "2002": "https://educationstandards.nsw.edu.au/wps/wcm/connect/a6807267-8b24-4380-a8ce-a6ab803ab3cf/ipt-hsc-notes-2002.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-a6807267-8b24-4380-a8ce-a6ab803ab3cf-nbDp1l7",
    "2001": "https://educationstandards.nsw.edu.au/wps/wcm/connect/0cfb34dc-a15c-4300-bb5c-ae218ebd825a/ipt-hsc-notes-2001.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-0cfb34dc-a15c-4300-bb5c-ae218ebd825a-nbDp1l7"
}

function submitForm () {
    let subject = document.querySelector('input[name="subject"]:checked').value;
    let year = document.getElementById("year").value;
    let qa = document.querySelector('input[name="qa"]:checked').value;
    let num = document.getElementById('num').value;

    console.log(year, qa);

    let url = "";
    let urlSuffix = "";

    if (num.length <= 0) {
        console.log("empty");
    }
    else {
        if (num <=20 ) {
            urlSuffix = num.toString();
        }
        else {
            urlSuffix = "Question " + num.toString();
        }
    }

    if (subject === "SDD") {
        if (qa === "Questions") {
            url = dataSDDQuestions[year];
        }
        else {
            url = dataSDDMarking[year];
        }
    }
    else {
        if (qa === "Questions") {
            url = dataIPTQuestions[year];
        }
        else {
            url = dataIPTMarking[year];
        }
    }
    
    if (num.length <= 0) {
        window.open(url);
    }
    else {
        window.open(url + "#" + urlSuffix);
    }
    
}

document.getElementById("year")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        submitForm();
    }
});


document.getElementById("num")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        submitForm();
    }
});