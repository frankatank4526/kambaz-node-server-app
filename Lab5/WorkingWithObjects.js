const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
};
const module = {
    id: 1, name: "NodeJS Module", description: "Connecting client and server components", course: "CS4550"
};

export default function WorkingWithObjects(app) {
    const getAssignment = (req, res) => {
        res.json(assignment);
    };
    const getAssignmentTitle = (req, res) => {
        res.json(assignment.title);
    };
    const setAssignmentTitle = (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    };
    const getModule = (req, res) => {
        res.json(module);
    };
    const getModuleName = (req, res) => {
        res.json(module.name);
    };
    const setModuleName = (req, res) => {
        const {newName} = req.params;
        module.name = newName;
        res.json(module);
    }
    const setAssignmentScore = (req, res) => {
        const {newScore} = req.params;
        assignment.score = newScore;
        res.json(assignment);
    }
    const setAssignmentCompleted = (req, res) => {
        const {finished} = req.params;
        assignment.completed = finished == "true"? true: false;
        res.json(assignment);

    }
    const setModuleDescription = (req, res) => {
        const {newDescription} = req.query;
        module.description = newDescription;
        res.json(module);
    }
    app.get("/lab5/module/description", setModuleDescription);
    app.get("/lab5/assignment/score/:newScore", setAssignmentScore);
    app.get("/lab5/assignment/completed/:finished", setAssignmentCompleted);
    app.get("/lab5/module/name/:newName", setModuleName);
    app.get("/lab5/module/name", getModuleName);
    app.get("/lab5/module", getModule);
    app.get("/lab5/assignment/title/:newTitle", setAssignmentTitle);
    app.get("/lab5/assignment/title", getAssignmentTitle);
    app.get("/lab5/assignment", getAssignment);
};
