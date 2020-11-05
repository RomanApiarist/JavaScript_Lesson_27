//1
function Auto(){
    this.brandName = brandName;
    this.model = model;
    this.productionYear = productionYear;
}

//2
var create_obj = _.create(Auto.prototype, {brandName: 'audi', model: 'Q8', productionYear: '2019'});
console.log(create_obj);

//3
var inverted_obj = _.invert(create_obj);
console.log(inverted_obj);

//4
var picked_obj = _.pick(create_obj, 'brandName', 'productionYear');
console.log(picked_obj);

var omited_obj = _.omit(create_obj, 'model');
console.log(omited_obj);