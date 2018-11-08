import numpy as np
from sklearn.ensemble import RandomForestClassifier
import pandas as pd
from sklearn import datasets, linear_model
from sklearn.model_selection import train_test_split
columns="ip op1".split()
headers = ["ip","op1"]
test_data=pd.read_csv("testdata.csv")
test_data.columns=headers
print( test_data.describe())
df1=pd.DataFrame(test_data,columns=columns)
y=df1.op1
train_x, test_x, train_y, test_y = train_test_split(test_data["ip"], test_data["op1"],train_size=0.1)
train_x = train_x.reshape(1, -1)
train_y = train_y.reshape(1, -1)
print( "Train_y Shape :: ", train_y.shape)
print( "Test_x Shape :: ", test_x.shape)
print( "Test_y Shape :: ", test_y.shape)
clf = RandomForestClassifier()
clf.fit(train_x,train_y)
test_x = test_x.values.reshape(1, -1)
predictions=clf.predict(test_x)
print( "Train Accuracy :: ", accuracy_score(train_y, trained_model.predict(train_x)))
print( "Test Accuracy  :: ", accuracy_score(test_y, predictions))
print( " Confusion matrix ", confusion_matrix(test_y, predictions))
print("Trained model:",clf)
