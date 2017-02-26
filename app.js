var employee = [];					
employee["empName"] = "Oceanic";
employee["empAge"] = "30";
employee["empSalary"] = "30000";
address = [];
address["empCity"] = "Bangalore";
address["empState"] = "Karnataka";
address["empPincode"] = "560068";
for(var empDetail in employee)
{
	console.log(empDetail + " " +employee[empDetail]);
}
for(var empAddress in address)
{
	console.log(empAddress + " " +address[empAddress]);
}