function groupAdultsByAgeRange(people) {
    return people
        .filter(person => person.age >= 18)
        .reduce((acc, person) => {
            if(person.age <= 20) {
                acc['20 and younger'] = acc['20 and younger'] || []
                acc['20 and younger'].push(person)
            } else if (person.age <= 30) {
                acc['21-30'] = acc['21-30'] || []
                acc['21-30'].push(person)
            } else if (person.age <= 40) {
                acc['31-40'] = acc['31-40'] || []
                acc['31-40'].push(person)
            } else if (person.age <= 50) {
                acc['41-50'] = acc['41-50'] || []
                acc['41-50'].push(person)
            } else {
                acc['51 and older'] = acc['51 and older'] || []
                acc['51 and older'].push(person)
            }
            return acc   
        }, {} )
}


module.exports = {groupAdultsByAgeRange}