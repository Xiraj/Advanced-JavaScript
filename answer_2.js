const Company = {
    marketing: [
    {
        name: "Budi",
        salary: 5000000,
    },
    {
        name: "Agus",
        salary: 4500000,
    },
    ],
    engineer: {
        frontend: [
            {
                name: "Suci",
                salary: 8500000,
            },
            {
                name: "Lukito",
                salary: 7000000,
            },
        ],
        backend: [
            {
                name: "Bustomi",
                salary: 9500000,
            },
        ],
        devops: [
            {
                name: "Paul",
                salary: 9000000,
            },
        ],
    },
};

function countSalary(Obj) {
    let total = 0;
    for (const key in Obj) {
      if (Array.isArray(Obj[key])) {
        Obj[key].forEach((item) => {
          total += item.salary;
        });
      } else {
        total += countSalary(Obj[key]);
      }
    }
    return total;
}

console.log(countSalary(Company));