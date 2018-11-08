#!/usr/bin/python

from sklearn.naive_bayes import GaussianNB
import numpy as np

#assigning predictor and target variables
x=np.array([[1,2],[2,3],[3,4],[5,6]])
y=np.array([0,0,1,2])

#Create a Gaussian Classifier
model = GaussianNB()

# Train the model using the training sets 
model.fit(x, y)

#Predict Output 
predicted= model.predict([[4,5],[5,6]])
print predicted

