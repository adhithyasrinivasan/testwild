from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import cross_val_score
from sklearn.ensemble import RandomForestClassifier
import numpy as np
#myList = list(range(1,50))
myList= np.random.randint(0, high=999999999, size=100, dtype='l')
myList.reshape(-1, 1)
neighbors = filter(lambda x: x % 3 == 0, myList)
neighbors.values.reshape(-1,1)
print(neighbors)
rfc=RandomForestClassifier()
rfc.fit(myList,neighbors)
cv_scores = []

