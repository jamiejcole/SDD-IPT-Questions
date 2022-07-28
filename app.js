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

function submitForm () {
    let year = document.getElementById("year").value;
    console.log(year);
    let url = dataSDD[year];
    window.open(url);
}

document.getElementById("year")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        submitForm();
    }
});