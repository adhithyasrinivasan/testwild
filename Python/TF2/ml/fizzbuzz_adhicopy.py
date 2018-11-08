# -*- coding: utf-8 -*-
import numpy as np
import pandas as pd
from sklearn.neural_network import MLPClassifier
from sklearn.cluster import KMeans

from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix
from sklearn.naive_bayes import GaussianNB
from sklearn.neighbors import KNeighborsRegressor
data = pd.read_csv("my_file.csv")  
testData=pd.read_csv("testdata.csv")
data.head()
testData.head()

X = data.iloc[:,0]  
y = data.iloc[:,1]  

X.head()
y.head()
testy=testData.iloc[:,0]

train_x, test_x, train_y, test_y = train_test_split(X, y,test_size=0.1, stratify=y)  



#print(X.shape, y.shape, train_x.shape, test_x.shape, train_y.shape,test_y.shape)  

clf = RandomForestClassifier()
clf.fit(train_x.values.reshape(-1,1),train_y)

#predictions=clf.predict(test_x.reshape(-1,1))
predictions=clf.predict(testy.values.reshape(-1,1))
#print( "Train Accuracy :: ", accuracy_score(train_y, clf.predict(train_x.reshape(-1,1))))
#print( "Test Accuracy  :: ", accuracy_score(test_y, predictions))
#print( " Confusion matrix ", confusion_matrix(test_y, predictions))
#print("Trained model:",clf)


cla=KMeans()
cla.fit(train_x.values.reshape(-1,1),train_y)
prediction=cla.predict(testy.values.reshape(-1,1))
print(prediction)
