const persons = [
    {
        firstName: 'Viji',
        lastName: 'Krish'
    },
    {
        firstName: 'Meera',
        lastName: 'Raghu'
    },
    {
        firstName: 'Sahana',
        lastName: 'R'
    },
    {
        firstName: 'Rochana',
        lastName: 'H S'
    },
    {
        firstName: 'Jossy',
        lastName: 'Jhon'
    }
];

const copyOfPersons = [];


function fetchPerson(printFn) {
    setTimeout(() => {
        copyOfPersons.push(...persons);
        printFn();
    }, 5000);
    console.log('called before settimeout');
}

function printPerson() {
    console.log(copyOfPersons);
}

fetchPerson(printPerson);