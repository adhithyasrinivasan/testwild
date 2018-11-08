import json

def mAccountHolder():
	mah={}
	contact={}
	contact['primaryEmail']='adhithya.srinivasan+8@db.com'
	contact['primaryPhone']="21541"
	mah['contact']=contact

data={}
data['mAccountHolder']=mAccountHolder()
json_data=json.dumps(data)

print(json_data)
