// Write your solution in this file!
const employee = {
    name: "Chris",
    streetAddress: "2840 Somerton Drive",
};

function updateEmployeeWithKeyAndValue(employee,key,value) //Update employee non-destructively.
{
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) //Update employee destructively.
{
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee,key) // Delete employee non-destructively.
{
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,key) // Delete employee destructively.
{
    delete employee[key];
    return employee;
}