const data = [
/*0*/{
        id: "0", type: "title", content: {
            title: "Tech skills / Activity", description: "some description for the form",
            other: "Зірочка (*) указує, що запитання обов’язкове"
        }
    },
    /*1*/{
        id: "1", type: "input",
        content: {
            label: "Name, Surname", description: null, isRequired: true, name: "firstLastName", placeholder: "Ваша відповідь",
            conditionals: [
                { isRequired: true }
            ]
        }
    },
    /*2*/{
        id: "2", type: "input",
        content: {
            label: "Your team", description: null, isRequired: true, name: "nameTeam", placeholder: "Ваша відповідь",
            conditionals: [
                {
                    isRequired: true,
                    minlen: 5
                }
            ]
        }
    },
    /*3*/{
        id: "3", type: "choose",
        content: {
            label: "My favorite tech (best)", description: null, isRequired: true, name: "favTech",
            valueArray: [
                { id: "fav_vue", value: "Vue" },
                { id: "fav_react", value: "React" },
                { id: "fav_angular", value: "Angular" },
                { id: "fav_nodejs", value: "NodeJS" },
                { id: "fav_sap", value: "SAP Fiori" },
                { id: "fav_other", value: "Інше:" },
            ],
            type: "radio",
            conditionals: [
                {
                    isRequired: true
                }
            ]
        }
    },
    /*4*/{
        id: "4", type: "choose",
        content: {
            label: "I want to learn tech (JS)", description: null, isRequired: true, name: "wantToLearn",
            valueArray: [
                { id: "want_js", value: "JS" },
                { id: "want_ts", value: "TS" },
                { id: "want_react", value: "React" },
                { id: "want_vue", value: "Vue" },
                { id: "want_angular", value: "Angular" },
                { id: "want_nodejs", value: "NodeJS" },
                { id: "want_sap", value: "SAP Fiori" },
                { id: "want_reactnative", value: "React Native" },
                { id: "want_flutter", value: "Flutter" },
                { id: "want_other", value: "Інше:" },
            ],
            type: "checkbox",
            conditionals: [
                {
                    minlencheckbox: 1,
                    isRequired: true
                }
            ]
        }
    },
    /*5*/{
        id: "5", type: "multichoose",
        content: {
            label: "My current level on tech", description: null, isRequired: true, name: "currentlevel",
            valueArray: {
                rows: [
                    { label: "JS", name: "js" },
                    { label: "TS", name: "ts" },
                    { label: "React", name: "react" },
                    { label: "Vue", name: "vue" },
                    { label: "Angular", name: "angular" },
                    { label: "NodeJS", name: "nodejs" },
                    { label: "GraphQL", name: "graphql" },
                    { label: "Wordpress, Drupal", name: "wordpress" },
                    { label: "Python", name: "python" },
                    { label: "REST", name: "rest" },
                    { label: "Other", name: "other" },
                    { label: "React Native", name: "reactnative" },
                    { label: "Flutter", name: "flutter" },
                ],
                columns: ["Not relevant", "Trainee", "Junior", "Middle", "Senior", "Expert"],
            },
            type: "radio",
            conditionals: [{}]
        }
    },
    /*6*/{
        id: "6", type: "choose",
        content: {
            label: "I'm interested to", description: null, isRequired: true, name: "interestedTo",
            valueArray: [
                { id: "int_devPres", value: "develop presentations" },
                { id: "int_DX8", value: "develop DX8" },
                { id: "int_complexapp", value: "develop complex app" },
                { id: "int_hrn", value: "develop hybrid react-native" },
                { id: "int_isp", value: "develop internal small project" },
                { id: "int_pet", value: "develop pet-projects" },
                { id: "int_research", value: "research for frontend competence center" },
                { id: "int_other", value: "Інше:" },
            ],
            type: "checkbox",
            conditionals: [
                {
                    minlencheckbox: 1,
                    isRequired: true
                }
            ]
        }
    },
    /*7*/{
        id: "7", type: "input",
        content: {
            label: "#1 My goals on next time",
            description: `Let's prepare 3 goals for your and delivery future growth. 
        You can check those goals in next 3 month. Example: want to create prject with react, redux, saga, rest 
        in next 3month. Project should contain 10+ complex components, routing...`,
            isRequired: true,
            name: "goals_one",
            placeholder: "Ваша відповідь",
            conditionals: [
                {
                    isRequired: true,
                    minlen: 10
                }
            ]
        }
    },
    /*8*/{
        id: "8", type: "input",
        content: {
            label: "#2 My goals on next time", description: null, isRequired: true, name: "goals_two", placeholder: "Ваша відповідь",
            conditionals: [
                {
                    isRequired: true,
                    minlen: 10
                }
            ]
        }
    },
    /*9*/{
        id: "9", type: "input",
        content: {
            label: "#3 My goals on next time", description: null, isRequired: true, name: "goals_three", placeholder: "Ваша відповідь",
            conditionals: [
                {
                    isRequired: true,
                    minlen: 10
                }
            ]
        }
    },
    /*10*/{
        id: "10", type: "choose",
        content: {
            label: "I want to work on new PreSales. MVP, POC or new projects",
            description: "For future planning we want to know if it is interested for you",
            isRequired: true, name: "presales",
            valueArray: [
                { id: "presales_yes", value: "yes" },
                { id: "presales_no", value: "no" },
            ],
            type: "radio",
            conditionals: [
                {
                    isRequired: true
                }
            ]
        }
    },
    /*11*/{
        id: "11", type: "choose",
        content: {
            label: "I want to speak on FCC meetup or other meetups",
            description: "We want to check if we should come back internal FCC team meetups",
            isRequired: true, name: "fcc",
            valueArray: [
                { id: "fcc_yes", value: "yes" },
                { id: "fcc_no", value: "no" },
            ],
            type: "radio",
            conditionals: [
                {
                    isRequired: true
                }
            ]
        }
    },
    /*12*/{
        id: "12", type: "choose",
        content: {
            label: "My topic in FCC",
            description: "We want to check if we should come back internal FCC team meetups.",
            isRequired: true, name: "topicfcc",
            valueArray: [
                { id: "topicfcc_gto", value: "Global technology overview" },
                { id: "topicfcc_aat", value: "Analytic and architecture topics" },
                { id: "topicfcc_tb", value: "Technology battle" },
                { id: "topicfcc_ae", value: "Anthill edetailer (internal stuff)" },
                { id: "topicfcc_dx8", value: "Anthill DX8 (internal stuff)" },
                { id: "topicfcc_pet", value: "Pet projects discussions and showing" },
                { id: "topicfcc_other", value: "Інше:" }
            ],
            type: "checkbox",
            conditionals: [
                {
                    minlencheckbox: 1,
                    isRequired: true
                }
            ]
        }
    },
    /*13*/{
        id: "13", type: "choose",
        content: {
            label: "I want to visit FCC meetup", description: null, isRequired: true,
            name: "visitfcc",
            valueArray: [
                { id: "visitfcc_yes", value: "yes" },
                { id: "visitfcc_no", value: "no" },
            ],
            type: "radio",
            conditionals: [
                {
                    isRequired: true
                }
            ]
        }
    },
    /*14*/{
        id: "14", type: "input",
        content: {
            label: "My idea of how to improve our work",
            description: "You can propose everything that you want. Doesn't matter your delivery / team",
            isRequired: false, name: "ideas", placeholder: "Ваша відповідь",
            conditionals: [
                {
                    isRequired: false
                }
            ]
        }
    }
]

export default data