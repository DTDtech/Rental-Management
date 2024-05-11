export const EqualityCheck = (object1, object2) => {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (object1[key].toString() !== object2[key].toString()) {
            console.log(object1[key].toString());
            console.log(object2[key].toString());
            return false;
        }
    }

    return true;
}

// export const sortByDate = (object1, object2) => {

// }