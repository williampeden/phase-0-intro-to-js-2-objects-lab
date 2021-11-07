// Write your solution in this file!
const employee = {
    name: 'William Peden',
    streetAddress: '117 Thomas St.',
  };
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newemployee= { ...employee };
  
    newemployee[key] = value;
  
    return newemployee;
  }
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
  
    return employee;
  } 
  function deleteFromEmployeeByKey(employee, key, value) {
      const newemployee= {...employee};
      delete newemployee.name;
      return newemployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
      delete employee.name;
      return employee;
  }