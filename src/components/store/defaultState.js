export const DefaultState = {
    users: [{
            id: "U1",
            name: "Dev",

            friends: [`U2`],
        },
        {
            id: "U2",
            name: "C. Eeyo",
            friends: [],
        },
        {
            id: "U3",
            name: "C. Eeyo",
            friends: [],
        },
        {
            id: "U4",
            name: "C. Eeyo",
            friends: [],
        },
    ],
    groups: [{
            name: "To Do",
            id: "G1",
            owner: "U1",
        },
        {
            name: "Doing",
            id: "G2",
            owner: "U2",
        },
        {
            name: "Done",
            id: "G3",
            owner: "U3",
        },
        {
            name: "Done",
            id: "G4",
            owner: "U4",
        },
    ],
    tasks: [{
            name: "Refactor tests",
            id: "T1",
            group: "G1",
            owner: "U1",
            isComplete: false,
        },
        {
            name: "Meet with CTO",
            id: "T2",
            group: "G2",
            owner: "U2",
            isComplete: true,
        },
        {
            name: "Compile ES6",
            id: "T3",
            group: "G3",
            owner: "U3",
            isComplete: false,
        },
        {
            name: "Update component snapshots",
            id: "T4",
            group: "G4",
            owner: "U4",
            isComplete: true,
        },
        // {
        //     name: "Production optimizations",
        //     id: "T5",
        //     group: "G3",
        //     owner: "U2",
        //     isComplete: false,
        // },
    ],
    comments: [{
        owner: "U1",
        id: "C1",
        task: "T1",
        content: "Great work!",
    }, ],
};