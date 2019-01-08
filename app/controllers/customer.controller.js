var customers = {
				customer1: {
					firstname: "Jack",
					lastname: "Davis",
					age: 25,
					id: 1
				},
				customer2: {
					firstname: "Mary",
					lastname: "Taylor",
					age: 37,
					id: 2
				},
				customer3: {
					firstname: "Peter",
					lastname: "Thomas",
					age: 17,
					id: 3
				},
				customer4: {
					firstname: "Mark",
					lastname: "Spitz",
					age: 67,
					id: 4
				}
			}

var version = {
				version: {
					major: "1",
					minor: "0"
				}
			}			

exports.api = function(req, res) {
    res.end(JSON.stringify(version, null, 4));  
};			

exports.create = function(req, res) {
	var newCustomer = req.body;
    customers["customer" + newCustomer.id] = newCustomer;
    res.end(JSON.stringify(newCustomer, null, 4));
};

exports.findAll = function(req, res) {
    res.end(JSON.stringify(customers, null, 4));  
};

exports.findOne = function(req, res) {
    var customer = customers["customer" + req.params.id];
    res.end(JSON.stringify(customer, null, 4));
};

exports.update = function(req, res) {
	var id = parseInt(req.params.id);
	var updatedCustomer = req.body; 
	if(customers["customer" + id] != null){
		customers["customer" + id] = updatedCustomer;
		res.end(JSON.stringify(updatedCustomer, null, 4));
	}else{
		res.end("Don't Exist Customer:\n:" + JSON.stringify(updatedCustomer, null, 4));
	}
};

exports.delete = function(req, res) {
	var deleteCustomer = customers["customer" + req.params.id];
    delete customers["customer" + req.params.id];
    res.end(JSON.stringify(deleteCustomer, null, 4));
};