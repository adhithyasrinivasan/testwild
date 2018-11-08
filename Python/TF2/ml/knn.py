import numpy as np
from sklearn.model_selection import cross_val_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import pandas as pd
from sklearn import datasets, linear_model
from sklearn.model_selection import train_test_split
names=['ip','op1']
df = pd.read_csv('testdata.csv', header=None, names=names)
print(df.head())
X = np.array(df.ix[:, 0:1]) 	# end index is exclusive
y = np.array(df['op1'])
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)
from sklearn.neighbors import KNeighborsClassifier
knn = KNeighborsClassifier(n_neighbors=3)
knn.fit(X_train, y_train)
pred = knn.predict(X_test)
print( accuracy_score(y_test, pred))
myList = list(range(1,50))

# subsetting just the odd ones
neighbors = filter(lambda x: x % 3 == 0, myList)

# empty list that will hold cv scores
cv_scores = []

# perform 10-fold cross validation
for k in neighbors:
    knn = KNeighborsClassifier(n_neighbors=k)
    scores = cross_val_score(knn, X_train, y_train, cv=10, scoring='accuracy')
    cv_scores.append(scores.mean())

