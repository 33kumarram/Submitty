/* exported toggleColumnsForm, updateManageStudentsColumns, fillAllCheckboxes
*/

//Data structure for active columns
const checkboxes = document.getElementsByClassName('toggle-columns-box');

//opens modal with initial settings for new student
function toggleColumnsForm() {
    const form = $('#toggle-columns-form');
    form.css('display', 'block');
    checkProperTicks();
}

//checks proper tick marks in modal
function checkProperTicks() {
    const selectedColumns = loadColumns();
    for (let i = 0; i<checkboxes.length; i++) {
        if (selectedColumns[i] === 1) {
            checkboxes[i].checked = true;
        }
        else {
            checkboxes[i].checked = false;
        }
    }
}

function updateManageStudentsColumns() {
    getCheckboxValues();
    location.reload();
}

//Gets the values of all the checkboxes
function getCheckboxValues() {
    const selectedColumns = new Array(12);
    for (let i = 0; i<checkboxes.length; i++) {
        if (checkboxes[i].checked === true) {
            selectedColumns[i] = 1;
        }
        else {
            selectedColumns[i] = 0;
        }
    }
    saveColumns(selectedColumns);
}

function fillAllCheckboxes(val) {
    for (let i = 0; i<checkboxes.length; i++) {
        checkboxes[i].checked = val;
    }
}

//Cookies (loading and storing)
function saveColumns(selectedColumns) {
    Cookies.set('active_columns', selectedColumns.join('-'));
}

function loadColumns() {
    const cookie = Cookies.get('active_columns').split('-');
    for (let i = 0; i< cookie.length; i++) {
        if (cookie[i] === '1') {
            cookie[i] = 1;
        }
        else {
            cookie[i] = 0;
        }
    }
    return cookie;
}
