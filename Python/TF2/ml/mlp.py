# -*- coding: utf-8 -*-
from sklearn.neural_network import MLPClassifier
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix

data = pd.read_csv("my_file.csv")  # Reading dataset
testData=pd.read_csv("testdata.csv")
data.head()
testData.head()

X = data.iloc[:,0]   # Choosing the independant column as X using integer slicing. For more info check out pandas documentation
y = data.iloc[:,1]   # Choosing the dependant column to be predicted as Y

X.head()
y.head()
testy=testData.iloc[:,0]

train_x, test_x, train_y, test_y = train_test_split(X, y,test_size=0.1, stratify=y)  # Stratified sampling in Y, setting the train:test ratio as 0.8:0.2

print(X.shape, y.shape, train_x.shape, test_x.shape, train_y.shape,test_y.shape)  # Printing the shape of each split to verify they are right

clf = RandomForestClassifier()
#clf.fit(train_x.reshape(-1,1),train_y)

mlp=MLPClassifier(solver='lbfgs', alpha=1e-5,hidden_layer_sizes=(5, 2), random_state=1)
mlp1=MLPClassifier(hidden_layer_sizes=(15,), random_state=1, max_iter=1, warm_start=True)
mlp1.fit(train_x.reshape(-1,1),train_y)
predictions=mlp1.predict(test_x.reshape(-1,1))
#predictions=clf.predict(testy.reshape(-1,1))
#predictions=mlp.predict(testy.reshape(-1,1))
#print( "Train Accuracy :: ", accuracy_score(train_y, clf.predict(train_x.reshape(-1,1))))
#print( "Test Accuracy  :: ", accuracy_score(test_y, predictions))
#print( " Confusion matrix ", confusion_matrix(test_y, predictions))
#print("Trained model:",clf)
print(testy)
print(predictions)
