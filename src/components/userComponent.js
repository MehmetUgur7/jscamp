import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi.")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Engin","Demiroğ","Ankara")
let user2 = new User(2,"Mehmet","Uğur","Antalya")

userService.add(user1)
userService.add(user2)

//console.log(userService.list())
//console.log(userService.getById(2))

//userService.getById(1)
//userService.list()

let customer = {id:1, firstName:"Engin"}

customer.lastName="Demiroğ"

console.log(customer.lastName)

console.log(".............................")
userService.load()

let customerToAdd = new Customer(6,"Seda","Yılmaz","Ankara","şsdlkfjh")
customerToAdd.type = "customer"

userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())
