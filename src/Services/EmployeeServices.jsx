const keys = {
    employees : 'employees',
    employeeId : 'employeeId',
}

export const getDepartmentCollection = () => ([
    { id: '1', title: 'Development ' },
    { id: '2', title: 'Marketing ' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' },
    { id: '5', title: 'Informatique' },
]);

export const insertEmployee = (data) => {
    let employees = getAllEmployee();
    data['id'] = generateEmployeeId();
    employees.push(data)
    localStorage.setItem(keys.employees, JSON.stringify(employees))
}

export const generateEmployeeId = () => {
    if(localStorage.getItem(keys.employeeId) == null){
        localStorage.setItem(keys.employeeId, '0')
    }
    var id = parseInt(localStorage.getItem(keys.employeeId))
    localStorage.setItem(keys.employeeId, (++id).toString())
    return id;
}

export const getAllEmployee = () => {
    if(localStorage.getItem(keys.employees) == null){
        localStorage.setItem(keys.employees, JSON.stringify([]))
    }
    let employees = JSON.parse(localStorage.getItem(keys.employees))
    //map departmentID to department title
    let departments = getDepartmentCollection();
    return employees?.map((x) => ({
        ...x,
        department: departments[x.departmentId - 1].title
    }))
};
