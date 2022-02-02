class Walker {
    constructor(id, categoryIds, title, price, rating, imageUrl, lengthOfWalks, acceptedDogSize, info, isCertified, name) { 
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.imageUrl = imageUrl;
        this.lengthOfWalks = lengthOfWalks;
        this.acceptedDogSize = acceptedDogSize;
        this.info = info;
        this.isCertified = isCertified;
        this.name = name;
    }
}
export default Walker;