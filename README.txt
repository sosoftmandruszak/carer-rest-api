To run testScript use script testTool/testScript.js commands

# get patient with id
node testScript.js patient get 1

# get all patients
node testScript.js patient get_all

# create patient
node testScript.js patient create "{\"firstName\":\"Magda\", \"lastName\":\"Andruszak\",\"country\":\"Poland\", \"birthDate\":\"1990-01-01\"}"

# get patient with id
node testScript.js carer get 1

# get all carers
node testScript.js carer get_all

# create carer
node testScript.js carer create "{\"firstName\":\"Magda\", \"lastName\":\"Andruszak\"}"

# add patient to carer
node testScript.js relate {patientId} {carerId}

# testScript body examples for carer
node testScript.js carer create "{\"firstName\":\"Magda\", \"lastName\":\"Kowalska\"}"

# testScript body examples for patient
node testScript.js patient create "{\"firstName\":\"Tomasz\", \"lastName\":\"Zieba\",\"country\":\"Poland\", \"birthDate\":\"1960-01-01\"}"
