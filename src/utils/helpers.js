function createGfKeyFromField(string) {
    const fieldName = 'input_'
    const field = string.slice(string.indexOf(fieldName) + fieldName.length)
    return field.replace('_', '.')
}

// Check if element is an object
function isObject(element) {
    if (typeof element !== 'object') return false
    return true
}

function isObjEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) return false
    }
    return true
}

module.exports = {
    createGfKeyFromField,
    isObject,
    isObjEmpty,
}
