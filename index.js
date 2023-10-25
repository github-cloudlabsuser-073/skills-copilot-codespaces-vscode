const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
        { name: 'Bob', age: 35 }
    ],
    [
        { name: 'Mary', age: 40 },
        { name: 'Mark', age: 45 },
        { name: 'Sue', age: 50 }
    ]
];

const names = data.flatMap(arr => arr.map(obj => obj.name));

console.log(names); // Output: ['John', 'Jane', 'Bob', 'Mary', 'Mark', 'Sue']
