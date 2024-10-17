function filter(attraction, age, height) {
    /*
    {
        name: "The roller coaster",
        description: "Blazing speeds on a winding route through the mysteries of the McChun Mine",
        minAge: 12,
        minHeight: 130,
        maxHeight: 210,
    },
    */
    //write your JS code here:
    if (!isNaN(attraction.minAge) && (age < attraction.minAge)) {
        return false;
    }

    if (!isNaN(attraction.maxAge) && (age > attraction.maxAge)) {
        return false;
    }

    if (!isNaN(attraction.minHeight) && (height < attraction.minHeight)) {
        return false;
    }

    if (!isNaN(attraction.maxHeight) && (height > attraction.maxHeight)) {
        return false;
    }

    return true;
}