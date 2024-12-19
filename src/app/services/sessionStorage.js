// Store data in sessionStorage
export const saveToSessionStorage = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  };
  
  // Retrieve data from sessionStorage
  export const getFromSessionStorage = (key) => {
    return JSON.parse(sessionStorage.getItem(key)) || [];
  };
  
  // Add a new subject to sessionStorage
  export const addSubject = (studentId, subjectName, facultyName) => {
    const subjects = getFromSessionStorage("subjects");
    subjects.push({ studentId, subjectName, facultyName });
    saveToSessionStorage("subjects", subjects);
  };
  