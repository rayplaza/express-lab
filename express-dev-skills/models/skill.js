const skills = [
    {skill: 'Javascript', level: 'Mediocre'},
    {skill: 'Node.JS', level: 'Laughable'},
    {skill: 'Composer', level: 'Semi-Pro'},
    {skill: 'Audio Engineer', level: 'Master'}
];

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}
